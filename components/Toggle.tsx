import React from "react";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export const Toggle = () => {
  const [theme, setTheme] = useState<string>("dark");

  useEffect(() => {
    let storedTheme = localStorage.getItem("theme") as string;

    if (!storedTheme) {
      localStorage.setItem("theme", theme);
    } else {
      setTheme(storedTheme);
      storedTheme === "dark"
        ? document.querySelector("html")?.classList.add("dark")
        : null;
    }
  }, []);

  const changeTheme = (theme: string) => {
    let newTheme = theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    newTheme === "light"
      ? document.querySelector("html")?.classList.remove("dark")
      : document.querySelector("html")?.classList.add("dark");
  };

  return (
    <button
      className="w-fit mt-2 bg-black text-white p-2 rounded ml-auto dark:bg-white dark:text-black"
      onClick={() => changeTheme(theme)}
    >
      {theme === "light" && <FiSun />}
      {theme === "dark" && <FiMoon />}
    </button>
  );
};
