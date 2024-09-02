import { S3Client } from "@aws-sdk/client-s3";

const account_id = process.env.CLOUDFLARE_R2_ACCOUNT_ID!;
const access_id = process.env.CLOUDFLARE_R2_ACCESS_ID!;
const access_key = process.env.CLOUDFLARE_R2_ACCESS_KEY!;

export const S3 = new S3Client({
  region: "auto",
  endpoint: `https://${account_id}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: access_id,
    secretAccessKey: access_key,
  },
});
