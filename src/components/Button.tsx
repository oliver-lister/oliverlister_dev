import { MouseEventHandler } from "react";

export default function Button({
  children,
  className,
  onClick,
  id,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  id?: string;
}>): JSX.Element {
  return (
    <button
      className={
        (className ? className : "") +
        " border-2 p-2 rounded-lg select-none border-primary text-primary hover:text-secondary hover:bg-primary transition | dark:text-secondary dark:bg-primary dark:border-secondary dark:hover:text-primary dark:hover:bg-secondary"
      }
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
}
