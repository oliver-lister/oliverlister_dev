import Image from "next/image";

const cardTheme = {
  technology:
    "w-full h-full p-10 rounded-lg grid justify-items-center items-center gap-2 transition hover:bg-primary-900 dark:hover:bg-primary-400 hover:scale-105",
};

export default function Card({
  children,
  className,
  theme,
  imageSrc,
  imageSize,
  shadowClr,
}: {
  children: React.ReactNode;
  className?: string;
  theme?: keyof typeof cardTheme;
  imageSrc?: string;
  imageSize?: number;
  shadowClr?: string;
}): JSX.Element | undefined {
  {
    const themeClass = theme ? cardTheme[theme] : "";
    const boxShadowStyle = {
      boxShadow: shadowClr ? `1px 1px 10px 0px #${shadowClr}` : "none",
    };

    return (
      <article className={`${themeClass} ${className}`} style={boxShadowStyle}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            width={imageSize}
            height={imageSize}
            alt=""
            className="min-h-[100px]"
          />
        ) : null}
        {children}
      </article>
    );
  }
}
