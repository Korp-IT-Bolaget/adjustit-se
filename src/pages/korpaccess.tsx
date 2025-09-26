import { useTranslation } from "react-i18next";
import FloatingSection, {
  type FloatingData,
} from "@/components/korpaccess/floating-section";
import Herosection, {
  type HeroData,
} from "@/components/korpaccess/hero-section";
import FeaturesSection, {
  type FeaturesData,
} from "@/components/korpaccess/features-section";
import FaqSection, { type FaqData } from "@/components/korpaccess/faq-section";

export default function KorpAccess() {
  const { t } = useTranslation("korpaccess");

  return (
    <>
      <title>{t("page.title")}</title>
      <meta name="description" content={t("page.description")} />
      <div className="relative">
        <div className="hero-background"></div>
        <Herosection
          heroData={t("heroSection", { returnObjects: true }) as HeroData}
        />
        <FeaturesSection
          featuresData={
            t("featuresSection", { returnObjects: true }) as FeaturesData
          }
        />
        <FloatingSection
          floatingData={
            t("floatingSection", { returnObjects: true }) as FloatingData
          }
        />
        <FaqSection
          faqData={t("faqSection", { returnObjects: true }) as FaqData}
        />
      </div>
    </>
  );
}
