import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LanguageLink from "../language-link";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import ThemeSwitcher from "./theme-switcher";
import { supportedLanguages, useLanguage } from "./language-provider";

export default function MobileNavigation() {
  const { t, i18n } = useTranslation("common");
  const [isOpen, setOpen] = useState(false);
  const currentLang = i18n.language;
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    // Manages body scroll
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Function to handle window resize
    const handleResize = () => {
      // Check if the window is resized to a desktop size
      if (window.innerWidth >= 768 && isOpen) {
        setOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  const services = [
    {
      title: t("services.items.korpaccess.title"),
      href: "/services/korpaccess",
    },
  ];

  const about = [
    {
      title: t("about.items.businessIdeaAndVision"),
      href: "/about/business-idea-and-vision",
    },
  ];

  const currentLanguage = supportedLanguages.find(
    (lang) => lang.code === currentLang
  );

  // Filter out the current language so it doesn't appear in the list
  const otherLanguages = supportedLanguages.filter(
    (lang) => lang.code !== currentLang
  );

  return (
    <nav className="md:hidden">
      <div className="bg-accent text-white h-16 w-16 flex items-center justify-center">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-neutral-50/60 dark:bg-neutral-950/60 backdrop-blur-xl min-h-screen"
          style={{ marginTop: `calc(4rem + 1px)` }}
        >
          <div className="flex flex-col items-center h-full max-w-72 mx-auto pt-6 pb-24">
            <ul className="w-full">
              <li className="w-full border-b border-border dark:border-white/10">
                <LanguageLink
                  to="/"
                  className="py-4 block uppercase font-medium hover:text-accent transition duration-100"
                  onClick={() => setOpen(false)} 
                >
                  <span>{t("navigation.home")}</span>
                </LanguageLink>
              </li>
              <li className="w-full border-b border-border dark:border-white/10">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="w-full py-4 pr-1 text-base uppercase font-medium">
                      {t("navigation.services")}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-0 pb-4 text-base">
                      {services.map((item) => (
                        <li key={item.title}>
                          <LanguageLink
                            to={item.href} // Use item.href
                            className="py-2 block hover:text-accent transition duration-200 uppercase"
                            onClick={() => setOpen(false)}
                          >
                            <span>{item.title}</span>
                          </LanguageLink>
                        </li>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className="w-full border-b border-border dark:border-white/10">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="w-full py-4 pr-1 text-base uppercase font-medium ">
                      <span>{t("navigation.about")}</span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pt-0 pb-4 text-base">
                      {about.map((item) => (
                        <li key={item.title}>
                          <LanguageLink
                            to={item.href}
                            className="py-2 block hover:text-accent transition duration-200 uppercase"
                            onClick={() => setOpen(false)}
                          >
                            <span>{item.title}</span>
                          </LanguageLink>
                        </li>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className="w-full flex flex-row items-start justify-between gap-2">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="w-full py-4 text-base uppercase justify-start">
                      <span>
                        <Languages />
                      </span>
                      {/* Host the current language name here */}
                      <span className=" font-medium">
                        {currentLanguage ? currentLanguage.name : "Language"}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pt-0 pb-4 px-10 text-base">
                      <ul className="grid gap-2">
                        {/* Map over the filtered array of other languages */}
                        {otherLanguages.map((lang) => (
                          <li key={lang.code}>
                            <a
                              onClick={() => {
                                changeLanguage(lang.code);
                                setOpen(false);
                              }}
                              className="py-2 block hover:text-accent transition duration-200 cursor-pointer uppercase"
                            >
                              {lang.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="py-4 pr-1">
                  <ThemeSwitcher />
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
