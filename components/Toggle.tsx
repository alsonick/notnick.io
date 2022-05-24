import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";

export const Toggle = () => {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");

      if (!storedTheme) {
        localStorage.setItem("theme", "dark");
        setTheme(storedTheme);
        return;
      }

      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = (theme: string | null) => {
    let newTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    newTheme === "light"
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
