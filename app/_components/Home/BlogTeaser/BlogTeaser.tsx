import BlogHorizontalCard from "@/components/BlogHorizontalCard";
import MailingList from "./MailingList/MailingList";

function BlogTeaser() {
  return (
    <section
      id="blog-teaser"
      className="bg-zinc-300 dark:bg-zinc-700 text-primary dark:text-secondary"
    >
      <div className="wrapper">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid lg:grid-cols-2 gap-4">
            <BlogHorizontalCard />
            <BlogHorizontalCard />
            <BlogHorizontalCard />
            <BlogHorizontalCard />
          </div>
          <div className="lg:col-span-1">
            <MailingList />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogTeaser;
