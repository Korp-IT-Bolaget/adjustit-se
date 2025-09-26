import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useTranslation } from "react-i18next";
import { Ellipsis, Languages } from "lucide-react";
import LanguageLink from "../language-link";
import MobileNavigation from "./mobile-navigation-menu";
import ThemeSwitcher from "./theme-switcher";
import { supportedLanguages, useLanguage } from "./language-provider";
import AdjustItLogo from "./logo";
import { useLocation, useMatch } from "react-router-dom";

export default function SiteHeader() {
  const { t } = useTranslation("common");
  const { i18n } = useTranslation();
  const { changeLanguage } = useLanguage();
  const location = useLocation();
  const currentPath = location.pathname;
  const isDefaultLang = i18n.language === "sv";
  const isHomeActive = useMatch(isDefaultLang ? "/" : `/${i18n.language}`);
  const isServicesActive = useMatch(
    isDefaultLang ? "/services/*" : `/${i18n.language}/services/*`
  );
  const isAboutActive = useMatch(
    isDefaultLang ? "/about/*" : `/${i18n.language}/about/*`
  );

  const services = [
    {
      title: t("services.items.korpaccess.title"),
      href: "/services/korpaccess",
      description: t("services.items.korpaccess.description"),
    },
  ];

  const about = [
    {
      title: t("about.items.businessIdeaAndVision"),
      href: "/about/business-idea-and-vision",
    },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border dark:border-white/10 backdrop-blur-xl bg-neutral-50/60 dark:bg-neutral-950/60">
      <div className="wrapper pl-8 md:px-8">
        <div className="container mx-auto max-w-7xl h-16 flex items-center justify-between">
          <div className="flex flex-row items-center gap-4">
            <div className="title">
              <LanguageLink
                to="/"
                className="group flex flex-row gap-4 items-center"
              >
                <AdjustItLogo className="w-8 text-accent group-hover:text-accent transition-colors" />
                <h1 className="hidden md:block text-lg logo-text font-bold text-current group-hover:text-accent transition-colors">
                  AdjustIT
                </h1>
              </LanguageLink>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 h-full">
            <MobileNavigation />
            <NavigationMenu
              viewport={false}
              key={currentPath}
              className="hidden md:flex"
            >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <LanguageLink
                      className={`font-medium uppercase h-full flex justify-center hover:bg-transparent ${
                        isHomeActive ? "text-sky-700" : ""
                      }`}
                      to="/"
                    >
                      <span>{t("navigation.home")}</span>
                    </LanguageLink>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`cursor-pointer uppercase ${
                      isServicesActive ? "text-sky-700" : ""
                    }`}
                  >
                    {t("navigation.services")}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[350px]">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`cursor-pointer uppercase ${
                      isAboutActive ? "text-sky-700" : ""
                    }`}
                  >
                    <span>{t("navigation.about")}</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px]">
                      {about.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <LanguageLink
                              to={item.href}
                              className="uppercase hover:text-accent"
                            >
                              {item.title}
                            </LanguageLink>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden lg:flex before:content-[''] before:w-[1px] before:h-6 before:bg-border">
                  <NavigationMenuTrigger className="cursor-pointer pl-3 pr-2">
                    <Languages className="h-5 w-5" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-auto grid gap-1 p-2">
                      {supportedLanguages.map((lang) => (
                        <li key={lang.code}>
                          <NavigationMenuLink
                            onClick={() => changeLanguage(lang.code)}
                            className="cursor-pointer hover:text-accent rounded-md uppercase"
                          >
                            {lang.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="hidden lg:flex after:content-[''] after:w-[1px] after:h-6 after:bg-border">
                  <div className="pr-3">
                    <ThemeSwitcher />
                  </div>
                </NavigationMenuItem>
                <NavigationMenuItem className="lg:hidden">
                  <NavigationMenuTrigger
                    className="cursor-pointer pl-3 pr-2"
                    showChevron={false}
                  >
                    <Ellipsis className="h-5 w-5" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="px-0">
                    <ul className="w-auto grid gap-1 p-2">
                      {supportedLanguages.map((lang) => (
                        <li key={lang.code}>
                          <NavigationMenuLink
                            onClick={() => changeLanguage(lang.code)}
                            className="cursor-pointer hover:text-accent rounded-md uppercase"
                          >
                            {lang.name}
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                    <div className="lg:hidden px-5 pt-4 pb-2 border-t border-border">
                      <ThemeSwitcher />
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <a
              href="mailto:contact.adjustit.se"
              className="hidden lg:block rounded-full py-2.5 px-8 bg-sky-700 hover:bg-sky-800 transition-colors text-white font-semibold uppercase"
            >
              {t("navigation.contact")}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <LanguageLink to={href} className="hover:text-accent">
          <div className="text-base leading-none uppercase">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </LanguageLink>
      </NavigationMenuLink>
    </li>
  );
}
