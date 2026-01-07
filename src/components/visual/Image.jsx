import { useState } from "react";

export default function Image({
  src,
  alt,
  listSize = 1,
  isMask,
  customStyleImg = "",
  customStyleBox = "",
  isMobileOverlay = true,
  isDesktopOverlay = false,
  isDesktopMask = false,
  isDesktopRounded = false,
  isMobileRounded = false,
  isShadowed = false,
  isFastLoad = false, // indica se l'immagine deve essere LCP
}) {
  const [loaded, setLoaded] = useState(isFastLoad); // se fast load, parte già caricata

  return (
    <div
      className={`
        relative overflow-hidden
        ${listSize === 1 ? "w-full" : "w-64"}
        ${customStyleBox}
      `}
    >
      {/* Placeholder solo se l'immagine non è fast load e non è ancora caricata */}
      {!loaded && !isFastLoad && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}

      <img
        src={src}
        alt={alt}
        className={`
          w-full object-cover transition-opacity duration-700 ease-in-out
          ${loaded ? "opacity-100" : "opacity-0"}
          ${isDesktopOverlay ? "lg:brightness-50" : "lg:brightness-100"}
          ${isMobileOverlay ? "brightness-50" : "brightness-100"}
          ${isMask && "mask-t-from-50%"}
          ${isDesktopMask ? "" : "lg:mask-none"}
          ${isDesktopRounded && "lg:rounded-lg lg:shadow-lg"}
          ${isMobileRounded && "rounded-lg shadow-lg"}
          ${isShadowed && "shadow-md shadow-bordeaux/60"}
          ${customStyleImg}
        `}
        {...(isFastLoad
          ? { fetchPriority: "high" } // caricamento immediato
          : { loading: "lazy" })} // lazy load solo se non fast load
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
