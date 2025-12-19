// import Context
import GlobalContext from "./GlobalContext";

// import hooks
import { useLocation } from "react-router-dom";
import useLang from "../hooks/useLang";
import useViewport from "../hooks/useViewport";
import { use, useEffect, useState } from "react";

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

  useEffect(() => {
    setIsHome(location.pathname == "/it/" || location.pathname == "/eng/");
  }, [location]);

  useEffect(() => {
    console.log(isHome);
  }, [isHome]);

  return (
    <GlobalContext.Provider
      value={{ lang, it, eng, isMobile, isTablet, isHome }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
