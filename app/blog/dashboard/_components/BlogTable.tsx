"use client";

import { useState } from "react";
import ActionButtons from "./ActionButtons";
import Switch from "@/components/Switch/Switch";

const BlogTable = () => {
  // Switch state
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
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
        <Switch id="premium" isChecked={isChecked} onToggle={toggleSwitch} />
        <Switch id="publish" isChecked={isChecked} onToggle={toggleSwitch} />
        <ActionButtons />
      </div>
    </div>
  );
};

export default BlogTable;
