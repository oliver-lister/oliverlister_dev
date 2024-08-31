import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { createClient } from "@/libs/utils/supabase/server";

type BlogPostProps = {
  params: { slug: string };
};

const BlogPost: React.FC<BlogPostProps> = async ({ params }) => {
  const title = params.slug;

  // // Fetch metadata from Supabase
  // const supabase = createClient();
  // const { data: postMetadata, error } = await supabase
  //   .from("posts")
  //   .select("title, description, date")
  //   .eq("slug", title)
  //   .single();

  // if (error) {
  //   return <div>Error loading post metadata: {error.message}</div>;
  // }

  const postMetadata = {
    title: "test",
    description: "test",
    date: new Date(),
  };

  // Load the corresponding MDX file
  const postFilePath = path.join(process.cwd(), "posts", `${title}.mdx`);
  const fileContent = fs.readFileSync(postFilePath, "utf-8");

  return (
    <article>
      <h1>{postMetadata.title}</h1>
      <p>{postMetadata.description}</p>
      <p>
        <em>{new Date(postMetadata.date).toDateString()}</em>
      </p>
      <MDXRemote source={fileContent} />
    </article>
  );
};
export default BlogPost;
