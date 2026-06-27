import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { RoundedBox } from "./RoundedBox";

// Keep in sync with the `.theme-transition` duration in globals.css.
const THEME_FADE_MS = 150;

export const Toggle = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const fadeTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedThemeOnLocalStorage = localStorage.getItem("theme");

      if (!storedThemeOnLocalStorage) {
        localStorage.setItem("theme", "dark");
        setTheme(localStorage.getItem("theme"));
        return;
      }

      localStorage.setItem("theme", storedThemeOnLocalStorage);
      setTheme(storedThemeOnLocalStorage);

      storedThemeOnLocalStorage === "light"
        ? document.querySelector("html")?.classList.remove("dark")
        : document.querySelector("html")?.classList.add("dark");
    }
  }, []);

  const toggleTheme = (theme: string | null) => {
    let newThemeToToggle = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newThemeToToggle);
    setTheme(newThemeToToggle);

    const html = document.querySelector("html");

    // Turn on the synchronized colour fade just for this toggle, then remove it
    // so it doesn't affect hover/focus transitions afterwards.
    html?.classList.add("theme-transition");
    clearTimeout(fadeTimeout.current);
    fadeTimeout.current = setTimeout(() => {
      html?.classList.remove("theme-transition");
    }, THEME_FADE_MS);

    newThemeToToggle === "light"
      ? html?.classList.remove("dark")
      : html?.classList.add("dark");
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const hasCtrl = e.ctrlKey;
      const isTKey = e.key === "t" || e.key === "T";

      if (hasCtrl && isTKey) {
        e.preventDefault();
        toggleTheme(theme);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeydown);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("keydown", handleKeydown);
      }
    };
  }, [theme]);

  return (
    <RoundedBox onClick={() => toggleTheme(theme)} title="Toggle">
      {theme === "dark" ? (
        <FiSun className="duration-150 text-base md:hover:scale-110" />
      ) : (
        <FiMoon className="duration-150 text-base md:hover:scale-110" />
      )}
    </RoundedBox>
  );
};
