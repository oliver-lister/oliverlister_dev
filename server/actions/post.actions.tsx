"use server";

import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { z } from "zod";
import { ownsPostProcedure } from "./procedures";
import { S3 } from "@/libs/utils/cloudflare/s3";

export const handleUploadFile = ownsPostProcedure
  .createServerAction()
  .input(
    z.object({
      name: z.string(),
      size: z.number(),
      type: z.string(),
      post_id: z.number(),
    })
  )
  .handler(async ({ input }) => {
    const fileName = input.name;

    const size = input.size;
    const sizeLimit = 5 * 1024 ** 2; // 5MB

    if (size > sizeLimit) {
      throw new Error(`File size is above the 5MB limit`);
    }

    const fileType = input.type;

    const objectKey = `${input.post_id}/${fileName}`;

    const cmd = new PutObjectCommand({
      Bucket: process.env.NEXT_PUBLIC_CLOUDFLARE_R2_BUCKET_NAME,
      Key: objectKey,
      ContentLength: size,
      ContentType: fileType,
    });

    const imageUrl = `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_BASE_IMAGE_PATH}/${objectKey}`;

    const presignedUrl = await getSignedUrl(S3, cmd, { expiresIn: 3600 });

    return { presignedUrl, imageUrl };
  });
