import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Slider({ photos }) {
	return (
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
	);
}
