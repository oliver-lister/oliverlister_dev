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
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState<string | null>(() => {
    // Retrieve theme from local storage on component mount
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || darkMode.matches ? "dark" : "light";
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";

      // Save the new theme to local storage
      localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    // Add an event listener to update the theme when the user changes their preference on the browser
    const handleDarkModeChange = () => {
      setTheme(darkMode.matches ? "dark" : "light");
    };
    darkMode.addEventListener("change", handleDarkModeChange);
    return () => {
      darkMode.removeEventListener("change", handleDarkModeChange);
    };
  }, [darkMode]);

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
