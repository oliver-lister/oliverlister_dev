"use client";

import { useState } from "react";
import Button from "./Button";
import { IconCopy } from "@tabler/icons-react";

export const CopyButton = ({ text }: { text: string | undefined }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="flex gap-4 items-center">
      <p className="text-sm font-inter">{isCopied ? "Copied!" : null}</p>
      <Button disabled={isCopied} onClick={handleCopy} variant="accent">
        <IconCopy size={15} />
      </Button>
    </div>
  );
};
