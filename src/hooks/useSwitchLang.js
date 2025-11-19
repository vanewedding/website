import { useLocation, useNavigate } from "react-router-dom";

export const useSwitchLang = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const switchLang = (targetLang) => {
    let newPath = location.pathname.replace(/^\/(it|eng)/, `/${targetLang}`);

    if (location.pathname === "/") {
      newPath = targetLang === "it" ? "/it/" : "/eng/";
    }

    navigate(newPath);
  };

  return switchLang;
};
