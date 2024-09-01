"use client";

import axios from "axios";
import CreateForm, { CreatePostFormData } from "./_components/CreatePostForm";
import { createClient } from "@/libs/utils/supabase/client";
import { handleUploadFile } from "@/server/actions/post.actions";

const Create = () => {
  const handleSubmit = async (values: CreatePostFormData) => {
    const { title, description, image } = values;

    const supabase = createClient();

    const savePostToDatabase = async (
      title: string,
      description: string,
      userId: string
    ) => {
      const { data, error } = await supabase
        .from("posts")
        .insert([
          {
            title,
            description,
            author_id: userId,
          },
        ])
        .select("id")
        .single();

      return {
        post_id: data?.id,
      };
    };

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user);
    if (!user) throw new Error();

    const { post_id } = await savePostToDatabase(title, description, user.id);

    const img = image[0];

    const [data, error] = await handleUploadFile({
      name: img.name,
      size: img.size,
      type: img.type,
      post_id: post_id,
    });

    console.log(data, error);

    const updateImageUrl = async (imageUrl: string, postId: string) => {
      const { data, error } = await supabase
        .from("posts")
        .update({ image_url: imageUrl })
        .eq("id", postId);
    };

    await axios.put(data?.presignedUrl!, img, {
      headers: {
        "Content-Type": image.type,
      },
    });

    await updateImageUrl(data?.imageUrl!, post_id);
  };

  return (
    <div>
      <CreateForm onSubmit={handleSubmit} isLoading={false} />
    </div>
  );
};

export default Create;
