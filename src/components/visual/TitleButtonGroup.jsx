import Button from "./Button";
import Title from "./Title";

export default function TitleButtonGroup({
  title,
  buttonData,
  it,
  isDark,
  isPink = false,
  isWrap = true,
  textSize = "text-4xl",
}) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-6">
      <Title
        text={title}
        textSize={textSize}
        colorTxt={isPink ? "text-brand-pink" : "text-off-white"}
        isWrap={isWrap}
      />
      <Button
        data={buttonData}
        it={it}
        isDark={isDark}
        isPink={isPink}
        isAbsolute={false}
      />
    </div>
  );
}
