"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null); // ✅ Start with `null` to avoid hydration issues

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme"); // ✅ Get stored theme from localStorage
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches; // ✅ Check system dark mode

      let initialTheme = storedTheme || "system"; // ✅ Default to system if no value in localStorage

      setTheme(initialTheme); // ✅ Set theme state

      // ✅ Apply correct theme when system is selected
      if (
        initialTheme === "dark" ||
        (initialTheme === "system" && prefersDark)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem("theme", theme);

      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (theme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        // ✅ System mode: Apply system setting dynamically
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        if (prefersDark) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
