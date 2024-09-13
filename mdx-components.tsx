import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import Button from "./components/Button/Button";
import { IconCopy } from "@tabler/icons-react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => (
      <h3 className="text-3xl font-semibold">{children}</h3>
    ),
    h2: ({ children }) => <h4 className="text-2xl font-medium">{children}</h4>,
    p: ({ children }) => <p className="leading-relaxed">{children}</p>,
    a: (props) => (
      <a
        className="text-accent font-medium hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {props.children}
      </a>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 grid gap-2">{children}</ol>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-8 border-accent pl-4">
        {children}
      </blockquote>
    ),
    Link: (props) => (
      <Link
        className="text-accent font-medium hover:underline"
        {...(props as LinkProps)}
      >
        {props.children}
      </Link>
    ),
    pre: ({ children }) => (
      <pre className="bg-black text-secondary p-4 rounded-lg relative border-2 border-accent-200 dark:border-accent-900 overflow-hidden">
        <Button
          variant="accent"
          aria-label="copy to clipboard"
          className="absolute top-4 right-4 text-secondary flex items-center"
        >
          <IconCopy size={15} />
        </Button>
        {children}
      </pre>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        {...(props as ImageProps)}
      />
    ),
    ...components,
  };
}
