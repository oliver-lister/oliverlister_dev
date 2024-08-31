import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3 } from "@/libs/utils/cloudflare/s3";

export const handleDropFile = async () => {
  const objectKey = `postId/fileName`;

  const cmd = new PutObjectCommand({
    Bucket: process.env.NEXT_CLOUDFLARE_R2_BUCKET_NAME!,
    Key: objectKey,
    ContentLength: 2000,
    ContentType: "fileType",
  });

  const imageUrl = `${process.env.NEXT_CLOUDFLARE_R2_BASE_IMAGE_PATH!}`;

  const presignedUrl = await getSignedUrl(S3, cmd, { expiresIn: 3600 });

  return { presignedUrl, imageUrl };
};
