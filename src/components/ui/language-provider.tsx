import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from "react";
import { useTranslation } from "react-i18next";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";

export const supportedLanguages = [
  { code: "en", name: "English" },
  { code: "sv", name: "Svenska" },
  { code: "fi", name: "Suomi" },
  { code: "fr", name: "Français" },
];

export const defaultLang = "sv";

const LanguageContext = createContext({
  changeLanguage: (_langCode: string) => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();
  const [cookies, setCookie] = useCookies(["i18nextLng", "cookie-consent"]);
  const location = useLocation();
  const navigate = useNavigate();

  // useEffect to load language from cookie on initial render
  useEffect(() => {
    const savedLang = cookies.i18nextLng;
    if (savedLang && i18n.language !== savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [cookies.i18nextLng, i18n]);

  // useEffect to sync URL with language
  useEffect(() => {
    const savedLang = cookies.i18nextLng;
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const urlLang = pathSegments[0];

    const hasLangSegment = supportedLanguages.some(
      (lang) => lang.code === urlLang
    );

    const basePath = hasLangSegment
      ? `/${pathSegments.slice(1).join("/")}`
      : location.pathname;

    if (savedLang) {
      if (savedLang === defaultLang && hasLangSegment) {
        navigate(basePath, { replace: true });
        return;
      }

      if (savedLang !== defaultLang && urlLang !== savedLang) {
        const newPath = `/${savedLang}${basePath}`;
        navigate(newPath, { replace: true });
        return;
      }
    }
  }, [cookies.i18nextLng]);

  // NEW useEffect to update the HTML lang attribute
  useEffect(() => {
    const updateLangAttribute = (lng: string) => {
      document.documentElement.setAttribute("lang", lng);
    };

    // Set the initial language attribute
    updateLangAttribute(i18n.language);

    // Attach the event listener for future changes
    i18n.on("languageChanged", updateLangAttribute);

    // Clean up the event listener when the component unmounts
    return () => {
      i18n.off("languageChanged", updateLangAttribute);
    };
  }, [i18n]);

  const changeLanguage = (langCode: string) => {
    if (i18n.language === langCode) {
      return;
    }

    const hasConsented = cookies["cookie-consent"]?.improvedExperience || false;

    i18n.changeLanguage(langCode);

    if (hasConsented) {
      // only set cookie if it’s different
      if (cookies.i18nextLng !== langCode) {
        setCookie("i18nextLng", langCode, { path: "/", maxAge: 31536000 });
      }
    }

    const currentPath = location.pathname;
    const pathSegments = currentPath.split("/").filter(Boolean);

    if (langCode === defaultLang) {
      const pathWithoutLang = pathSegments
        .filter(
          (segment) => !supportedLanguages.some((lang) => lang.code === segment)
        )
        .join("/");
      navigate(`/${pathWithoutLang}`);
    } else {
      const currentLangCode = pathSegments[0];
      if (supportedLanguages.some((lang) => lang.code === currentLangCode)) {
        pathSegments[0] = langCode;
        navigate(`/${pathSegments.join("/")}`);
      } else {
        const newPath = `/${langCode}${currentPath}`;
        navigate(newPath);
      }
    }
  };

  const value = { changeLanguage };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  return useContext(LanguageContext);
};
