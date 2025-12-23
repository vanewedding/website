export default function Title({
  text = "",
  colorBg,
  colorTxt,
  textSize,
  isWrap = false,
  isLogo = false,
  logo = "",
  customBoxStyle = "",
}) {
  return (
    <div className={`flex justify-center items-center ${textSize} `}>
      <div className={`h-0.5 w-full ${colorBg}`} />
      {isLogo ? (
        <div className={`px-2 flex items-center ${customBoxStyle}`}>
          <img src={logo.src} alt={logo.alt} className="w-full" />
        </div>
      ) : (
        <h3
          className={`${colorTxt} w-auto ${
            isWrap ? "" : " whitespace-pre"
          } px-2 text-center self-center`}
        >
          {text}
        </h3>
      )}

      <div className={`h-0.5 w-full ${colorBg}`} />
    </div>
  );
}
