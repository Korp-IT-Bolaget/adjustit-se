import { useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Layout from "./components/layout";
import NotFoundPage from "./pages/not-found-page";
import { appRoutes } from "./routes";
import { supportedLanguages } from "./components/ui/language-provider";

interface LanguageSetterProps {
  lang: string;
}

function LanguageSetter({ lang }: LanguageSetterProps) {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return <Outlet />;
}

function renderLanguageRoutes(lang: string) {
  return (
    <Route path={lang} element={<LanguageSetter lang={lang} />}>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.element}
          index={route.index}
        />
      ))}
      {/* Multi lang ver. */}
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            index={route.index}
            element={route.element}
          />
        ))}
        {supportedLanguages.map(
          (lang) => lang.code !== "sv" && renderLanguageRoutes(lang.code)
        )}
        {/* Swedish ver.*/}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
