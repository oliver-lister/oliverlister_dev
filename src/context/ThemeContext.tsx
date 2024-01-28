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
  const isClient = typeof window !== "undefined"; // Check if we are on the client side

  const darkMode = isClient
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;

  const [theme, setTheme] = useState<string | null>(() => {
    // Retrieve theme from local storage on component mount
    const storedTheme = isClient ? localStorage.getItem("theme") : null;
    return storedTheme || (darkMode && darkMode.matches) ? "dark" : "light";
  });

  useEffect(() => {
    // Add an event listener to update the theme when the user changes their preference on the browser
    const handleDarkModeChange = () => {
      setTheme(darkMode?.matches ? "dark" : "light");
      isClient &&
        localStorage.setItem("theme", darkMode?.matches ? "dark" : "light");
    };

    // Ensure we're on the client side before adding the event listener
    isClient && darkMode?.addEventListener("change", handleDarkModeChange);

    return () => {
      // Remove the event listener when the component is unmounted
      isClient && darkMode?.removeEventListener("change", handleDarkModeChange);
    };
  }, [darkMode, isClient]);

  useEffect(() => {
    const htmlElement = isClient && document.querySelector("html");
    if (htmlElement) {
      htmlElement.classList.remove("dark", "light");

      // Only add the class if theme is not null
      if (theme !== null) {
        htmlElement.classList.add(theme);
      }
    }
  }, [theme, isClient]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";

      // Save the new theme to local storage (if available)
      isClient && localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  };

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
