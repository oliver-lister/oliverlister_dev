"use client";

import Button from "./Button";
import { useTheme } from "next-themes";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

function ChangeThemeButton() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <Button
      theme="primary"
      className="justify-self-end"
      onClick={toggleTheme}
      ariaLabel="Toggle color theme"
    >
      {theme === "light" ? <IconMoonStars /> : <IconSun />}
      <span className="hidden | sm:block">Change Theme</span>
    </Button>
  );
}

export default ChangeThemeButton;
