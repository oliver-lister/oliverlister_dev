"use client";

import {
  getPresignedUrl,
  savePostMetadataToDatabase,
  updateImageUrl,
} from "@/server/actions/post.actions";
import CreateForm, { CreatePostFormData } from "./_components/CreatePostForm";
import axios from "axios";

const Create = () => {
  const handleSubmit = async (values: CreatePostFormData) => {
    const { title, description, files } = values;
    const file = files[0]; // select first file in file arr from input

    // server action to POST blog post metadata to supabase db
    const [dbData, dbError] = await savePostMetadataToDatabase({
      title,
      description,
    });

    if (dbError) throw dbError;

    const post_id = dbData?.post_id;
    if (!post_id) throw new Error("No post_id retrieved from supabase");

    // server action to GET presigned URL from R2 bucket
    const [urlData, urlError] = await getPresignedUrl({
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      post_id,
    });
    if (urlError) throw urlError;

    // upload file directly to R2 bucket using PUT request to presignedurl
    await axios.put(urlData.presignedUrl, file, {
      headers: {
        "Content-Type": file.type,
      },
    });

    // server action to PATCH request image url in the supabase db after uploading
    const [updateData, updateError] = await updateImageUrl({
      post_id: post_id,
      image_url: urlData.imageUrl,
    });

    if (updateError) throw updateError;
  };

  return (
    <div>
      <CreateForm onSubmit={handleSubmit} isLoading={false} />
    </div>
  );
};

export default Create;
