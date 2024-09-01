import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { z } from "zod";
import { createServerAction } from "zsa";
import { S3Client } from "@aws-sdk/client-s3";

const account_id = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ACCOUNT_ID!;
const access_id = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ACCESS_ID!;
const access_key = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ACCESS_KEY!;

export const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${account_id}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: `${access_id}`,
    secretAccessKey: `${access_key}`,
  },
});

const fileSchema = z.object({
  name: z.string(),
  size: z.number(),
  type: z.string(),
  post_id: z.number(),
});

export const handleUploadFile = createServerAction()
  .input(fileSchema)
  .handler(async ({ input }) => {
    const fileName = input.name;

    const size = input.size;
    const sizeLimit = 5 * 1024 ** 2; // 5MB

    if (size > sizeLimit) {
      throw new Error(`File size is above the 5MB limit`);
    }

    const fileType = input.type;

    const objectKey = `${input.post_id}/${fileName}`;

    console.log(objectKey);

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
