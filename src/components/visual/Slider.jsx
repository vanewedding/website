import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
  Thumbs,
  FreeMode,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import arrow from "../../assets/svg/arrow.svg";
import { useState } from "react";

export default function Slider({
  photos,
  isAutoplay = false,
  isNavigation = false,
  isPagination = false,
  isMobile = false,
  showThumbs = false,
  isSingleSlide = false,
  activePicture = 0,
  isMaskTop = true,
  isMaskHorizontal = true,
  isOrginalSize = false,
  customStyleBox = "h-[75vh]",
  customSpeed = 2000,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeThumb, setActiveThumb] = useState(activePicture);

  const autoplayConfig =
    isMobile && isAutoplay
      ? { delay: 2000, disableOnInteraction: false }
      : false;

  const navigationConfig =
    isMobile && isNavigation
      ? { nextEl: ".next-btn", prevEl: ".prev-btn" }
      : false;

  const paginationConfig =
    isMobile && isPagination
      ? { clickable: true, dynamicBullets: false }
      : false;

  const spaceBetween = isMobile ? 0 : 36;
  const speedConfig = customSpeed;

  return (
    <section className="pt-4 w-screen overflow-visible lg:block min-h-90 py-5">
      {/* MAIN SWIPER */}
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        modules={[
          EffectCoverflow,
          Autoplay,
          Navigation,
          Pagination,
          Thumbs,
          FreeMode,
        ]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        initialSlide={activePicture}
        breakpoints={
          isSingleSlide
            ? {
                1280: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                566: { slidesPerView: 1 },
              }
            : {
                1280: { slidesPerView: 5 },
                1024: { slidesPerView: 5 },
                768: { slidesPerView: 3 },
                566: { slidesPerView: 3 },
              }
        }
        slidesPerView={1}
        spaceBetween={spaceBetween}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          slideShadows: false,
        }}
        autoplay={autoplayConfig}
        navigation={navigationConfig}
        pagination={paginationConfig}
        speed={speedConfig}
        onSlideChange={(swiper) => setActiveThumb(swiper.realIndex)} // qui aggiorniamo l'activeThumb
        className={`mx-4
          h-full
          relative         
          ${isMobile ? "w-full" : "w-full "} 
          ${isMaskTop ? "mask-t-from-80%" : ""}
		  ${isMaskHorizontal ? "mask-x-from-90%" : ""}
		  ${customStyleBox}
		 
        `} // rimosso w-screen
      >
        {photos.map((photo, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full ">
              <img
                src={photo.src}
                alt={photo.alt}
                className={`
				${isOrginalSize ? "object-contain object-center" : "object-cover"}
                  ${
                    isMobile
                      ? "h-full w-full object-[10%_90%]"
                      : "my-4 rounded-2xl shadow-md shadow-bordeaux/60"
                  }`}
              />
            </div>
          </SwiperSlide>
        ))}

        {isMobile && !isOrginalSize && (
          <>
            <div className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-50 text-3xl rounded-full p-2 ">
              <img src={arrow} className="rotate-90 size-6 cursor-pointer" />
            </div>
            <div className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-50 text-3xl">
              <img src={arrow} className="-rotate-90 size-6 cursor-pointer" />
            </div>
          </>
        )}
      </Swiper>

      {/* THUMBS */}
      {showThumbs && (
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Navigation, Thumbs, FreeMode]}
          spaceBetween={5}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          className="mt-2 mask-x-from-90%"
        >
          {photos.map((photo, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-20 cursor-pointer">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className={`w-full h-full object-cover object-center transition-all duration-300 ${
                    idx === activeThumb ? "brightness-100" : "brightness-50"
                  }`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
