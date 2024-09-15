import Image from "next/image";
import AuthorInfo from "../AuthorInfo";
import SocialShareIcons from "./_components/SocialShareIcons";
import { format } from "date-fns";
import { createClient } from "@/libs/utils/supabase/server";
import { postMetadata } from "../../page";

type PostHeaderProps = {
  postMetadata: postMetadata;
};

const PostHeader: React.FC<PostHeaderProps> = async ({ postMetadata }) => {
  const supabase = createClient();
  const date = format(new Date(postMetadata.created_at), "PPPP");
  const url = encodeURIComponent(
    process.env.NEXT_URL + "/blog/" + postMetadata.slug
  );

  console.log(url);

  const { data: authorMetadata, error: authorError } = await supabase
    .from("users")
    .select("display_name, image_url")
    .eq("id", postMetadata.author_id)
    .single();

  return (
    <header className="grid gap-4">
      <div className="grid gap-2">
        <h2 className="text-6xl font-semibold">{postMetadata.title}</h2>
        <div className="flex justify-between items-center">
          <AuthorInfo
            image_url={authorMetadata?.image_url}
            display_name={authorMetadata?.display_name}
            date={date}
          />
          <SocialShareIcons url={url} />
        </div>
      </div>
      <div className="overflow-hidden relative w-full min-h-[60vh] max-h-[80vh] object-center">
        <Image
          src={postMetadata.image_url}
          fill
          priority
          sizes="(max-width: 768px) 768px, (max-width: 1200px) 1200px, 1560px"
          alt="banner"
          className="object-center object-cover"
        />
      </div>
    </header>
  );
};

export default PostHeader;
