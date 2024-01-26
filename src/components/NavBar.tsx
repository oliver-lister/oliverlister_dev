"use client";

import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

export default function NavBar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <nav>
        <ul
          className={
            (menuIsOpen ? "right-0" : "-right-full") +
            " grid gap-10 absolute top-20 right-0 bg-white w-full text-center py-6 | md:w-auto md:static md:grid-flow-col"
          }
        >
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={toggleMenu}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={toggleMenu}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <Button>Let&apos;s talk</Button>
        <Button
          onClick={toggleMenu}
          className="border-2 border-black rounded-lg p-2 select-none | md:hidden"
        >
          <div className="grid gap-1 items-center">
            <span
              className={
                (menuIsOpen
                  ? "translate-y-1 rotate-45"
                  : "translate-y-0 rotate-0") +
                "  transition h-1 w-8 rounded-full bg-black"
              }
            ></span>
            <span
              className={
                menuIsOpen
                  ? "hidden"
                  : "block" + " transition h-1 w-8 rounded-full bg-black"
              }
            ></span>
            <span
              className={
                (menuIsOpen
                  ? "-translate-y-1 -rotate-45"
                  : "translate-y-0 rotate-0") +
                " transition h-1 w-8 rounded-full bg-black"
              }
            ></span>
          </div>
        </Button>
      </div>
    </>
  );
}
