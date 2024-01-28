import { MouseEventHandler } from "react";

const buttonTheme = {
  primary:
    "flex items-center justify-center gap-2 border-2 p-3 rounded-lg select-none border-primary text-primary hover:text-secondary hover:bg-primary transition | dark:text-secondary dark:bg-primary dark:border-secondary dark:hover:text-primary dark:hover:bg-secondary",
  accent:
    "relative p-0.5 inline-flex items-center font-bold justify-center overflow-hidden group rounded-lg select-none",
};

export default function Button({
  children,
  className,
  onClick,
  id,
  theme,
  type,
  disabled,
  ariaLabel,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  id?: string;
  theme?: keyof typeof buttonTheme;
  type?: "button" | "reset" | "submit" | undefined;
  disabled?: boolean | undefined;
  ariaLabel?: string | undefined;
}>): JSX.Element {
  const themeClass = theme ? buttonTheme[theme] : "";

  if (theme === "accent") {
    return (
      <button
        type={type}
        className={themeClass + " " + className}
        onClick={onClick}
        id={id}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        <span className="w-full h-full bg-gradient group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span className="relative flex gap-2 p-3 transition-all ease-out text-secondary bg-primary dark:bg-primary-400 rounded-md group-hover:bg-opacity-0 duration-400">
          {children}
        </span>
      </button>
    );
  } else {
    return (
      <button
        type={type}
        className={themeClass + " " + className}
        onClick={onClick}
        id={id}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    );
  }
}
