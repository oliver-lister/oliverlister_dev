"use client";

import Button from "../Button";
import Icon from "../Icon";
import SocialsNav from "./SocialsNav";
import { useThemeContext } from "@/context/ThemeContext";

export default function Footer() {
  const { toggleTheme } = useThemeContext();

  return (
    <footer className="border-t shadow bg-secondary-900 dark:bg-primary-400 dark:border-primary dark:shadow-secondary/20">
      <div className="wrapper grid grid-cols-3 py-6 items-center">
        <p className="justify-self-start">
          © 2023 <span className="hidden | sm:inline">Oliver Lister</span>
        </p>
        <SocialsNav />
        <Button
          theme="primary"
          className="justify-self-end"
          onClick={toggleTheme}
          ariaLabel="Toggle color theme"
        >
          <Icon icon="theme" />
          <span className="hidden | sm:block">Change Theme</span>
        </Button>
      </div>
    </footer>
  );
}
