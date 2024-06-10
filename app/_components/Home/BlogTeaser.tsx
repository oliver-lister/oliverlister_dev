import BlogHorizontalCard from "@/components/BlogHorizontalCard";
import MailingList from "./MailingList/MailingList";

function BlogTeaser() {
  return (
    <section
      id="blog-teaser"
      className="bg-zinc-300 dark:bg-zinc-700 text-primary dark:text-secondary"
    >
      <div className="wrapper grid md:grid-cols-3">
        <div className="md:col-span-2 grid grid-cols-2">
          <BlogHorizontalCard />
        </div>
        <MailingList />
      </div>
    </section>
  );
}

export default BlogTeaser;
