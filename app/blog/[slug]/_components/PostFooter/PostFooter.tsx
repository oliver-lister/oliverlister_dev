import React from "react";
import { postMetadata } from "../../page";
import { createClient } from "@/libs/utils/supabase/server";
import AuthorInfo from "../AuthorInfo";
import { format } from "date-fns";
import ScrollToTop from "./_components/ScrollToTop";

type PostFooterProps = {
  postMetadata: postMetadata;
};

const PostFooter: React.FC<PostFooterProps> = async ({ postMetadata }) => {
  const supabase = createClient();
  const date = format(new Date(postMetadata.created_at), "PPPP");

  const { data: authorMetadata, error: authorError } = await supabase
    .from("users")
    .select("display_name, image_url")
    .eq("id", postMetadata.author_id)
    .single();

  return (
    <footer className="grid gap-4">
      <AuthorInfo
        image_url={authorMetadata?.image_url}
        display_name={authorMetadata?.display_name}
        date={date}
      />
      <div className="w-full flex justify-center">
        <ScrollToTop />
      </div>
    </footer>
  );
};

export default PostFooter;
