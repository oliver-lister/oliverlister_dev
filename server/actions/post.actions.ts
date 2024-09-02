"use server";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { z } from "zod";
import { isAdminProcedure, ownsPostProcedure } from "./procedures";
import { S3 } from "@/libs/utils/cloudflare/s3";
import { createClient } from "@/libs/utils/supabase/server";

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
        },
      ])
      .select("id")
      .single();

    return {
      post_id: data?.id as number,
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
      Bucket: process.env.NEXT_PUBLIC_CLOUDFLARE_R2_BUCKET_NAME,
      Key: objectKey,
      ContentLength: fileSize,
      ContentType: fileType,
    });

    const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_BASE_IMAGE_PATH}/${objectKey}`;

    const presignedUrl = await getSignedUrl(S3, cmd, { expiresIn: 3600 });

    return { presignedUrl, imageUrl };
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
