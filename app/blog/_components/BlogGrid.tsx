import BlogVerticalCard from "@/components/BlogVerticalCard/BlogVerticalCard";
import { createClient } from "@/libs/utils/supabase/server";
import React from "react";

const BlogGrid = async () => {
  const supabase = createClient();
  const { data: posts } = await supabase.from("posts").select("*");
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
      {posts &&
        posts.length > 0 &&
        posts.map((post) => <BlogVerticalCard key={post.id} {...post} />)}
    </div>
  );
};

export default BlogGrid;
