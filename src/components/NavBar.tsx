"use client";

import Link from "next/link";
import Button from "./Button";
import Icon from "./Icon";
import { useState, useEffect, useRef } from "react";
import { useModal } from "@/context/ModalContext";
import { usePathname } from "next/navigation";

const links = [
  { path: "/", label: "Home", ref: "home" },
  { path: "/about", label: "About", ref: "about" },
  { path: "/projects", label: "Projects", ref: "projects" },
  { path: "/blog", label: "Blog", ref: "blog" },
];

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { openModal } = useModal();
  const home = useRef<HTMLAnchorElement | null>(null);
  const about = useRef<HTMLAnchorElement | null>(null);
  const projects = useRef<HTMLAnchorElement | null>(null);
  const blog = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  // Desktop Navbar Underline styles

  useEffect(() => {
    const menu = document.querySelector(".menu__list") as HTMLElement;

    const pathLookup = {
      "/": home.current,
      "/about": about.current,
      "/projects": projects.current,
      "/blog": blog.current,
    } as { [key: string]: HTMLAnchorElement | null };

    const handleChange = (pathname: string) => {
      const active = pathLookup[pathname];
      if (active) {
        menu.style.setProperty("--underline-width", `${active.offsetWidth}px`);
        menu.style.setProperty(
          "--underline-offset-x",
          `${active.offsetLeft}px`
        );
      }
    };
    handleChange(pathname);
  }, [pathname]);

  return (
    <>
      <nav>
        <ul
          className={
            (menuIsOpen ? "right-0 " : "-left-full") +
            " grid gap-10 absolute z-10 top-20 w-full text-center py-6 bg-primary text-secondary rounded-lg dark:bg-secondary dark:text-primary | menu__list md:z-0 md:relative md:top-0 md:left-0 md:bg-inherit md:text-inherit dark:md:bg-inherit dark:md:text-inherit md:py-0 md:w-auto md:grid-flow-col"
          }
        >
          {links.map((link) => (
            <li key={link.path}>
              <Link
                ref={
                  link.ref === "home"
                    ? home
                    : link.ref === "about"
                    ? about
                    : link.ref === "projects"
                    ? projects
                    : blog
                }
                href={link.path}
                onClick={toggleMenu}
                className={`menu__link select-none ${
                  link.path === pathname ? "text-clip-gradient" : ""
                }`}
              >
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button onClick={() => openModal("contact")} theme="primary">
          <Icon icon="contact" />
          <span className="hidden | sm:block">Let&apos;s talk</span>
        </Button>
        <Button
          onClick={toggleMenu}
          className="md:hidden group"
          theme="primary"
        >
          <div className="grid gap-1 items-center">
            <span
              className={
                (menuIsOpen
                  ? "translate-y-1 rotate-45"
                  : "translate-y-0 rotate-0") +
                "  transition h-1 w-8 rounded-full bg-primary dark:bg-secondary group-hover:bg-secondary dark:group-hover:bg-primary"
              }
            ></span>
            <span
              className={
                menuIsOpen
                  ? "hidden"
                  : "block" +
                    " transition h-1 w-8 rounded-full bg-primary dark:bg-secondary group-hover:bg-secondary dark:group-hover:bg-primary"
              }
            ></span>
            <span
              className={
                (menuIsOpen
                  ? "-translate-y-1 -rotate-45"
                  : "translate-y-0 rotate-0") +
                " transition h-1 w-8 rounded-full bg-primary dark:bg-secondary group-hover:bg-secondary dark:group-hover:bg-primary"
              }
            ></span>
          </div>
        </Button>
      </div>
    </>
  );
}
