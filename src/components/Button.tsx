import { MouseEventHandler } from "react";

export default function Button({
  children,
  className,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>): JSX.Element {
  return (
    <button
      className={className ? className : "border-2 p-2 rounded-lg border-black"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
