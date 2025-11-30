import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Slider({ photos }) {
  return (
    <>
      <section className="py-8 w-screen overflow-visible hidden lg:block">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false}
          loop={true}
          slidesPerView={5}
          breakpoints={{
            1280: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
          }}
          spaceBetween={36}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000, // ogni 2 secondi
            disableOnInteraction: false, // continua anche se l'utente interagisce
          }}
          speed={2000} // velocità della transizione
          className="w-full mask-x-from-96% "
        >
          {photos.map((photo, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={photo.src}
                alt={photo.alt}
                className="my-4 object-cover rounded-2xl shadow-md shadow-bordeaux/60"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="py-8 w-screen overflow-visible block lg:hidden relative">
        <Swiper
          modules={[EffectCoverflow, Pagination, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={false}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
          }}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          speed={2000} // velocità della transizione
          className="w-[90%] h-90 mask-x-from-96% "
        >
          {photos.map((photo, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-full items-center bg-red-500">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full m-auto rounded-2xl shadow-md shadow-bordeaux/60"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTTONI CUSTOM */}
        <div className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-50 text-3xl ">
          ←
        </div>
        <div className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-50 text-3xl">
          →
        </div>
      </section>
    </>
  );
}
