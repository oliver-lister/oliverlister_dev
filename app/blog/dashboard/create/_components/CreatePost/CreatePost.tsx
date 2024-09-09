"use client";

import {
  createMDXFile,
  getPresignedUrl,
  savePostMetadataToDatabase,
  updateImageUrl,
} from "@/server/actions/post.actions";
import CreatePostForm, { CreatePostFormData } from "./CreatePostForm";
import axios from "axios";
import { useUser } from "@/libs/store/user";
import { IconLayoutDashboard } from "@tabler/icons-react";
import Button from "@/components/Button/Button";
import { useState } from "react";
import Link from "next/link";

const CreatePost = () => {
  const user = useUser((state) => state.user);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (values: CreatePostFormData) => {
    setIsLoading(true);
    const { title, description, files } = values;
    const file = files[0]; // select first file in file arr from input

    // server action to POST blog post metadata to supabase db
    const [dbData, dbError] = await savePostMetadataToDatabase({
      title,
      description,
    });

    if (dbError) {
      setError(dbError.message);
      setIsLoading(false);
      throw dbError;
    }

    const post_id = dbData?.post_id;

    if (!post_id) {
      setError("No post_id retrieved from supabase");
      setIsLoading(false);
      throw new Error("No post_id retrieved from supabase");
    }

    // server action to GET presigned URL from R2 bucket
    const [urlData, urlError] = await getPresignedUrl({
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      post_id,
    });

    if (urlError) {
      setError(urlError.message);
      setIsLoading(false);
      throw urlError;
    }

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

    if (updateError) {
      setError(updateError.message);
      setIsLoading(false);
      throw updateError;
    }

    // server action to create MDX file
    const slug = dbData.slug;
    const [mdxData, mdxError] = await createMDXFile({
      slug,
      post_id,
    });

    if (mdxError) {
      setError(mdxError.message);
      setIsLoading(false);
      throw mdxError;
    }

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="grid gap-2">
      <div className="flex justify-between">
        <h2 className="text-3xl font-semibold">
          {isSubmitted ? "Post Created" : "Create Post"}
        </h2>
        <Button variant="accent" href="/blog/dashboard">
          Dashboard <IconLayoutDashboard />
        </Button>
      </div>
      {isSubmitted ? null : (
        <p>
          You're logged in as{" "}
          <span className="font-semibold">{user?.user_metadata.user_name}</span>
          .
        </p>
      )}
      {error ? (
        <>
          <div className="p-2 bg-red-200 border-2 border-red-500 text-red-500 rounded-lg">
            <span className="font-bold">Error:</span> {error}
          </div>
        </>
      ) : null}
      {isSubmitted ? (
        <>
          <p>
            You've successfully created a new blog post. To view it in the
            Dashboard,{" "}
            <Link href="/blog/dashboard" className="text-accent underline">
              click here
            </Link>
            .
          </p>
          <p>
            To create another new blog post,{" "}
            <Link
              href="/blog/dashboard/create"
              onClick={() => window.location.reload()}
              className="text-accent underline"
            >
              click here
            </Link>
            .
          </p>
        </>
      ) : (
        <CreatePostForm onSubmit={handleSubmit} isLoading={isLoading} />
      )}
    </div>
  );
};

export default CreatePost;
