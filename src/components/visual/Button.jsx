import { Link } from "react-router-dom";
import { LINK_TYPE } from "../../constants/enum";

export default function Button({
  data,
  it,
  isDark = true,
  isPink = false,
  isAbsolute = false,
}) {
  const Tag = data.linkType === LINK_TYPE.EXTERNAL ? "a" : Link;

  // temi
  const darkTheme = isPink
    ? "backdrop-blur-sm text-brand-pink border-brand-pink hover:backdrop-blur-lg hover:backdrop-blur-xl active:backdrop-blur-2xl"
    : "backdrop-blur-sm text-off-white border-off-white hover:backdrop-blur-lg hover:bg-off-white hover:text-brand-pink active:bg-off-white active:text-brand-pink";

  const lightTheme = isPink
    ? "bg-off-white text-bordeaux border-bordeaux hover:bg-none hover:text-brand-pink hover:border-brand-pink active:text-brand-pink active:border-brand-pink"
    : "bg-off-white text-bordeaux border-bordeaux hover:bg-none hover:text-brand-pink hover:border-brand-pink active:text-brand-pink active:border-brand-pink";

  const commonClasses = `
    max-w-60 min-w-32 m-auto p-3 rounded-lg text-center font-semibold 
    text-xs sm:text-sm border-2 transition-all duration-500
    ${isAbsolute ? "absolute top-1/2 -translate-y-1/2" : "shadow-md"}
    ${isDark ? darkTheme : lightTheme}
  `;

  const text = it ? data.it : data.eng;

  // mapping dei props in base al tipo di link
  const propsMap = {
    [LINK_TYPE.SLUG]: { to: data.url },
    [LINK_TYPE.FULL]: { to: it ? `/it${data.url}` : `/eng${data.url}` },
    [LINK_TYPE.EXTERNAL]: {
      href: data.url,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  };

  const props = propsMap[data.linkType] || {};

  return (
    <Tag {...props} className={commonClasses}>
      {text}
    </Tag>
  );
}
