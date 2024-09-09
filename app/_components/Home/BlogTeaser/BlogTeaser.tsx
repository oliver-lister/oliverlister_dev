import BlogHorizontalCard from "@/components/BlogHorizontalCard";
import MailingList from "./MailingList/MailingList";
import { createClient } from "@/libs/utils/supabase/server";

const BlogTeaser: React.FC = async () => {
  const supabase = createClient();
  const { data: posts } = await supabase.from("posts").select("*");

  return (
    <section
      id="blog-teaser"
      className="bg-zinc-300 dark:bg-zinc-700 text-primary dark:text-secondary"
    >
      <div className="wrapper">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-4">
            {posts && posts.length > 0
              ? posts.map((post) => (
                  <BlogHorizontalCard
                    key={post.id}
                    slug={post.slug}
                    author_id={post.author_id}
                    title={post.title}
                    description={post.description}
                    created_at={post.created_at}
                  />
                ))
              : null}
          </div>
          <div className="lg:col-span-1">
            <MailingList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
