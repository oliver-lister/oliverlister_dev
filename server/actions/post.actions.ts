"use server";

import { DeleteObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { z } from "zod";
import { isAdminProcedure, ownsPostProcedure } from "./procedures";
import { createClient } from "@/libs/utils/supabase/server";
import { S3 } from "@/libs/utils/cloudflare/s3";
import fs from "fs";
import path from "path";

export const savePostMetadataToDatabase = isAdminProcedure
  .createServerAction()
  .input(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  )
  .handler(async ({ input, ctx }) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("posts")
      .insert([
        {
          title: input.title,
          description: input.description,
          author_id: ctx.user.id,
          slug: input.title.toLowerCase().split(" ").join("-"),
        },
      ])
      .select("id, slug")
      .single();

    return {
      post_id: data?.id as number,
      slug: data?.slug as string,
    };
  });

export const getPresignedUrl = ownsPostProcedure
  .createServerAction()
  .input(
    z.object({
      fileName: z.string(),
      fileSize: z.number(),
      fileType: z.string(),
      post_id: z.number(),
    })
  )
  .handler(async ({ input }) => {
    const { fileName, fileSize, fileType } = input;

    const sizeLimit = 5 * 1024 ** 2; // 5MB

    if (fileSize > sizeLimit) {
      throw new Error(`File size is above the 5MB limit`);
    }

    const objectKey = `${input.post_id}/${fileName}`;

    const cmd = new PutObjectCommand({
      Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
      Key: objectKey,
      ContentLength: fileSize,
      ContentType: fileType,
    });

    const imageUrl = `${process.env.CLOUDFLARE_R2_BASE_IMAGE_PATH}/${objectKey}`;

    const presignedUrl = await getSignedUrl(S3, cmd, { expiresIn: 3600 });

    return { presignedUrl, imageUrl };
  });

export const createMDXFile = ownsPostProcedure
  .createServerAction()
  .input(z.object({ slug: z.string() }))
  .handler(async ({ input }) => {
    const directoryPath = path.join(process.cwd(), "posts");
    const filePath = path.join(directoryPath, `${input.slug}.mdx`);
    const fileContent = "This is the content of the file";

    fs.writeFile(filePath, fileContent, "utf-8", (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File written successfully");
      }
    });
  });

export const updateImageUrl = ownsPostProcedure
  .createServerAction()
  .input(
    z.object({
      image_url: z.string(),
      post_id: z.number(),
    })
  )
  .handler(async ({ input }) => {
    const supabase = createClient();
    const { data, error } = await supabase
      .from("posts")
      .update({ image_url: input.image_url })
      .eq("id", input.post_id);
  });

export const deletePost = ownsPostProcedure
  .createServerAction()
  .input(z.object({ post_id: z.number() }))
  .handler(async ({ input }) => {
    const supabase = createClient();
    const { post_id } = input;

    // delete img from R2 bucket
    const { data: postData, error: postError } = await supabase
      .from("posts")
      .select("image_url, slug")
      .eq("id", post_id)
      .single();

    const imageUrl = postData?.image_url;
    const objectKey = imageUrl?.split("/").slice(-2).join("/"); // extract the object key from the URL

    const bucketParams = {
      Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
      Key: objectKey,
    };

    const s3Data = await S3.send(new DeleteObjectCommand(bucketParams));

    // delete mdx file from posts folder
    const directoryPath = path.join(process.cwd(), "posts");
    const filePath = path.join(directoryPath, `${postData?.slug}.mdx`);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(`Error removing file: ${err}`);
        return;
      }
      console.log(`File ${filePath} has been successfully removed.`);
    });

    // delete post metadata on supabase
    await supabase.from("posts").delete().eq("id", post_id);
  });
