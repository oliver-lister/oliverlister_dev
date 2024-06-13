import Link from "next/link";
import React from "react";
import GradientOutline from "./GradientOutline";

const variantStyles = {
  primary:
    "flex items-center justify-center gap-1 py-2 px-3 rounded-lg select-none text-secondary bg-primary hover:bg-primary/80 transition active:scale-95 | dark:text-primary dark:bg-secondary-800 dark:hover:bg-secondary-800/80",
  outline:
    "flex items-center justify-center gap-2 border-2 py-2 px-3 rounded-lg select-none border-primary text-primary hover:text-secondary hover:bg-primary transition active:scale-95 | dark:text-secondary dark:bg-primary dark:border-secondary dark:hover:text-primary dark:hover:bg-secondary",
  "gradient-outline":
    "relative inline-flex items-center p-0.5 font-bold justify-center overflow-hidden group rounded-lg select-none",
  accent:
    "flex items-center justify-center gap-2 py-2 px-3 rounded-lg select-none bg-accent text-secondary hover:bg-accent-400 active:",
  minimal:
    "flex items-center justify-center gap-1 py-2 px-3 rounded-lg select-none border-2 border-zinc-300 dark:border-zinc-500 text-primary dark:text-secondary hover:bg-zinc-300 dark:hover:bg-zinc-500 transition active:scale-95",
  ghost:
    "flex items-center justify-center gap-1 py-2 px-3 rounded-lg select-none font-bold hover:bg-zinc-300",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  children: React.ReactNode;
} & (
  | React.ComponentPropsWithoutRef<"button">
  | (React.ComponentPropsWithoutRef<"a"> & { href: string })
  | (React.ComponentPropsWithoutRef<typeof Link> & { href: string })
);

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  ...props
}) => {
  const variantClass = variant ? variantStyles[variant] : "";

  if ("href" in props) {
    const { href, ...rest } = props;
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          className={`${variantClass} ${className}`}
          {...rest}
        >
          {variant === "gradient-outline" ? (
            <GradientOutline>{children}</GradientOutline>
          ) : (
            children
          )}
        </a>
      );
    } else {
      return (
        <Link href={href} className={`${variantClass} ${className}`} {...rest}>
          {variant === "gradient-outline" ? (
            <GradientOutline>{children}</GradientOutline>
          ) : (
            children
          )}
        </Link>
      );
    }
  } else {
    return (
      <button className={`${variantClass} ${className}`} {...props}>
        {variant === "gradient-outline" ? (
          <GradientOutline>{children}</GradientOutline>
        ) : (
          children
        )}
      </button>
    );
  }
};

export default Button;
