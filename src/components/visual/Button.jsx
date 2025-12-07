import { Link } from "react-router-dom";

export default function Button({
  data,
  it,
  isDark,
  isAbsolute,
  linkType = "internal",
}) {
  const Tag = linkType === "internal" ? Link : "a";

  const darkTheme =
    "backdrop-blur-sm text-off-white border-off-white hover:backdrop-blur-lg hover:bg-off-white hover:text-brand-pink active:bg-off-white active:text-brand-pink";

  const lightTheme =
    "bg-off-white text-bordeaux border-bordeaux hover:bg-none hover:text-brand-pink hover:border-brand-pink active:text-brand-pink active:border-brand-pink";

  const commonClasses = `
    max-w-60 min-w-32 m-auto p-3 rounded-lg text-center font-semibold 
    text-xs sm:text-sm border-2 transition-all duration-500
    ${isAbsolute ? "absolute top-1/2 -translate-y-1/2" : "shadow-md"}
    ${isDark ? darkTheme : lightTheme}
  `;

  const text = it ? data.it : data.eng;

  const props =
    linkType === "internal"
      ? { to: it ? `/it${data.url}` : `/eng${data.url}` }
      : {
          href: data.url,
          target: "_blank",
          rel: "noopener noreferrer",
        };

  return (
    <Tag {...props} className={commonClasses}>
      {text}
    </Tag>
  );
}
