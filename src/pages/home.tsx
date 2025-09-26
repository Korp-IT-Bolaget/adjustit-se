import HeroSection, { type HeroData } from "@/components/home/hero-section";
import DevToolsSection, {
  type DevToolsData,
} from "@/components/home/dev-tools-section";
import TeamSection, { type TeamData } from "@/components/home/team-section";
import CallToAction, {
  type CtaData,
} from "@/components/home/call-to-action-section";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <>
      <title>{t("page.title")}</title>
      <meta name="description" content={t("page.description")} />
      <HeroSection
        heroData={t("heroSection", { returnObjects: true }) as HeroData}
      />
      <DevToolsSection
        devToolsData={
          t("devToolsSection", { returnObjects: true }) as DevToolsData
        }
      />
      <TeamSection
        teamData={t("teamSection", { returnObjects: true }) as TeamData}
      />
      <CallToAction
        ctaData={t("callToActionSection", { returnObjects: true }) as CtaData}
      />
    </>
  );
}
