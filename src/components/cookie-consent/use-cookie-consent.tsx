import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

export default function useCookieConsent() {
  const [cookies, setCookie] = useCookies(["cookie-consent"]);
  const [isOpen, setOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  const initialPreferences = cookies["cookie-consent"] || {
    improvedExperience: true,
    performance: true,
  };
  const [improvedExperience, setImprovedExperience] = useState(
    initialPreferences.improvedExperience
  );
  const [performance, setPerformance] = useState(
    initialPreferences.performance
  );

  useEffect(() => {
    if (!cookies["cookie-consent"]) {
      setOpen(true);
    }
  }, [cookies]);

  const savePreferences = (acceptAll = false, rejectAll = false) => {
    let preferences;
    if (acceptAll) {
      preferences = { improvedExperience: true, performance: true };
    } else if (rejectAll) {
      preferences = { improvedExperience: false, performance: false };
    } else {
      preferences = { improvedExperience, performance };
    }

    setCookie("cookie-consent", JSON.stringify(preferences), {
      path: "/",
      maxAge: 31536000,
    });
    setOpen(false);
    setSettingsOpen(false);
  };

  const openSettings = () => {
    setOpen(false);
    setSettingsOpen(true);
  };

  const closeSettings = () => {
    setSettingsOpen(false);
    setOpen(true);
  };

  return {
    isOpen,
    isSettingsOpen,
    improvedExperience,
    setImprovedExperience,
    performance,
    setPerformance,
    savePreferences,
    openSettings,
    closeSettings,
  };
}
