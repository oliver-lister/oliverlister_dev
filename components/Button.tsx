import Link from "next/link";
import React from "react";

const variantStyles = {
  primary:
    "flex items-center justify-center gap-2 border-2 p-3 rounded-lg select-none text-secondary border-none bg-primary hover:bg-primary/80 transition active:scale-95 | dark:text-primary dark:bg-secondary-800 dark:hover:bg-secondary-800/80",
  outline:
    "flex items-center justify-center gap-2 border-2 p-3 rounded-lg select-none border-primary text-primary hover:text-secondary hover:bg-primary transition active:scale-95 | dark:text-secondary dark:bg-primary dark:border-secondary dark:hover:text-primary dark:hover:bg-secondary",
  "gradient-outline":
    "relative p-0.5 inline-flex items-center font-bold justify-center overflow-hidden group rounded-lg select-none",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  children: React.ReactNode;
} & (
  | React.ComponentPropsWithoutRef<"button">
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
    return (
      <Link href={href} className={`${variantClass} ${className}`} {...rest}>
        {children}
      </Link>
    );
  } else {
    return (
      <button className={`${variantClass} ${className}`} {...props}>
        {variant === "gradient-outline" ? (
          <>
            <span className="w-full h-full bg-gradient group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
            <span className="relative flex gap-2 p-3 transition-all ease-out text-secondary bg-primary dark:bg-primary-400 rounded-md group-hover:bg-opacity-0 duration-400">
              {children}
            </span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
};

export default Button;
