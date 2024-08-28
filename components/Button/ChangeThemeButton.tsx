"use client";

import Button from "./Button";
import { useTheme } from "next-themes";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import useIsMounted from "@/hooks/useIsMounted";

function ChangeThemeButton() {
  const { theme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  const toggleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  // to avoid hydration error as theme is not ready when page is rendered server-side, its only ready when component mounts on the client
  if (!isMounted) {
    return null;
  }

  return (
    <Button
      variant="outline"
      className="justify-self-end"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      {theme === "light" ? <IconMoonStars /> : <IconSun />}
      <span className="hidden | sm:block">Change Theme</span>
    </Button>
  );
}

export default ChangeThemeButton;
