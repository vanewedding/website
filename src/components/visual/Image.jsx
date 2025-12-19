export default function Image({
  src,
  alt,
  listSize = 1,
  isMask,
  isRounded = true,
  customStyleImg = "",
  isDesktopOverlay = false,
  isDesktopMask = false,
}) {
  return (
    <div className={`${listSize == 1 ? "w-full" : "w-64"}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover brightness-50 ${
          isDesktopOverlay ? "lg:brightness-50" : "lg:brightness-100"
        }
            ${isMask && "mask-t-from-50%"}
            ${isDesktopMask ? "" : "lg:mask-none"}
            ${isRounded && "lg:rounded-lg lg:shadow-lg"}
            ${customStyleImg}
            `}
      />
    </div>
  );
}
