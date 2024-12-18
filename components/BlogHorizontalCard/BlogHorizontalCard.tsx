import Link from "next/link";
import { format } from "date-fns";
import { createClient } from "@/libs/utils/supabase/server";
import Avatar from "../Avatar/Avatar";

export interface BlogCardProps {
  author_id: number;
  title: string;
  description: string;
  created_at: string;
  slug: string;
}

const BlogHorizontalCard: React.FC<BlogCardProps> = async ({
  author_id,
  title,
  description,
  created_at,
  slug,
}) => {
  const supabase = createClient();
  const { data: author, error } = await supabase
    .from("users")
    .select("*")
    .eq("id", author_id)
    .limit(1)
    .single();

  const date = format(new Date(created_at), "PPPP");

  return (
    <Link href={`/blog/${slug}`}>
      <article className="h-full grid shadow-md rounded-lg p-4 border-2 border-transparent bg-secondary-700 hover:border-accent dark:bg-primary-400 transition-colors hover:cursor-pointer">
        <div className="self-start gap-2 flex items-center">
          <Avatar src={author.image_url} size={30} />
          <p className="font-semibold">{title}</p>
        </div>

        <p className="mt-2 text-xs opacity-90 leading-relaxed">
          {description.length < 150
            ? description
            : `${description.substring(0, 150)}...`}
        </p>

        <div className="mt-4 self-end text-xs flex justify-between">
          <div className="grid">
            <p>oliver-lister</p>
            <p className="font-semibold">{date}</p>
          </div>
          <p className="text-accent self-end font-semibold">
            Click here to read more...
          </p>
        </div>
      </article>
    </Link>
  );
};

export default BlogHorizontalCard;
