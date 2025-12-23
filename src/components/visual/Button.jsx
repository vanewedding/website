import { Link } from "react-router-dom";
import { LINK_TYPE } from "../../constants/enum";

export default function Button({
  data,
  it,
  isDark = true,
  isPink = false,
  isAbsolute = false,

  variant = "link", // link | switch
  value,
  isActive = false,
  onSelect,
  children,
}) {
  // temi base
  const darkTheme = isPink
    ? "backdrop-blur-sm text-brand-pink border-brand-pink"
    : "backdrop-blur-sm text-off-white border-off-white";

  const lightTheme = "bg-off-white text-bordeaux border-bordeaux";

  // stato attivo ha priorità
  const activeClass = isActive
    ? "bg-brand-pink text-off-white border-brand-pink"
    : isDark
    ? darkTheme
    : lightTheme;

  const commonClasses = `
    max-w-60 min-w-32 m-auto p-3 rounded-lg text-center font-semibold 
    text-xs sm:text-sm border-2 transition-all duration-300 cursor-pointer
    ${isAbsolute ? "absolute top-1/2 -translate-y-1/2" : "shadow-md"}
    ${activeClass}
  `;

  // variante switch (per selezione valori form)
  if (variant === "switch") {
    return (
      <div className={commonClasses} onClick={() => onSelect?.(value)}>
        {children}
      </div>
    );
  }

  // variante link
  if (!data) return null;

  const Tag = data.linkType === LINK_TYPE.EXTERNAL ? "a" : Link;
  const text = it ? data.it : data.eng;

  const propsMap = {
    [LINK_TYPE.SLUG]: { to: data.url },
    [LINK_TYPE.FULL]: { to: it ? `/it${data.url}` : `/eng${data.url}` },
    [LINK_TYPE.EXTERNAL]: {
      href: data.url,
      target: "_blank",
      rel: "noopener noreferrer",
    },
  };

  return (
    <Tag {...propsMap[data.linkType]} className={commonClasses}>
      {text}
    </Tag>
  );
}
