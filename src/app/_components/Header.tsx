"use client";

import useScroll from "@/hooks/useScroll";
import NavBar from "./NavBar";
import Link from "next/link";

export default function Header() {
  const { scrollYDirection, scrollYPosition } = useScroll();

  let headerClasses: string;

  if (scrollYDirection === "down" && scrollYPosition > 100) {
    headerClasses =
      "transition-transform delay-200 duration-300 translate-y-[-100%] sticky top-0 z-10 bg-secondary-800 shadow dark:bg-primary-400 dark:shadow-secondary/10";
  } else {
    headerClasses =
      "transition-transform duration-300 translate-y-0 sticky top-0 z-10 bg-secondary-800 shadow dark:bg-primary-400 dark:shadow-secondary/10";
  }

  return (
    <header id="header" className={headerClasses}>
      <div className="wrapper flex justify-between items-center">
        <Link href="/">
          <p className="italic text-4xl font-bold text-clip-gradient">O.L</p>
        </Link>
        <NavBar />
      </div>
    </header>
  );
}
