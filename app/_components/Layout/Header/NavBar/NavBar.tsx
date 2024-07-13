"use client";

import DesktopNav from "./DesktopNav";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
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

  return <>{NavMenu}</>;
}
