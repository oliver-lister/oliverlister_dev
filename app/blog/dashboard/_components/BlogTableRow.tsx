import Switch from "@/components/Switch/Switch";
import ActionMenu from "./ActionMenu";

export type BlogTableRowProps = {
  post: {
    id: number;
    title: string;
    slug: string;
    is_published: boolean;
  };
};

const BlogTableRow: React.FC<BlogTableRowProps> = ({ post }) => {
  return (
    <>
      <p className="col-span-2">{post.title}</p>
      <Switch id="publish" />
      <ActionMenu id={post.id} slug={post.slug} />
    </>
  );
};

export default BlogTableRow;
