export default function Image({
  src,
  alt,
  listSize = 1,
  isMask,
  isRounded = true,
  customStyleImg = "",
  customStyleBox = "",
  isMobileOverlay = true,
  isDesktopOverlay = false,
  isDesktopMask = false,
  isDesktopRounded = false,
  isMobileRounded = false,
  isShadowed = false,
}) {
  return (
    <div
      className={`
    ${listSize == 1 ? "w-full" : "w-64"}
    ${customStyleBox}
    `}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover
            ${isDesktopOverlay ? "lg:brightness-50" : "lg:brightness-100"}
            ${isMobileOverlay ? "brightness-50" : "brightness-100"}
            ${isMask && "mask-t-from-50%"}
            ${isDesktopMask ? "" : "lg:mask-none"}
            ${isDesktopRounded && "lg:rounded-lg lg:shadow-lg"}
            ${isMobileRounded && "rounded-lg shadow-lg"}
            ${isShadowed && "shadow-md shadow-bordeaux/60"}
            ${customStyleImg}
            `}
      />
    </div>
  );
}
