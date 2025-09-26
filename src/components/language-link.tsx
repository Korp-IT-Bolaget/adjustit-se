import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface LanguageLinkProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const LanguageLink = ({
  children,
  className,
  to,
  onClick,
}: LanguageLinkProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const defaultLang = "sv";

  const href = currentLang === defaultLang ? to : `/${currentLang}${to}`;

  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default LanguageLink;
