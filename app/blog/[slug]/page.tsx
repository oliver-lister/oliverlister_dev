import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createClient } from "@/libs/utils/supabase/server";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { Metadata } from "next";

type BlogPostProps = {
  params: { slug: string };
};

const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
  const slug = params.slug;
  const url = encodeURIComponent(process.env.BASE_URL + "/blog/" + slug);

  const socialShareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    x: `https://twitter.com/intent/tweet?url=${url}&text=`,
    linkedin: `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=`,
  };

  // Fetch metadata from Supabase
  const supabase = createClient();
  const { data: postMetadata, error } = await supabase
    .from("posts")
    .select("title, description, created_at, author_id, image_url, slug")
    .eq("slug", slug)
    .single();

  if (error) {
    return (
      <article className="grid gap-2 p-2 border-2 rounded-lg border-red-500 min-h-[40vh] place-content-center text-center text-red-500 bg-red-200">
        <h2 className="font-bold text-3xl">Oops!</h2>
        <p>Error loading post metadata: {error.message}</p>
        <p>
          To return to the home page{" "}
          <Link href="/" className="underline font-semibold text-red-900">
            click here
          </Link>
          .
        </p>
      </article>
    );
  }

  const { data: authorMetadata, error: authorError } = await supabase
    .from("users")
    .select("display_name, image_url")
    .eq("id", postMetadata.author_id)
    .single();

  // Load the corresponding MDX file
  const postFilePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");

  const date = format(new Date(postMetadata.created_at), "PPPP");

  return (
    <article className="grid gap-4">
      <div className="grid gap-2">
        <h2 className="text-6xl font-semibold">{postMetadata.title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Link
              href={`/blog/authors/${authorMetadata?.display_name}`}
              className="rounded-full border-[2px] border-accent overflow-hidden hover:border-accent-400"
            >
              <Image
                src={authorMetadata?.image_url}
                alt="Author avatar"
                width={50}
                height={50}
              />
            </Link>
            <div className="grid">
              <Link
                href={`/blog/authors/${authorMetadata?.display_name}`}
                className="font-medium text-accent underline hover:text-accent-400"
              >
                {authorMetadata?.display_name}
              </Link>
              <p className="text-sm font-thin">{date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <p className="font-thin text-sm">Share</p>
            <a
              href={socialShareLinks.facebook}
              className="hover:scale-105 transition-all hover:text-accent"
            >
              <IconBrandFacebook stroke={1} />
            </a>
            <a
              href={socialShareLinks.x}
              className="hover:scale-105 transition-all hover:text-accent"
            >
              <IconBrandX stroke={1} />
            </a>
            <a
              href={socialShareLinks.linkedin}
              className="hover:scale-105 transition-all hover:text-accent"
            >
              <IconBrandLinkedin stroke={1} />
            </a>
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full max-h-[60vh]">
        <Image
          src={postMetadata.image_url}
          width={1240}
          height={1240}
          alt="banner"
        />
      </div>
      <MDXRemote source={fileContent} />
    </article>
  );
};
export default BlogPost;
