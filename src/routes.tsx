import BusinessIdea from "./pages/business-idea";
import CookiePolicy from "./pages/cookie-policy";
import Home from "./pages/home";
import KorpAccess from "./pages/korpaccess";
import PrivacyPolicy from "./pages/privacy-policy";

export const appRoutes = [
  {
    path: "",
    element: <Home />,
    index: true,
  },
  {
    path: "services/korpaccess",
    element: <KorpAccess />,
  },
  {
    path: "about/business-idea-and-vision",
    element: <BusinessIdea />,
  },
  {
    path: "cookie-policy",
    element: <CookiePolicy />,
  },
  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },
];
