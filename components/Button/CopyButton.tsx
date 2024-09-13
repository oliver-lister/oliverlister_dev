"use client";

import { useState } from "react";
import Button from "./Button";
import { IconCopy } from "@tabler/icons-react";

export const CopyButton = ({ text }: { text: string | undefined }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <Button disabled={isCopied} onClick={copy} className="relative">
      <div className="absolute left-[-4rem]">
        {" "}
        {isCopied ? "Copied!" : "Copy"}
      </div>
      <IconCopy />
    </Button>
  );
};
