import { useEffect, useState } from "react";

function usePreferredTheme() {
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const updateTheme = () => {
      if (theme === "system") {
        root.classList.toggle("dark", mediaQuery.matches);
      } else {
        root.classList.toggle("dark", theme === "dark");
      }
    };

    updateTheme();
    mediaQuery.addEventListener("change", updateTheme);
    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [theme]);

  return [theme, setTheme];
}

export default usePreferredTheme;
