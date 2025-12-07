import Button from "../components/visual/Button";

export default function ButtonSection({
  style,
  data,
  it,
  isInternal,
  isDark,
  isMask,
}) {
  console.log(isDark);
  return (
    <section
      className={`${
        isDark ? "bg-brand-pink text-off-white" : "bg-off-white text-bordeaux"
      } ${style}`}
    >
      {/* mobile */}
      <div className="lg:hidden">
        <p className="text-sm text-center mt-1">
          {it ? data.line1.mobile.it : data.line1.mobile.eng}
        </p>
        <p className="text-md text-center">
          {it ? data.line2.mobile.it : data.line2.mobile.eng}
        </p>

        {/* Foto con bottone */}
        <div className="relative flex justify-center mt-4">
          <img
            src={data.image}
            className={`w-full max-h-48 object-cover brightness-50  ${
              isMask ? "mask-t-from-50%" : ""
            }
            `}
          />
          <Button
            data={data.buttonData}
            it={it}
            isDark={true}
            isAbsolute={true}
          />
        </div>
      </div>
      {/* DESKTOP */}
      <div className="hidden lg:flex items-center gap-6 px-4 my-4">
        {/* immagine */}
        <div className="flex-[0.60] my-4">
          <img
            src={data.image}
            className=" w-full max-h-64 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* testuale */}
        <div className="flex-[0.40] flex flex-col text-center m-auto">
          <p className="text-lg">
            {it ? data.line1.desktop.it : data.line1.desktop.eng}
          </p>
          <p className="text-sm  m-5 whitespace-pre-line">
            {it ? data.line2.desktop.it : data.line2.desktop.eng}
          </p>
          <Button
            data={data.buttonData}
            it={it}
            isDark={isDark}
            isInternal={isInternal}
          />
        </div>
      </div>
    </section>
  );
}
