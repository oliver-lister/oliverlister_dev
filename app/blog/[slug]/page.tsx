import { createClient } from "@/libs/utils/supabase/server";
import Link from "next/link";
import { Metadata, ResolvingMetadata } from "next";
import axios from "axios";
import PostHeader from "./_components/PostHeader/PostHeader";
import MDXContent from "./_components/MDXContent";
import PostFooter from "./_components/PostFooter/PostFooter";
import { defaultUrl } from "@/app/layout";

type BlogPostProps = {
  params: { slug: string };
};

// Dynamic metadata
export async function generateMetadata(
  { params }: BlogPostProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  // fetch title, description and image based on slug
  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/posts?slug=eq.${slug}&apikey=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`;
  const res = await axios.get(url);

  const { title, description, image_url } = res.data[0];

  return {
    title: `${title} - Oliver Lister | Blog`,
    description: `${description}`,
    openGraph: {
      title: title,
      description: description,
      url: `/blog/${slug}`,
      siteName: "Oliver Lister | Portfolio & Blog - Web Developer",
      images: [image_url],
    },
  };
}

export type postMetadata = {
  title: string;
  description: string;
  created_at: string;
  author_id: string;
  image_url: string;
  slug: string;
};

const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
  const slug = params.slug;

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

  return (
    <article className="grid gap-6">
      <PostHeader postMetadata={postMetadata} />
      <MDXContent slug={slug} />
      <PostFooter postMetadata={postMetadata} />
    </article>
  );
};
export default BlogPost;
