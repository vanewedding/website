import Button from "./Button";
import TitleButtonGroup from "./TitleButtonGroup";
import Image from "./Image";
import { Link } from "react-router-dom";
import Title from "./Title";
import Slider from "./Slider";

export default function VariantComposer({
  style = "",
  data,
  it,
  isWrap,
  isDesktopMask,
  isDark = false,
  isMask = false,
  isPink = false,
  isMobileOverlay = false,
  isDesktopOverlay = true,
  isMobileRounded = true,
  isDesktopRounded = true,
  mobileLayout = "image-button",
  desktopLayout = "text-right",
  customStyleImg,
  customStyleBox,
  hasButton = true,
  hasLine2 = true,
  isShadowed = false,
  isMargin = true,
  textSize,
}) {
  console.log(data);
  // ---------------- MOBILE ----------------
  const renderMobile = () => {
    switch (mobileLayout) {
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
                    customStyleImg={customStyleImg}
                    isMobileRounded={isMobileRounded}
                    isMobileOverlay={isMobileOverlay}
                  />
                ))}
                <Button
                  data={data.buttonData}
                  it={it}
                  isPink={isPink}
                  isDark={isDark}
                  isAbsolute={true}
                />
              </div>
            </div>
          </>
        );
      case "title-image-button":
        return (
          <>
            <div className="lg:hidden">
              {/* Foto con bottone */}
              <div className="relative flex justify-center">
                {data.images.map((img) => (
                  <>
                    <Image
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      listSize={data.images.length}
                      isMask={isMask}
                      customStyleImg={customStyleImg}
                      customStyleBox={customStyleBox}
                      isMobileOverlay={isMobileOverlay}
                    />
                  </>
                ))}
                {/* box title & button */}
                <TitleButtonGroup
                  title={it ? data.line1.mobile.it : data.line1.mobile.eng}
                  buttonData={data.buttonData}
                  it={it}
                  isPink={isPink}
                  isWrap={isWrap}
                  textSize={textSize}
                />
              </div>
            </div>
          </>
        );
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
                  customStyleImg={customStyleImg}
                />
              ))}

              <Button
                data={data.buttonData}
                it={it}
                isDark={true}
                isAbsolute={true}
              />
            </div>
          </div>
        );
      case "propic-layout":
        return (
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
                <div className="w-[90%]">
                  <a
                    key={logo.id}
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <img src={logo.src} alt={logo.alt} className="w-full" />
                  </a>
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
        );
      case "logo-title-image":
        return (
          <>
            {/* MOBILE */}
            <div className="relative block lg:hidden">
              <div>
                {/* immagine */}
                <div className=" flex justify-end">
                  {data.images.map((img) => (
                    <Image
                      key={img.id}
                      src={img.src}
                      alt={img.alt}
                      listSize={data.images.length}
                      isMask={isMask}
                      isMobileRounded={isMobileRounded}
                      customStyleImg={customStyleImg}
                      isDesktopOverlay={true}
                      isDesktopMask={isDesktopMask}
                    />
                  ))}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap gap-6 items-center justify-center">
                  <div className="w-20">
                    <img
                      className="w-full"
                      src={data.logoVane.src}
                      alt={data.logoVane.alt}
                    ></img>
                  </div>
                  <Title
                    text={it ? data.line1.mobile.it : data.line1.mobile.eng}
                    textSize={"text-4xl"}
                    colorTxt={isPink ? "text-brand-pink" : "text-off-white"}
                    isWrap={false}
                  />
                </div>
              </div>
              <p className="mt-6 w-auto px-6 text-center self-center text-bordeaux">
                {it ? data.line2.mobile.it : data.line2.mobile.eng}
              </p>
            </div>
          </>
        );
      case "slider":
        return (
          <div className="lg:hidden py-6">
            <Slider
              photos={data.images}
              isMobile={true}
              isAutoplay={false}
              isNavigation={true}
              isPagination={true}
              showThumbs={false}
            />
            <p className="mt-6 w-auto px-6 text-center self-center text-bordeaux">
              {it ? data.line1.mobile.it : data.line1.mobile.eng}
            </p>
          </div>
        );
    }
  };
  // ---------------- DESKTOP ----------------
  const renderDesktop = () => {
    switch (desktopLayout) {
      case "title-image":
        return (
          <>
            {/* DESKTOP */}
            <Link
              to={data.buttonData.url}
              className="relative hidden lg:block hover:scale-104 transition-all duration-300 ease-in-out"
            >
              {/* immagine */}
              <div className="m-3 flex gap-6 justify-end">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                    isDesktopRounded={isDesktopRounded}
                    customStyleImg={customStyleImg}
                    customStyleBox={customStyleBox}
                    isMobileOverlay={isMobileOverlay}
                    isDesktopOverlay={isDesktopOverlay}
                    isDesktopMask={isDesktopMask}
                  />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                <Title
                  text={it ? data.line1.desktop.it : data.line1.desktop.eng}
                  textSize={"text-4xl"}
                  colorTxt={isPink ? "text-brand-pink" : "text-off-white"}
                  isWrap={true}
                />
              </div>
            </Link>
          </>
        );
      case "title-image-button":
        return (
          <>
            {/* DESKTOP */}
            <div className="relative hidden lg:block">
              {/* immagine */}
              <div className="my-4 flex gap-6 justify-end">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                    isDesktopRounded={isDesktopRounded}
                    customStyleImg={customStyleImg}
                    customStyleBox={customStyleBox}
                    isDesktopOverlay={isDesktopOverlay}
                    isDesktopMask={isDesktopMask}
                    isShadowed={isShadowed}
                  />
                ))}
              </div>
              {/* box title & button */}
              <TitleButtonGroup
                title={it ? data.line1.desktop.it : data.line1.desktop.eng}
                buttonData={data.buttonData}
                it={it}
                isPink={isPink}
                isWrap={isWrap}
                isDark={isDark}
              />
            </div>
          </>
        );
      case "text-right":
        return (
          <>
            {/* DESKTOP */}
            <div
              className={`hidden lg:flex items-center gap-6 px-4 ${
                isMargin ? "my-4" : ""
              } `}
            >
              <div className="flex-[0.60] my-4 flex gap-6">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                    isDesktopRounded={isDesktopRounded}
                    customStyleImg={customStyleImg}
                    isShadowed={isShadowed}
                  />
                ))}
              </div>

              {/* testuale */}
              <div className="flex-[0.40] flex flex-col text-center m-auto">
                <p className="text-lg">
                  {it ? data.line1.desktop.it : data.line1.desktop.eng}
                </p>
                {hasLine2 && (
                  <p className="text-sm  m-5 whitespace-pre-line">
                    {it ? data.line2.desktop.it : data.line2.desktop.eng}
                  </p>
                )}
                {hasButton && (
                  <Button data={data.buttonData} it={it} isDark={isDark} />
                )}
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
                {hasLine2 && (
                  <p className="text-sm  m-5 whitespace-pre-line">
                    {it ? data.line2.desktop.it : data.line2.desktop.eng}
                  </p>
                )}
                {hasButton && (
                  <Button data={data.buttonData} it={it} isDark={isDark} />
                )}
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
                    isDesktopRounded={isDesktopRounded}
                    customStyleImg={customStyleImg}
                    isShadowed={isShadowed}
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
                    <div className="w-48">
                      <a
                        key={logo.id}
                        href={logo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        <img src={logo.src} alt={logo.alt} className="w-full" />
                      </a>
                    </div>
                  ))}
                </div>

                <Button data={data.buttonData} it={it} isDark={isDark} />
              </div>
              {/* immagine */}
              <div className="flex-[0.50] my-4 flex gap-6 justify-center">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                    isShadowed={isShadowed}
                    isDesktopRounded={isDesktopRounded}
                    isMobileRounded={isMobileRounded}
                    customStyleImg={customStyleImg}
                  />
                ))}
              </div>
            </div>
          </>
        );
      case "logo-title-image":
        return (
          <>
            {/* DESKTOP */}
            <div className="relative hidden lg:block">
              {/* immagine */}
              <div className="flex gap-6 justify-end">
                {data.images.map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    listSize={data.images.length}
                    isMask={isMask}
                    isDesktopRounded={isDesktopRounded}
                    customStyleImg={customStyleImg}
                    customStyleBox={customStyleBox}
                    isDesktopOverlay={true}
                    isDesktopMask={isDesktopMask}
                  />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="m-auto mb-12 w-48">
                  <img
                    className="w-full"
                    src={data.logoVane.src}
                    alt={data.logoVane.alt}
                  ></img>
                </div>
                <Title
                  text={it ? data.line1.desktop.it : data.line1.desktop.eng}
                  textSize={"text-5xl"}
                  colorTxt={isPink ? "text-brand-pink" : "text-off-white"}
                  isWrap={false}
                />
                <h3 className="mt-6 w-auto px-2 text-center self-center text-off-white">
                  {it ? data.line2.desktop.it : data.line2.desktop.eng}
                </h3>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div
      className={`${
        isDark ? "bg-brand-pink text-off-white" : "bg-off-white text-bordeaux"
      } ${style}`}
    >
      {renderMobile()}
      {renderDesktop()}
    </div>
  );
}
