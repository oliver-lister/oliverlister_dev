"use client";

import { useState } from "react";
import Switch from "@/components/Switch/Switch";

import ActionMenu from "./ActionMenu";

const BlogTableRow = () => {
  return (
    <>
      <p className="col-span-2">Blog title</p>
      <Switch id="publish" />
      <ActionMenu />
    </>
  );
};

export default BlogTableRow;
