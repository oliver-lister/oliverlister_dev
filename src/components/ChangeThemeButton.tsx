"use client";

import Button from "./Button";
import { useThemeContext } from "@/context/ThemeContext";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

function ChangeThemeButton() {
  const { theme, toggleTheme } = useThemeContext();

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
