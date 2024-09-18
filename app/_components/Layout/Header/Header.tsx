"use client";

import useScroll from "../../../../hooks/useScroll";
import NavBar from "./NavBar/NavBar";
import Logo from "./Logo";
import { useState } from "react";
import Button from "@/components/Button/Button";
import Hamburger from "@/components/Hamburger";
import { useModal } from "@/context/ModalContext";
import { IconMail } from "@tabler/icons-react";
import AuthState from "./AuthState/AuthState";

const hideHeader: boolean = false; // hide header on scroll down

export default function Header() {
  const { toggleAllowScroll } = useScroll();
  const { openModal } = useModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { scrollYDirection, scrollYPosition } = useScroll();

  const toggleMobileMenu = () => {
    toggleAllowScroll();
    setIsMobileMenuOpen((prev) => !prev);
  };

  // hide Header on scroll down
  let hideHeaderClasses: string;

  if (
    scrollYDirection === "down" &&
    scrollYPosition > 100 &&
    isMobileMenuOpen === false
  ) {
    hideHeaderClasses =
      "transition-transform delay-200 duration-300 translate-y-[-100%]";
  } else {
    hideHeaderClasses = "transition-transform duration-300 translate-y-0";
  }

  return (
    <header
      id="header"
      className={`fixed w-full top-0 z-10 backdrop-blur bg-transparent ${
        hideHeader ? hideHeaderClasses : ""
      }`}
    >
      <div
        className="absolute w-full h-full z-[-1] opacity-80 bg-secondary-800 dark:bg-primary-400 shadow dark:shadow-secondary/10"
        aria-hidden="true"
      ></div>
      <div className="relative z-20">
        <div className="wrapper grid grid-cols-2 md:grid-cols-3 items-center">
          <Button
            onClick={toggleMobileMenu}
            className="md:hidden group z-10 justify-self-start"
            variant="outline"
            aria-label="Toggle mobile navigation menu"
          >
            <Hamburger isMobileMenuOpen={isMobileMenuOpen} />
          </Button>
          <div className="hidden md:block justify-self-start">
            <Logo />
          </div>
          <NavBar
            isMobileMenuOpen={isMobileMenuOpen}
            toggleMobileMenu={toggleMobileMenu}
          />
          <div className="z-50 flex gap-4 justify-self-end col-start-3 col-end-3">
            <Button
              onClick={() => openModal("contact")}
              variant="outline"
              aria-label="Contact form"
            >
              <IconMail />
              <span className="hidden | xl:block">Let&apos;s talk</span>
            </Button>
            <AuthState />
          </div>
        </div>
      </div>
    </header>
  );
}
