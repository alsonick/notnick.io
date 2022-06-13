import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

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

  return (
    <button
      className="flex items-center justify-center bg-gray-100 text-black h-9 w-9 duration-300 hover:bg-gray-200 rounded-lg ml-auto dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-white"
      onClick={() => toggleTheme(theme)}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};
