"use client";

import { useState } from "react";
import Switch from "@/components/Switch/Switch";

import ActionMenu from "./ActionMenu";

const BlogTableRow = () => {
  // Switch state
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleSwitch = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <p className="col-span-2">Blog title</p>
      <Switch id="premium" isChecked={isChecked} onToggle={toggleSwitch} />
      <Switch id="publish" isChecked={isChecked} onToggle={toggleSwitch} />
      <ActionMenu />
    </>
  );
};

export default BlogTableRow;
