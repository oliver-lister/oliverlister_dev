import BlogHorizontalCard from "@/components/BlogHorizontalCard/BlogHorizontalCard";
import MailingList from "./MailingList/MailingList";
import { createClient } from "@/libs/utils/supabase/server";
import { IconHandLoveYou } from "@tabler/icons-react";

const BlogTeaser: React.FC = async () => {
  const supabase = createClient();
  const { data: posts } = await supabase.from("posts").select("*");

  return (
    <section
      id="blog-teaser"
      className="bg-zinc-300 dark:bg-zinc-700 text-primary dark:text-secondary"
    >
      <div className="wrapper">
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
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
          <div className="lg:col-span-1 lg:row-span-2 bg-secondary dark:bg-primary-400 rounded-lg shadow-md grid gap-4">
            <div className="pt-4 px-4 grid gap-1">
              <div className="flex items-center gap-2 text-accent self-start">
                <IconHandLoveYou />
                <h2 className="font-bold text-md text-accent uppercase">
                  Welcome
                </h2>
              </div>
              <p className="text-xs leading-relaxed">
                Hey, I&apos;m{" "}
                <span className="font-semibold">Oliver Lister</span>, a{" "}
                <span className="font-semibold">frontend web developer </span>
                and <span className="font-semibold">music</span> and{" "}
                <span className="font-semibold">sound professional</span> from
                Sydney. I love mixing creativity with problem-solving, whether
                it&apos;s building cool web apps or producing music. With a
                background in sound production and managing projects, I bring a
                unique approach to everything I work on, always keeping an eye
                on the details. From creating smooth user experiences to seeing
                projects through from start to finish, I&apos;m all about
                growing, learning, and making great connections along the way.
              </p>
            </div>
            <div className="border-t-2 border-accent-200 dark:border-accent-800 p-4">
              <MailingList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
