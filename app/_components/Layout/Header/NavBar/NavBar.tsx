"use client";

import Button from "@/components/Button/Button";
import { useModal } from "../../../../../context/ModalContext";
import { IconMail } from "@tabler/icons-react";
import DesktopNav from "./DesktopNav";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import useScroll from "../../../../../hooks/useScroll";
import Hamburger from "../../../../../components/Hamburger";
import useViewport from "../../../../../hooks/useViewport";

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

export default function NavBar({
  isMobileMenuOpen,
  toggleMobileMenu,
}: {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}) {
  const { openModal } = useModal();
  const viewport = useViewport();
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(true);

  const NavMenu = showMobileMenu ? (
    isMobileMenuOpen ? (
      <MobileNav links={links} toggleMobileMenu={toggleMobileMenu} />
    ) : null
  ) : (
    <DesktopNav links={links} />
  );

  useEffect(() => {
    if (viewport.width > 768) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  }, [viewport]);

  return (
    <>
      {NavMenu}
      <div className="flex gap-4">
        <Button
          onClick={() => openModal("contact")}
          variant="outline"
          aria-label="Contact form"
        >
          <IconMail />
          <span className="hidden | sm:block">Let&apos;s talk</span>
        </Button>
        <Button
          onClick={toggleMobileMenu}
          className="md:hidden group z-10"
          variant="outline"
          aria-label="Toggle mobile navigation menu"
        >
          <Hamburger isMobileMenuOpen={isMobileMenuOpen} />
        </Button>
      </div>
    </>
  );
}
