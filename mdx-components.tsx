import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";
import Button from "./components/Button/Button";
import { IconCopy } from "@tabler/icons-react";
import Pre from "./components/Pre/Pre";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children, id }) => (
      <h3 id={id} className="text-3xl font-semibold">
        {children}
      </h3>
    ),
    h2: ({ children, id }) => (
      <h4 id={id} className="text-2xl font-medium">
        {children}
      </h4>
    ),
    p: ({ children }) => <p className="leading-relaxed">{children}</p>,
    // a: (props) => (
    //   <a
    //     className="text-accent font-medium hover:underline"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //     {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
    //   >
    //     {props.children}
    //   </a>
    // ),
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
    pre: Pre,
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
