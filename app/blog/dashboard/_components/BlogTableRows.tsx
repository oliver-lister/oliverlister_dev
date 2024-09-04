"use client";

import React, { useEffect, useState } from "react";
import BlogTableRow, { BlogTableRowProps } from "./BlogTableRow";
import { createClient } from "@/libs/utils/supabase/client";

const BlogTableRows = ({
  serverPosts,
}: {
  serverPosts: BlogTableRowProps["post"][] | null;
}) => {
  const [posts, setPosts] = useState(serverPosts);
  const supabase = createClient();

  // Realtime changes in database are reflected in UI
  useEffect(() => {
    setPosts(serverPosts);
  }, [serverPosts]);

  useEffect(() => {
    const channel = supabase
      .channel("*")
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "posts" },
        (payload) =>
          setPosts((posts: any) =>
            posts.filter((post: any) => post.id !== payload.old.id)
          )
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [serverPosts]);
  return (
    <>
      {posts && posts.map((post) => <BlogTableRow key={post.id} post={post} />)}
    </>
  );
};

export default BlogTableRows;
