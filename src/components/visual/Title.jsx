export default function Title({ text, colorBg, colorTxt }) {
  return (
    <div className="flex justify-center items-center">
      <div className={`h-0.5 w-full ${colorBg}`} />
      <h3
        className={`${colorTxt} w-auto whitespace-nowrap px-2 text-center self-center`}
      >
        {text}
      </h3>
      <div className={`h-0.5 w-full ${colorBg}`} />
    </div>
  );
}
