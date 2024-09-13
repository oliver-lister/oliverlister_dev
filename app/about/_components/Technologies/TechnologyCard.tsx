import Image from "next/image";
import { Technology } from "./technologiesArr";

const TechnologyCard: React.FC<Technology> = ({
  imageSrc,
  shadowClr,
  title,
}) => {
  const boxShadowStyle = {
    boxShadow: shadowClr ? `1px 1px 10px 0px #${shadowClr}` : "none",
  };

  return (
    <article
      className="w-full h-full p-10 rounded-lg grid justify-items-center items-center gap-2 transition hover:scale-105 bg-secondary dark:bg-primary"
      style={boxShadowStyle}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          width={100}
          height={100}
          alt={title ? title : "Technology icon"}
          className="min-h-[100px]"
        />
      ) : null}
      {title}
    </article>
  );
};

export default TechnologyCard;
