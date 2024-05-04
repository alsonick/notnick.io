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

  // Figure this out later lol
  useEffect(() => {
    var map: any = {};
    const keydownHandler = (e: KeyboardEvent) => {
      // e = e || e;
      // map[e.key] = e.type == "keydown";
      // console.log(map);
      // if (map.Control && map.t) {
      //   toggleTheme(localStorage.getItem("theme"));
      // }
      // map = {
      //   Control: false,
      //   t: false,
      // };
      if (e.key.toLowerCase() === "t" && e.key.toLowerCase() === "control") {
        toggleTheme(localStorage.getItem("theme"));
      }
      // console.log(e.key);
    };

    document.addEventListener("keydown", keydownHandler);

    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
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
    <RoundedBox onClick={() => toggleTheme(theme)}>
      {theme === "dark" ? (
        <FiSun className="hover:scale-110 duration-150" />
      ) : (
        <FiMoon className="hover:scale-110 duration-150" />
      )}
    </RoundedBox>
  );
};
