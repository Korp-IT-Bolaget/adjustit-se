import { useTranslation } from "react-i18next";
import CookieTypesSection, {
  type CookieTypesData,
} from "@/components/cookie-policy/cookie-types-section";
import WhatAreCookiesSection from "@/components/cookie-policy/what-are-cookies-section";
import WhatCookiesDoWeUseSection, {
  type WhatCookiesDoWeUseData,
} from "@/components/cookie-policy/what-cookies-do-we-use-section";
import YourChoicesSection, {
  type YourChoicesData,
} from "@/components/cookie-policy/your-choices-section";
import ContactSection, {
  type ContactData,
} from "@/components/privacy-policy/contact-section";
import HeaderSection, {
  type HeaderData,
} from "@/components/privacy-policy/header-section";
import IntroSection, {
  type IntroData,
} from "@/components/privacy-policy/intro-section";

export default function CookiePolicy() {
  const { t } = useTranslation("cookie-policy");

  return (
    <>
      <title>{t("page.title")}</title>
      <meta name="description" content={t("page.description")} />
      <section className="relative">
        <div className="hero-background"></div>
        <div className="mx-auto pt-16 pb-16 w-full">
          <article className="mx-auto px-8 py-8 w-full max-w-7xl flex flex-col gap-8">
            <HeaderSection
              headerData={
                t("headerSection", { returnObjects: true }) as HeaderData
              }
            />
            <IntroSection
              introData={
                t("introSection", { returnObjects: true }) as IntroData
              }
            />
            <WhatAreCookiesSection
              whatAreCookiesData={
                t("whatAreCookiesSection", {
                  returnObjects: true,
                }) as WhatCookiesDoWeUseData
              }
            />
            <WhatCookiesDoWeUseSection
              whatCookiesDoWeUseData={
                t("whatCookiesDoWeUseSection", {
                  returnObjects: true,
                }) as WhatCookiesDoWeUseData
              }
            />
            <CookieTypesSection
              cookieTypesData={
                t("cookieTypesSection", {
                  returnObjects: true,
                }) as CookieTypesData
              }
            />
            <YourChoicesSection
              yourChoicesData={
                t("yourChoicesSection", {
                  returnObjects: true,
                }) as YourChoicesData
              }
            />
            <ContactSection
              contactData={
                t("contactSection", { returnObjects: true }) as ContactData
              }
            />
          </article>
        </div>
      </section>
    </>
  );
}
