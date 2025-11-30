import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Slider({ photos }) {
  return (
    <section className="py-8 bg-gray-100 w-screen flex justify-center">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={-200}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000, // ogni 3 secondi
          disableOnInteraction: false, // continua anche se l'utente interagisce
        }}
        className="w-full max-w-7xl"
      >
        {photos.map((photo, idx) => (
          <SwiperSlide key={idx} className=" ">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-72 m-auto object-cover rounded-2xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
