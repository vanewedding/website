// import Context
import GlobalContext from "./GlobalContext";

// import hooks
import { useLocation, matchRoutes } from "react-router-dom";
import useLang from "../hooks/useLang";
import useViewport from "../hooks/useViewport";
import { routesConfig } from "../router/routesConfig";

export default function GlobalContextProvider({ children }) {
  // prendi la lingua dal path
  const lang = useLang();
  const it = lang === "it";
  const eng = lang === "eng";
  // salva la variazione di viewport
  const { isMobile, isTablet } = useViewport();

  // salva la location
  const location = useLocation();
  const isHome = location.pathname == "/it/" || location.pathname == "/eng/";
  const isFormPage =
    location.pathname == "/it/form" || location.pathname == "/eng/form";
  const isPolicyPage =
    location.pathname == "/it/privacy-policy" ||
    location.pathname == "/eng/privacy-policy" ||
    location.pathname == "/it/cookie-policy" ||
    location.pathname == "/eng/cookie-policy";
  const isNotFound = !matchRoutes(routesConfig, location.pathname);

  return (
    <GlobalContext.Provider
      value={{
        lang,
        it,
        eng,
        isMobile,
        isTablet,
        isHome,
        isFormPage,
        isNotFound,
        isPolicyPage,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
