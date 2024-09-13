import { Metadata } from "next";
import BlogGrid from "./_components/BlogGrid";
import { defaultUrl } from "../layout";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Blog - Oliver Lister | Insights on Web Development & Design",
  description:
    "Read my latest blog posts on web development, design trends, and industry insights. Stay updated with tips, tutorials, and my thoughts on the ever-evolving tech world.",
};

export default function Blog() {
  return (
    <div>
      <BlogGrid />
    </div>
  );
}
