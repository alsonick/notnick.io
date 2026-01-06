import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { RoundedBox } from "./RoundedBox";

export const Toggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

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

    newThemeToToggle === "light"
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      const isMac =
        /mac/i.test(navigator.platform) || /mac os/i.test(navigator.userAgent);
      const hasPrimaryMod = isMac ? e.metaKey : e.ctrlKey;
      const hasAlt = e.altKey;
      const isTKey = e.key === "t" || e.key === "T";

      if (hasPrimaryMod && hasAlt && isTKey) {
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
