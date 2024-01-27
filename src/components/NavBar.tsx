"use client";

import Link from "next/link";
import Button from "./Button";
import Icon from "./Icon";
import { useState, useEffect } from "react";
import { useModal } from "@/context/ModalContext";

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const { openModal } = useModal();

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  // Desktop Navbar Underline styles
  useEffect(() => {
    const menu = document.querySelector(".menu__list") as HTMLElement;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains("menu__link")) {
        menu.style.setProperty("--underline-width", `${target.offsetWidth}px`);
        menu.style.setProperty(
          "--underline-offset-x",
          `${target.offsetLeft}px`
        );
      }
    };

    if (menu !== null) {
      menu.addEventListener("click", handleClick);
    }

    return () => {
      if (menu !== null) {
        menu.removeEventListener("click", handleClick);
      }
    };
  });

  return (
    <>
      <nav>
        <ul
          className={
            (menuIsOpen ? "right-0 " : "-left-full") +
            " grid gap-10 absolute top-20 w-full text-center py-6 bg-primary text-secondary rounded-lg dark:bg-secondary dark:text-primary | menu__list md:relative md:top-0 md:left-0 md:bg-inherit md:text-inherit dark:md:bg-inherit dark:md:text-inherit md:py-0 md:w-auto md:grid-flow-col"
          }
        >
          <li>
            <Link href="/" onClick={toggleMenu} className="menu__link">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu} className="menu__link">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggleMenu} className="menu__link">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={toggleMenu} className="menu__link">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button onClick={() => openModal("contact")} className="flex gap-2">
          <Icon icon="contact" />
          <span className="hidden | sm:block">Let&apos;s talk</span>
        </Button>
        <Button onClick={toggleMenu} className="md:hidden group">
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
