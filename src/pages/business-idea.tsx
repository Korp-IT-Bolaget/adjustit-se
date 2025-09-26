// BusinessIdea.tsx

import { useTranslation } from "react-i18next";
import AboutSection, { type AboutData } from "@/components/business-idea/about-section";
import StorySection, {type StoryData} from "@/components/business-idea/story-section";

export default function BusinessIdea() {
  const { t } = useTranslation("business-idea");

  return (
    <>
      <title>{t("page.title")}</title>
      <meta name="description" content={t("page.description")} />
      <div className="relative">
        <div className="hero-background"></div>
        <AboutSection
          aboutData={t("aboutSection", { returnObjects: true }) as AboutData}
        />
        <StorySection
          storyData={t("storySection", { returnObjects: true }) as StoryData}
        />
      </div>
    </>
  );
}