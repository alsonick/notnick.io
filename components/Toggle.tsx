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

  return (
    <RoundedBox
      title={theme === "dark" ? "Dark Mode" : "Light Theme"}
      onClick={() => toggleTheme(theme)}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </RoundedBox>
  );
};
