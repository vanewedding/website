// import Context
import GlobalContext from "./GlobalContext";

// import hooks
import { useLocation, matchRoutes } from "react-router-dom";
import useLang from "../hooks/useLang";
import useViewport from "../hooks/useViewport";
import { useEffect, useState } from "react";
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
  console.log(useLocation().pathname);
  const [isHome, setIsHome] = useState(false);
  const [isFormPage, setIsFormPage] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    setIsHome(location.pathname == "/it/" || location.pathname == "/eng/");
  }, [location.pathname]);
  useEffect(() => {
    setIsFormPage(
      location.pathname == "/it/form" || location.pathname == "/eng/form"
    );
  }, [location.pathname]);

  useEffect(() => {
    const matches = matchRoutes(routesConfig, location.pathname);
    setIsNotFound(!matches);
  }, [location.pathname]);

  useEffect(() => {
    console.log("isHome: ", isHome);
  }, [isHome]);

  useEffect(() => {
    console.log("isNotFound: ", isNotFound);
  }, [isNotFound]);

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
