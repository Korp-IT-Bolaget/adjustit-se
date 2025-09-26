import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lightbulb, Users } from "lucide-react";
import AdjustItLogo from "../ui/logo";
import type { Dispatch, SetStateAction } from "react";

interface CookieSettingsDialogProps {
  isOpen: boolean;
  closeSettings: () => void;
  savePreferences: (acceptAll?: boolean, rejectAll?: boolean) => void;
  improvedExperience: boolean;
  setImprovedExperience: Dispatch<SetStateAction<boolean>>;
  performance: boolean;
  setPerformance: Dispatch<SetStateAction<boolean>>;
  openSettings: () => void;
}

export default function CookieSettingsDialog({
  isOpen,
  savePreferences,
  openSettings,
}: CookieSettingsDialogProps) {
  const { t } = useTranslation("common");

  return (
    <Dialog open={isOpen}>
      <DialogContent
        showCloseButton={false}
        className="h-[512px] flex flex-col gap-4 items-start justify-start text-sm lg:max-w-xl md:max-w-xl sm:max-w-xl w-full"
      >
        <DialogHeader className="self-end">
          <div className="title">
            <AdjustItLogo className="w-8 text-accent" />
          </div>
        </DialogHeader>
        <DialogTitle>{t("cookies.title")}</DialogTitle>
        <DialogDescription>{t("cookies.description.text1")}</DialogDescription>
        <ul className="flex flex-col gap-4">
          <li>
            <div className="flex gap-2">
              <Lightbulb />
              {t("cookies.preferences.improve")}
            </div>
          </li>
          <li>
            <div className="flex gap-2">
              <Users />
              {t("cookies.preferences.personalize")}
            </div>
          </li>
        </ul>
        <p className="grow">{t("cookies.description.text2")}</p>
        <div className="flex flex-col-reverse md:flex-row gap-2 self-center justify-between w-full border-t border-border pt-4">
          <button
            onClick={openSettings}
            className="md:w-fit w-full rounded-full py-2.5 px-5 cursor-pointer bg-neutral-700 text-white font-semibold text-sm uppercase"
          >
            {t("cookies.actions.settings")}
          </button>
          <button
            onClick={() => savePreferences(false, true)}
            className="md:w-fit w-full rounded-full py-2.5 px-5 cursor-pointer bg-neutral-700 text-white font-semibold text-sm uppercase"
          >
            {t("cookies.actions.rejectAll")}
          </button>
          <button
            onClick={() => savePreferences(true)}
            className="md:w-fit w-full rounded-full py-2.5 px-5 cursor-pointer bg-sky-700 text-white font-semibold text-sm uppercase"
          >
            {t("cookies.actions.acceptAll")}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
