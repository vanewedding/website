export default function Image({
  src,
  alt,
  listSize = 1,
  isMask,
  isRounded = true,
  // maxHeigth = "",
}) {
  // const maxHeigth = maxHeigth !== "" ? `max-h-${maxHeigth}` : "";
  return (
    <div className={`${listSize == 1 ? "w-full" : "w-64"}`}>
      <img
        src={src}
        alt={alt}
        className={`w-full object-cover max-h-100 brightness-50 lg:brightness-100 
            // ${maxHeigth}
            ${isMask && "mask-t-from-50% lg:mask-none"}
            ${isRounded && "lg:rounded-lg lg:shadow-lg"}
            `}
      />
    </div>
  );
}
