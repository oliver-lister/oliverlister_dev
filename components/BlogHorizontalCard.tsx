import { IconArticle } from "@tabler/icons-react";
import Link from "next/link";

const BlogHorizontalCard = () => {
  return (
    <Link href="/blog">
      <article className="grid shadow-md rounded-lg p-4 bg-zinc-200 dark:bg-zinc-600 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors hover:cursor-pointer">
        <div className="self-start flex gap-2 items-center">
          <div className="w-8 h-8 rounded-full border-[2px] border-accent">
            <img />
          </div>
          <p className="font-semibold">Building a Sensible Shopping Cart</p>
        </div>
        <p className="mt-2 text-xs opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, ipsa sed cupiditate architecto nesciunt iste asperiores
          hic. Reprehenderit, qui adipisci.
        </p>
        <div className="mt-4 self-end text-xs flex justify-between font-semibold">
          <p>June 10th 2024</p>
          <p className="text-accent">Click here to read more...</p>
        </div>
      </article>
    </Link>
  );
};

export default BlogHorizontalCard;
