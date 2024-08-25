"use client";

import React, { useState } from "react";
import ActionButtons from "./ActionButtons";
import Switch from "@/components/Switch/Switch";

const BlogTable = () => {
  const [checked, setChecked] = useState(true);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="dark:border-zinc-600 border-zinc-400 border bg-gradient-light dark:bg-gradient-dark rounded-md">
      <div className="grid grid-cols-5 text-zinc-600 dark:text-zinc-400 border-b border-zinc-400 dark:border-zinc-600 py-2 px-3">
        <p className="col-span-2">Title</p>
        <p>Premium</p>
        <p>Publish</p>
      </div>
      <div className="grid grid-cols-5 py-2 px-3 items-center">
        <p className="col-span-2">Blog title</p>
        <Switch checked={checked} onChange={toggleChecked} />
        <p>Blog title</p>
        <ActionButtons />
      </div>
    </div>
  );
};

export default BlogTable;
