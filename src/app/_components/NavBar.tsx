"use client";

import Button from "../../components/Button";
import { useModal } from "@/context/ModalContext";
import { IconMail } from "@tabler/icons-react";
import DesktopNav from "./DesktopNav";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import useScroll from "@/hooks/useScroll";
import Hamburger from "@/components/Hamburger";

export type NavLink = {
  path: string;
  label: string;
  ref: string;
};

const links: NavLink[] = [
  { path: "/", label: "Home", ref: "home" },
  { path: "/about", label: "About", ref: "about" },
  { path: "/projects", label: "Projects", ref: "projects" },
  { path: "/blog", label: "Blog", ref: "blog" },
];

export default function NavBar() {
  const { openModal } = useModal();
  const { toggleAllowScroll } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(true);

  const toggleMobileMenu = () => {
    toggleAllowScroll();
    setIsMobileMenuOpen((prev) => !prev);
  };

  // access window API to find viewport width on mount
  useEffect(() => {
    if (window.innerWidth > 768) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  }, []);

  // handle resize events
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowMobileMenu(false);
        setIsMobileMenuOpen(false);
      } else {
        setShowMobileMenu(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavMenu = showMobileMenu ? (
    isMobileMenuOpen ? (
      <MobileNav links={links} toggleMobileMenu={toggleMobileMenu} />
    ) : null
  ) : (
    <DesktopNav links={links} />
  );

  return (
    <>
      {NavMenu}
      <div className="flex gap-4">
        <Button
          onClick={() => openModal("contact")}
          theme="primary"
          ariaLabel="Contact form"
        >
          <IconMail />
          <span className="hidden | sm:block">Let&apos;s talk</span>
        </Button>
        <Button
          onClick={toggleMobileMenu}
          className="md:hidden group z-10"
          theme="primary"
          ariaLabel="Toggle mobile navigation menu"
        >
          <Hamburger isMobileMenuOpen={isMobileMenuOpen} />
        </Button>
      </div>
    </>
  );
}
