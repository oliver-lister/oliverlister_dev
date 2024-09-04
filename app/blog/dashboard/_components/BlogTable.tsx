import { createClient } from "@/libs/utils/supabase/server";
import BlogTableRow from "./BlogTableRow";
import BlogTableRows from "./BlogTableRows";

export const revalidate = 0;

const BlogTable = async () => {
  const supabase = createClient();
  const { data: posts } = await supabase.from("posts").select("*");

  return (
    <div className="dark:border-zinc-600 border-zinc-400 border bg-secondary-800 dark:bg-primary-400 rounded-md">
      <div className="grid grid-cols-4 text-zinc-600 dark:text-zinc-400 border-b border-zinc-400 dark:border-zinc-600 py-2 px-3">
        <p className="col-span-2">Title</p>
        <p>Publish</p>
        <p className="justify-self-center">Action</p>
      </div>
      <div className="grid grid-cols-4 gap-y-4 py-2 px-3 items-center">
        <BlogTableRows serverPosts={posts} />
      </div>
    </div>
  );
};

export default BlogTable;
