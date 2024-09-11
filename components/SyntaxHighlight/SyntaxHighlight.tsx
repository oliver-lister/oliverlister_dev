"use client";

import { IconCopy } from "@tabler/icons-react";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/hljs/atelier-dune-dark";
import Button from "../Button/Button";

export default function SyntaxHighlight({
  className,
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) {
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
    <div className="relative">
      <Button
        variant="outline"
        className="absolute top-2 right-4 text-secondary flex items-center"
      >
        <IconCopy /> Copy
      </Button>
      <SyntaxHighlighter language={language} style={theme} PreTag="div">
        {formattedChildren}
      </SyntaxHighlighter>
    </div>
  );
}
