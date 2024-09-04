import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createClient } from "@/libs/utils/supabase/server";

type BlogPostProps = {
  params: { slug: string };
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
    return <div>Error loading post metadata: {error.message}</div>;
  }

  // Load the corresponding MDX file
  const postFilePath = path.join(process.cwd(), "posts", `${slug}.mdx`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");

  return (
    <article>
      <h1>{postMetadata.title}</h1>
      <p>{postMetadata.description}</p>
      <p>
        <em>{new Date(postMetadata.created_at).toDateString()}</em>
      </p>
      <MDXRemote source={fileContent} />
    </article>
  );
};
export default BlogPost;
