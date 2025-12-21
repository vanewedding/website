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
}) {
	const initialSlideConfig = activePicture - 1;
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const autoplayConfig =
		isMobile && isAutoplay
			? {
					delay: 2000,
					disableOnInteraction: false,
			  }
			: false;
	const navigationConfig =
		isMobile && isNavigation
			? {
					nextEl: ".next-btn",
					prevEl: ".prev-btn",
			  }
			: false;
	const paginationConfig =
		isMobile && isPagination
			? {
					clickable: true,
					dynamicBullets: false,
			  }
			: false;
	const spaceBetween = isMobile ? 0 : 36;
	return (
		<>
			<section className="pt-4 w-screen overflow-visible lg:block">
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
					initialSlide={initialSlideConfig}
					navigation={navigationConfig}
					pagination={paginationConfig}
					speed={2000} // velocità della transizione
					className={`
            relative              
            ${isMobile ? "w-screen h-[75vh] " : "w-full mask-x-from-90%"}
            ${isMaskTop ? "mask-t-from-80%" : false}
            `}
				>
					{photos.map((photo, idx) => (
						<SwiperSlide key={idx}>
							<div className="h-full items-center">
								<img
									src={photo.src}
									alt={photo.alt}
									className={
										isMobile
											? "h-full w-full object-cover object-[10%_90%]"
											: "my-4 object-cover rounded-2xl shadow-md shadow-bordeaux/60"
									}
								/>
							</div>
						</SwiperSlide>
					))}
					{/* BOTTONI CUSTOM */}

					{isMobile && (
						<>
							<div className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-50 text-3xl ">
								<img
									src={arrow}
									className="rotate-90 size-6 cursor-pointer"
								></img>
							</div>
							<div className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-50 text-3xl">
								<img
									src={arrow}
									className="-rotate-90 size-6 cursor-pointer"
								></img>
							</div>
						</>
					)}
				</Swiper>

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
										className="w-full h-full object-cover object-center"
									/>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				)}
			</section>
		</>
	);
}
