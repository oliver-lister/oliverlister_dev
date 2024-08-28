import BlogTableRow from "./BlogTableRow";

const BlogTable = () => {
  return (
    <div className="dark:border-zinc-600 border-zinc-400 border bg-gradient-light dark:bg-gradient-dark rounded-md">
      <div className="grid grid-cols-5 text-zinc-600 dark:text-zinc-400 border-b border-zinc-400 dark:border-zinc-600 py-2 px-3">
        <p className="col-span-2">Title</p>
        <p>Premium</p>
        <p>Publish</p>
        <p className="justify-self-center">Action</p>
      </div>
      <div className="grid grid-cols-5 gap-y-4 py-2 px-3 items-center">
        <BlogTableRow />
      </div>
    </div>
  );
};

export default BlogTable;
