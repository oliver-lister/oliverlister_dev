import Link from "next/link";
import { format } from "date-fns";
import { createClient } from "@/libs/utils/supabase/server";
import Image from "next/image";

type BlogHorizontalCardProps = {
  author_id: number;
  title: string;
  description: string;
  created_at: string;
  slug: string;
};

const BlogHorizontalCard: React.FC<BlogHorizontalCardProps> = async ({
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
    <Link href={`/blog/${slug}`} className="h-full">
      <article className="h-full max-h-[150px] grid shadow-md rounded-lg p-4 bg-zinc-200 dark:bg-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors hover:cursor-pointer">
        <div className="self-start gap-2 flex items-center">
          <div className="w-8 h-8 rounded-full border-[2px] border-accent overflow-hidden">
            {author ? (
              <Image
                src={author.image_url}
                alt="Author avatar"
                width={100}
                height={100}
              />
            ) : null}
          </div>
          <p className="font-semibold">{title}</p>
        </div>

        <p className="mt-2 text-xs opacity-90">
          {description.length < 110
            ? description
            : `${description.substring(0, 110)}...`}
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
