"use client";

import React from "react";
import TableOfContents, { Toc } from "./_components/TableOfContents";
import SimilarPosts from "./_components/SimilarPosts";
import useElementHeight from "../../../../../../hooks/useElementHeight";

type PostSidebarProps = {
  toc: Toc;
};

const PostSidebar: React.FC<PostSidebarProps> = ({ toc }) => {
  const headerHeight = useElementHeight("header");

  return (
    <aside className="hidden lg:block h-full">
      <div className="sticky grid gap-4" style={{ top: headerHeight + 16 }}>
        <TableOfContents toc={toc} />
        <SimilarPosts />
      </div>
    </aside>
  );
};

export default PostSidebar;
