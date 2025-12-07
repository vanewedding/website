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
      <div className="lg:hidden px-4">
        {/*  immagine pro pic*/}
        <div className="flex justify-center my-6">
          <img
            src={data.imgPropic.src}
            alt={data.imgPropic.alt}
            className="size-64 rounded-full  border-brand-pink border-2 shadow-sm shadow-brand-pink"
          />
        </div>

        <h3 className="text-center my-3">
          {it ? data.line1.mobile.it : data.line1.mobile.eng}
        </h3>

        <p className="text-md text-center">
          {it ? data.line2.mobile.it : data.line2.mobile.eng}
        </p>

        <div className="flex flex-col items-center gap-3 my-8">
          {data.logos.map((logo) => (
            <div className="w-36">
              <img
                key={logo.id}
                src={logo.src}
                alt={logo.alt}
                className="w-full "
              />
            </div>
          ))}
          <Button
            data={data.buttonData}
            it={it}
            isDark={false}
            isAbsolute={false}
            isInternal={true}
          />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex items-center gap-6 px-4 my-4">
        {/* testuale */}
        <div className="flex-[0.50] flex flex-col text-center m-auto px-10">
          <p className="text-lg">
            {it ? data.line1.desktop.it : data.line1.desktop.eng}
          </p>
          <p className="text-sm  m-5 whitespace-pre-line">
            {it ? data.line2.desktop.it : data.line2.desktop.eng}
          </p>
          {/* box loghi */}
          <div className="flex justify-center gap-12 mt-2 mb-6">
            {data.logos.map((logo) => (
              <div className="w-32">
                <img
                  key={logo.id}
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full "
                />
              </div>
            ))}
          </div>

          <Button
            data={data.buttonData}
            it={it}
            isDark={isDark}
            isInternal={isInternal}
          />
        </div>
        {/* immagine */}
        <div className="flex-[0.50] my-4 flex gap-6 justify-center">
          {data.images.map((img) => (
            <div className="w-64">
              <img
                key={img.id}
                src={img.src}
                alt={img.alt}
                className="w-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
