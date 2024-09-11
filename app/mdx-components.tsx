import SyntaxHighlight from "@/components/SyntaxHighlight/SyntaxHighlight";
import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

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
    Link: (props) => (
      <Link
        className="text-accent font-medium hover:underline"
        {...(props as LinkProps)}
      >
        {props.children}
      </Link>
    ),
    code: SyntaxHighlight,
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
