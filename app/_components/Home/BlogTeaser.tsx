import MailingList from "./MailingList/MailingList";

function BlogTeaser() {
  return (
    <section
      id="blog-teaser"
      className="bg-secondary-400 dark:bg-secondary-200 text-primary dark:text-secondary"
    >
      <div className="wrapper grid md:grid-cols-3">
        <div className="md:col-span-2">Tester</div>
        <MailingList />
      </div>
    </section>
  );
}

export default BlogTeaser;
