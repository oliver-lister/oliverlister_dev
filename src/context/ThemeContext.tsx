"use client";

import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext<null | ThemeContext>(null);

type ThemeContext = {
  theme: string | null;
  toggleTheme: () => void;
};

const ThemeContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [theme, setTheme] = useState<string | null>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    // Check if dark mode is preferred by the user in their browser
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");

    // Set the initial theme based on user preference or default to "light"
    setTheme(darkMode.matches ? "dark" : "light");

    // Add an event listener to update the theme when the user changes their preference
    const handleDarkModeChange = () => {
      setTheme(darkMode.matches ? "dark" : "light");
    };
    darkMode.addEventListener("change", handleDarkModeChange);

    return () => {
      darkMode.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.remove("dark", "light");

      // Only add the class if theme is not null
      if (theme !== null) {
        htmlElement.classList.add(theme);
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};
