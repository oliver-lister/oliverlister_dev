import Avatar from "@/components/Avatar/Avatar";
import Link from "next/link";
import React from "react";

type AuthorInfoProps = {
  image_url: string;
  display_name: string;
  date: string;
};

const AuthorInfo: React.FC<AuthorInfoProps> = ({
  image_url,
  display_name,
  date,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <Link href={`/blog?author=${display_name}`}>
        <Avatar src={image_url} size={50} />
      </Link>
      <div className="grid">
        <Link
          href={`/blog?author=${display_name}`}
          className="font-medium text-accent underline hover:text-accent-400"
        >
          {display_name}
        </Link>
        <p className="text-sm font-thin">{date}</p>
      </div>
    </div>
  );
};

export default AuthorInfo;
