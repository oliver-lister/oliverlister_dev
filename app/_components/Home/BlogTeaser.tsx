import MailingList from "./MailingList/MailingList";

function BlogTeaser() {
  return (
    <section
      id="blog-teaser"
      className="bg-secondary-400 dark:bg-secondary-200 text-primary dark:text-secondary"
    >
      <div className="wrapper">
        <MailingList />
      </div>
    </section>
  );
}

export default BlogTeaser;
