import Button from "../components/visual/Button";
import Image from "../components/visual/Image";

export default function SectionVariant({
  style = "",
  data,
  it,
  linkType = "internal",
  isDark = false,
  isMask = false,
  isRounded,
  mobileLayout = "image-button",
  desktopLayout = "text-right",
}) {
  // ---------------- MOBILE ----------------
  const renderMobile = () => {
    switch (mobileLayout) {
      // IMAGE & BUTTON
      case "image-button":
        return (
          <>
            <div className="lg:hidden">
              {/* Foto con bottone */}
              <div className="relative flex justify-center mt-4">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                  />
                ))}
                <Button
                  data={data.buttonData}
                  it={it}
                  isDark={true}
                  isAbsolute={true}
                  linkType={linkType}
                />
              </div>
            </div>
          </>
        );

      //TEXT, IMAGE & BUTTON
      case "text-image-button":
        return (
          <div className="lg:hidden">
            {/* layout con testo */}
            <p className="text-sm text-center mt-1">
              {it ? data.line1.mobile.it : data.line1.mobile.eng}
            </p>
            <p className="text-md text-center">
              {it ? data.line2.mobile.it : data.line2.mobile.eng}
            </p>

            <div className="relative flex justify-center mt-4">
              {data.images.map((img) => (
                <Image
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  listSize={data.images.length}
                  isMask={isMask}
                />
              ))}

              <Button
                data={data.buttonData}
                it={it}
                isDark={true}
                isAbsolute={true}
                linkType={linkType}
              />
            </div>
          </div>
        );
    }
  };
  // ---------------- DESKTOP ----------------
  const renderDesktop = () => {
    switch (desktopLayout) {
      case "text-right":
        return (
          <>
            {/* DESKTOP */}
            <div className="hidden lg:flex items-center gap-6 px-4 my-4">
              <div className="flex-[0.60] my-4 flex gap-6">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                    isRounded={isRounded}
                  />
                ))}
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
                  linkType={linkType}
                />
              </div>
            </div>
          </>
        );
      case "text-left":
        return (
          <>
            {/* DESKTOP */}
            <div className="hidden lg:flex items-center gap-6 px-4 my-4">
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
                  linkType={linkType}
                />
              </div>
              {/* immagine */}
              <div className="flex-[0.60] my-4 flex gap-6 justify-end">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                    isRounded={isRounded}
                    maxHeightImg={maxHeightImg}
                  />
                ))}
              </div>
            </div>
          </>
        );
      case "text-left-logo":
        return (
          <>
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
                  linkType={linkType}
                />
              </div>
              {/* immagine */}
              <div className="flex-[0.50] my-4 flex gap-6 justify-center">
                {data.images.map((img) => (
                  <div className="w-64">
                    <Image
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      listSize={data.images.length}
                      isMask={isMask}
                      isRounded={isRounded}
                      maxHeigth={maxHeigth}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        );

      case "text-left-right":
        return (
          <>
            <div className="hidden lg:flex items-center gap-6 px-4 my-4">
              {/* immagine */}
              <div className="flex-[0.50] my-4 flex gap-6 justify-center">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                    isRounded={isRounded}
                  />
                ))}
              </div>
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
                  linkType={linkType}
                />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <section
      className={`${
        isDark ? "bg-brand-pink text-off-white" : "bg-off-white text-bordeaux"
      } ${style}`}
    >
      {renderMobile()}
      {renderDesktop()}
    </section>
  );
}
