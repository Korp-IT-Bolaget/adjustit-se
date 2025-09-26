import ContactSection, {
  type ContactData,
} from "@/components/privacy-policy/contact-section";
import DataCollectionSection, {
  type DataCollectionData,
} from "@/components/privacy-policy/data-collection-section";
import DataProcessingSection, {
  type DataProcessingData,
} from "@/components/privacy-policy/data-processing-section";
import DataRetentionSection, {
  type DataRetentionData,
} from "@/components/privacy-policy/data-retention-section";
import HeaderSection, {
  type HeaderData,
} from "@/components/privacy-policy/header-section";
import IntroSection, {
  type IntroData,
} from "@/components/privacy-policy/intro-section";
import YourRightsSection, {
  type YourRightsData,
} from "@/components/privacy-policy/your-rights-section";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation("privacy-policy");

  return (
    <>
      <title>{t("page.title")}</title>
      <meta name="description" content={t("page.description")} />
      <section className="relative">
        <div className="hero-background scale-x-[-1]"></div>
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
            <DataCollectionSection
              dataCollectionData={
                t("dataCollectionSection", {
                  returnObjects: true,
                }) as DataCollectionData
              }
            />
            <DataProcessingSection
              dataProcessingData={
                t("dataProcessingSection", {
                  returnObjects: true,
                }) as DataProcessingData
              }
            />
            <DataRetentionSection
              dataRetentionData={
                t("dataRetentionSection", {
                  returnObjects: true,
                }) as DataRetentionData
              }
            />
            <YourRightsSection
              yourRightsData={
                t("yourRightsSection", {
                  returnObjects: true,
                }) as YourRightsData
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
