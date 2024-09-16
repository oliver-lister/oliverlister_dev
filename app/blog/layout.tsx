import GradientUnderline from "@/components/GradientUnderline";
import { Metadata } from "next";

// Metadata
const title = "Blog - Oliver Lister | Insights on Web Development & Design";
const description =
  "Read my latest blog posts on web development, design trends, and industry insights. Stay updated with tips, tutorials, and my thoughts on the ever-evolving tech world.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    url: "/blog",
    siteName: "Oliver Lister | Portfolio & Blog - Web Developer",
    images: ["/ol_headshot.webp"],
  },
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section id="blog">
      <div className="wrapper mt-header grid gap-6 ">
        <GradientUnderline>
          <h1 className="text-5xl font-bold">Blog</h1>
        </GradientUnderline>
        {children}
      </div>
    </section>
  );
};

export default BlogLayout;
