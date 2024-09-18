import { IconScript } from "@tabler/icons-react";
import React from "react";

const SimilarPosts = () => {
  return (
    <nav id="similar-posts">
      <div className="flex items-center gap-2 px-4 py-2 border-b-2 border-accent text-accent">
        <IconScript />
        <h2 className="font-semibold text-lg uppercase">Similar Posts</h2>
      </div>
      <div className="px-4 py-2">
        <ul></ul>
      </div>
    </nav>
  );
};

export default SimilarPosts;
