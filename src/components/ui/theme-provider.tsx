import { useEffect, type ReactNode } from "react";
import { useCookies } from "react-cookie";
import { useThemeStore } from "../stores/theme-store";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [cookies, setCookie] = useCookies(["theme", "cookie-consent"]);
  const { isDark, setTheme } = useThemeStore();

  // Initialize Zustand from cookie ONCE
  useEffect(() => {
    if (cookies.theme === "dark") {
      setTheme(true);
    } else {
      setTheme(false);
    }
    // only run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle DOM & cookie saving when theme changes
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    const hasConsented = cookies["cookie-consent"]?.improvedExperience || false;
    const newThemeValue = isDark ? "dark" : "light";

    if (hasConsented && cookies.theme !== newThemeValue) {
      setCookie("theme", newThemeValue, {
        path: "/",
        maxAge: 31536000,
      });
    }
  }, [isDark, cookies.theme, cookies["cookie-consent"]]);

  return <>{children}</>;
}

export const useTheme = () => {
  const { isDark, toggleTheme } = useThemeStore();
  return { isDark, toggleTheme };
};
