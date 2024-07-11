import Image from "next/image";
import Link from "next/link";

export default function Card({
  children,
  className,
  theme,
  imageSrc,
  imageSize,
  shadowClr,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  theme?: string;
  imageSrc?: string;
  imageSize?: number;
  shadowClr?: string;
  title?: string;
}): JSX.Element | undefined {
  {
    const boxShadowStyle = {
      boxShadow: shadowClr ? `1px 1px 10px 0px #${shadowClr}` : "none",
    };

    if (theme === "technology") {
      return (
        <article
          className={`w-full h-full p-10 rounded-lg grid justify-items-center items-center gap-2 transition hover:scale-105 bg-zinc-200 dark:bg-zinc-600 ${className}`}
          style={boxShadowStyle}
        >
          {imageSrc ? (
            <Image
              src={imageSrc}
              width={imageSize}
              height={imageSize}
              alt={title ? title : "Technology icon"}
              className="min-h-[100px]"
            />
          ) : null}
          {children}
        </article>
      );
    }
    if (theme === "project") {
      return (
        <article className="relative grid rounded-xl min-h-[70vh] overflow-hidden shadow-sm shadow-primary dark:shadow-secondary">
          <div className="absolute inset-0">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt=""
                width={imageSize}
                height={imageSize}
                className="object-cover w-full h-full"
              />
            ) : null}
          </div>
          <div className="mt-auto border-t p-6 backdrop-blur-md bg-primary/40 text-secondary border-secondary/40">
            {children}
          </div>
        </article>
      );
    }
  }
}
