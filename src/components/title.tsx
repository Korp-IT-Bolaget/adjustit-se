import { useEffect } from "react";
import { useTranslation } from "react-i18next";

interface TitleProps {
  titleKey: string;
  children: React.ReactNode;
}

export default function Title({ titleKey, children }: TitleProps) {
  const { t } = useTranslation("titles");

  useEffect(() => {
    document.title = `${t(titleKey)} - AdjustIT`;
  }, [t, titleKey]);

  return <>{children}</>;
}
