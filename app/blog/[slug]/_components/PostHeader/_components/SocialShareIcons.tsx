import {
  IconBrandFacebook,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";

type SocialShareIconsProps = {
  url: string;
};

const SocialShareIcons: React.FC<SocialShareIconsProps> = ({ url }) => {
  const socialShareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    x: `https://twitter.com/intent/tweet?url=${url}&text=`,
    linkedin: `http://www.linkedin.com/shareArticle?mini=true&url=${url}&title=`,
  };
  return (
    <div className="flex items-center gap-2">
      <p className="font-thin text-sm">Share</p>
      <a
        href={socialShareLinks.facebook}
        className="hover:scale-105 transition-all hover:text-accent"
      >
        <IconBrandFacebook stroke={1} />
      </a>
      <a
        href={socialShareLinks.x}
        className="hover:scale-105 transition-all hover:text-accent"
      >
        <IconBrandX stroke={1} />
      </a>
      <a
        href={socialShareLinks.linkedin}
        className="hover:scale-105 transition-all hover:text-accent"
      >
        <IconBrandLinkedin stroke={1} />
      </a>{" "}
    </div>
  );
};

export default SocialShareIcons;
