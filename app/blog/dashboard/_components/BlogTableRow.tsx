"use client";

import Switch from "@/components/Switch/Switch";
import ActionMenu from "./ActionMenu";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/libs/utils/supabase/client";
import { useEffect } from "react";

export type BlogTableRowProps = {
  post: {
    id: number;
    title: string;
    slug: string;
    is_published: boolean;
  };
};

// zod schema
export const toggleIsPublishedSchema = z.object({
  is_published: z.boolean(),
});

export type toggleIsPublishedData = z.infer<typeof toggleIsPublishedSchema>;

const BlogTableRow: React.FC<BlogTableRowProps> = ({ post }) => {
  const supabase = createClient();

  const { handleSubmit, watch, register } = useForm<toggleIsPublishedData>({
    resolver: zodResolver(toggleIsPublishedSchema),
    defaultValues: {
      is_published: post.is_published,
    },
  });

  const toggleIsPublished = async (values: toggleIsPublishedData) => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .update({ is_published: values.is_published })
        .eq("id", post.id);

      if (error) {
        throw error;
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  // Submit switch value onChange using watch API
  useEffect(() => {
    const subscription = watch(() => handleSubmit(toggleIsPublished)());
    return () => subscription.unsubscribe();
  }, [handleSubmit, watch]);

  return (
    <>
      <p className="col-span-2">{post.title}</p>
      <form>
        <Switch
          id={`publish-switch-${post.id}`}
          reactHookFormProps={register("is_published")}
        />
      </form>
      <ActionMenu id={post.id} slug={post.slug} />
    </>
  );
};

export default BlogTableRow;
