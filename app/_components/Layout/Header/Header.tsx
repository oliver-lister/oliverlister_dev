"use client";

import useScroll from "../../../../hooks/useScroll";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const { toggleAllowScroll } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { scrollYDirection, scrollYPosition } = useScroll();

  const toggleMobileMenu = () => {
    toggleAllowScroll();
    setIsMobileMenuOpen((prev) => !prev);
  };

  let headerClasses: string;

  if (
    scrollYDirection === "down" &&
    scrollYPosition > 100 &&
    isMobileMenuOpen === false
  ) {
    headerClasses =
      "transition-transform delay-200 duration-300 translate-y-[-100%] fixed w-full top-0 z-10 bg-secondary-800 shadow dark:bg-primary-400 dark:shadow-secondary/10";
  } else {
    headerClasses =
      "transition-transform duration-300 translate-y-0 fixed w-full top-0 z-10 bg-secondary-800 shadow dark:bg-primary-400 dark:shadow-secondary/10";
  }

  return (
    <header id="header" className={headerClasses}>
      <div className="wrapper flex justify-between items-center">
        <Logo />
        <NavBar
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </header>
  );
}
