"use client";

import { IconCopy } from "@tabler/icons-react";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/cjs/styles/hljs/a11y-dark";
import Button from "../Button/Button";

interface SyntaxHighlightProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

export default function SyntaxHighlight({
  className,
  children,
}: SyntaxHighlightProps) {
  const language = className?.replace("language-", "");

  // Handle children as an array or single node and convert to string
  const formattedChildren = Array.isArray(children)
    ? children
        .map((child) => (typeof child === "string" ? child : String(child)))
        .join("")
    : typeof children === "string"
    ? children.trim()
    : String(children);

  return (
    <div className="relative border-2 border-accent-200 dark:border-accent-900 rounded-lg overflow-hidden">
      <Button
        variant="accent"
        aria-label="copy to clipboard"
        onClick={() => navigator.clipboard.writeText(formattedChildren)}
        className="absolute top-4 right-4 text-secondary flex items-center"
      >
        <IconCopy size={15} />
      </Button>
      <SyntaxHighlighter
        language={language}
        style={a11yDark}
        wrapLongLines
        wrapLines
      >
        {formattedChildren}
      </SyntaxHighlighter>
    </div>
  );
}
