import { useTranslation } from "react-i18next";
import LanguageLink from "../language-link";
import AdjustItLogo from "./logo";

export default function SiteFooter() {
  const { t } = useTranslation("common");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border dark:border-white/10 backdrop-blur-xl">
      <div className="wrapper px-8">
        <div className="container mx-auto max-w-7xl py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 lg:gap-8 md:gap-6">
          {/* Left content */}
          <div className="flex md:flex-row items-center flex-col gap-4 text-center md:text-left flex-none">
            <div className="title">
              <LanguageLink to="/">
                <AdjustItLogo className="w-8 hover:text-accent transition-colors" />
              </LanguageLink>
            </div>
            <div>
              <p className="text-sm dark:text-neutral-400">
                Org.nr 559532-0770
              </p>
              <a
                href="mailto:contact@adjustit.se"
                className="text-sm dark:text-neutral-400 hover:text-sky-700 dark:hover:text-sky-700 transition-colors"
              >
                contact@adjustit.se
              </a>
            </div>
          </div>

          {/* Right content */}
          <div className="flex gap-4 text-sm flex-row items-center justify-center flex-wrap md:justify-end md:gap-6 flex-1">
            <LanguageLink
              to="/cookie-policy"
              className="dark:text-neutral-400 hover:text-sky-700 dark:hover:text-sky-700 transition-colors"
            >
              {t("footer.cookiePolicy")}
            </LanguageLink>
            <span className="hidden md:inline dark:text-neutral-600">|</span>
            <LanguageLink
              to="/privacy-policy"
              className="dark:text-neutral-400 hover:text-sky-700 dark:hover:text-sky-700 transition-colors"
            >
              {t("footer.privacyPolicy")}
            </LanguageLink>
            <span className="hidden md:inline dark:text-neutral-600">|</span>

            <p className="dark:text-neutral-400 text-center md:text-right">
              &copy; {currentYear} AdjustIT AB. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
