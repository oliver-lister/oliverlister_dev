import React from "react";
import { BlogCardProps } from "../BlogHorizontalCard/BlogHorizontalCard";
import { createClient } from "@/libs/utils/supabase/server";
import { format } from "date-fns";
import Link from "next/link";
import Avatar from "../Avatar/Avatar";
import Image from "next/image";

interface BlogVerticalCardProps extends BlogCardProps {
  image_url: string;
}

const BlogVerticalCard: React.FC<BlogVerticalCardProps> = async ({
  author_id,
  title,
  description,
  created_at,
  slug,
  image_url,
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
      <article className="h-full grid shadow-md rounded-lg p-4 border-2 border-transparent bg-secondary-700 hover:border-accent dark:bg-primary-400 transition-colors hover:cursor-pointer">
        <div className="relative w-full h-60 rounded-md mb-4 overflow-hidden">
          <Image
            src={image_url}
            fill
            sizes="(max-width: 768px) 768px, (max-width: 1200px) 1200px, 1560px"
            alt="post banner"
            className="object-center object-cover"
          />
        </div>
        <div className="self-start gap-2 flex items-center">
          <Avatar src={author.image_url} size={30} />
          <p className="font-semibold">{title}</p>
        </div>
        <p className="mt-2 text-xs opacity-90 leading-relaxed">
          {description.length < 200
            ? description
            : `${description.substring(0, 200)}...`}
        </p>
        <div className="mt-4 self-end text-xs flex justify-between">
          <div className="grid">
            <p>By {author.display_name}</p>
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

export default BlogVerticalCard;
