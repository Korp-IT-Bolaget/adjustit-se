import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18n";
import { ThemeProvider } from "./components/ui/theme-provider.tsx";
import { CookiesProvider } from "react-cookie";
import CookieConcent from "./components/cookie-consent/cookie-consent.tsx";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./components/ui/language-provider.tsx";
import ScrollToTop from "./components/scroll-to-top.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <LanguageProvider>
          <ThemeProvider>
            <ScrollToTop />
            <CookieConcent />
            <App />
          </ThemeProvider>
        </LanguageProvider>
      </BrowserRouter>
    </CookiesProvider>
  </StrictMode>
);
