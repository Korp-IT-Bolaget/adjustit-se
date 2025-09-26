import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="pt-16">
        <h2>{t("notFound")}</h2>
      </div>
    </>
  );
}
