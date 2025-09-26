import useCookieConsent from "./use-cookie-consent";
import CookieConsentDialog from "./cookie-consent-dialog";
import CookieSettingsDialog from "./cookie-settings-dialog";

export default function CookieConsent() {
  const {
    isOpen,
    isSettingsOpen,
    improvedExperience,
    setImprovedExperience,
    performance,
    setPerformance,
    savePreferences,
    openSettings,
    closeSettings,
  } = useCookieConsent();

  if (isOpen) {
    return (
      <CookieConsentDialog
        isOpen={isOpen}
        savePreferences={savePreferences}
        openSettings={openSettings}
      />
    );
  }

  if (isSettingsOpen) {
    return (
      <CookieSettingsDialog
        isOpen={isSettingsOpen}
        closeSettings={closeSettings}
        savePreferences={savePreferences}
        improvedExperience={improvedExperience}
        setImprovedExperience={setImprovedExperience}
        performance={performance}
        setPerformance={setPerformance}
        openSettings={openSettings}
      />
    );
  }

  return null;
}
