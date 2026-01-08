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
  isFastLoad = false,
}) {
  const [loaded, setLoaded] = useState(false);

  const isLCP = isFastLoad;

  return (
    <div
      className={`
        relative overflow-hidden
        ${listSize === 1 ? "w-full" : "w-64"}
        ${customStyleBox}
      `}
    >
      {/* placeholder SOLO per immagini non-LCP */}
      {!loaded && !isLCP && (
        <div className="absolute inset-0 bg-brand-pink animate-pulse" />
      )}

      <img
        src={src}
        alt={alt}
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`
        
          w-full object-cover
          ${!isLCP && "transition-opacity duration-700"}
          ${isLCP || loaded ? "opacity-100" : "opacity-0"}
          ${isDesktopOverlay ? "lg:brightness-50" : "lg:brightness-100"}
          ${isMobileOverlay ? "brightness-50" : "brightness-100"}
          ${isMask && "mask-t-from-50%"}
          ${isDesktopMask ? "" : "lg:mask-none"}
          ${isDesktopRounded && "lg:rounded-lg lg:shadow-lg"}
          ${isMobileRounded && "rounded-lg shadow-lg"}
          ${isShadowed && "shadow-md shadow-bordeaux/60"}
          ${customStyleImg}
        `}
        {...(isLCP ? { fetchPriority: "high" } : { loading: "lazy" })}
      />
    </div>
  );
}
