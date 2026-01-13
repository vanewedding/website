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
import { useState, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import { useState, useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

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
	const { it } = useContext(GlobalContext);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeThumb, setActiveThumb] = useState(activePicture);

	// Stato per gestire il caricamento delle immagini
	const [loaded, setLoaded] = useState(Array(photos.length).fill(false));

	const handleLoad = (idx) => {
		setLoaded((prev) => {
			const copy = [...prev];
			copy[idx] = true;
			return copy;
		});
	};

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

	return (
		<section
			className={`pt-4 w-screen overflow-visible lg:block min-h-90 py-5`}
		>
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
				grabCursor
				centeredSlides={false}
				loop
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
				speed={customSpeed}
				onSlideChange={(swiper) => setActiveThumb(swiper.realIndex)}
				className={`mx-4 relative ${
					isOrginalSize ? "" : "h-full"
				} ${customStyleBox} ${isMaskTop ? "mask-t-from-80%" : ""} ${
					isMaskHorizontal ? "mask-x-from-90%" : ""
				}`}
			>
				{photos.map((photo, idx) => (
					<SwiperSlide key={idx}>
						<div className="relative w-full h-full overflow-hidden">
							{/* Placeholder shimmer */}
							{!loaded[idx] && (
								<div className="absolute inset-0 bg-brand-pink animate-pulse z-20 rounded-2xl" />
							)}

							<img
								src={photo.src}
								alt={photo.alt}
								loading="lazy"
								onLoad={() => handleLoad(idx)}
								className={`w-full h-full transition-opacity duration-700 ease-in-out ${
									loaded[idx] ? "opacity-100" : "opacity-0"
								} ${
									isOrginalSize
										? "object-contain object-center m-auto"
										: "object-cover"
								} ${
									isMobile
										? "object-[10%_90%]"
										: "my-4 rounded-2xl shadow-md shadow-bordeaux/60"
								}`}
							/>
						</div>
					</SwiperSlide>
				))}

				{/* Navigation frecce */}
				{isMobile && !isOrginalSize && (
					<>
						<div className="prev-btn absolute left-4 top-1/2 -translate-y-1/2 z-50 text-3xl rounded-full p-2">
							<img
								src={arrow}
								className="rotate-90 size-6 cursor-pointer"
								alt={it ? "Freccia indietro" : "Back arrow"}
							/>
						</div>
						<div className="next-btn absolute right-4 top-1/2 -translate-y-1/2 z-50 text-3xl">
							<img
								src={arrow}
								className="-rotate-90 size-6 cursor-pointer"
								alt={it ? "Freccia avanti" : "Forward arrow"}
							/>
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
					freeMode
					watchSlidesProgress
					className="mt-2 mask-x-from-90%"
				>
					{photos.map((photo, idx) => (
						<SwiperSlide key={idx}>
							<div className="relative h-20 w-full overflow-hidden">
								{/* Placeholder anche nei thumbs */}
								{!loaded[idx] && (
									<div className="absolute inset-0 bg-brand-pink animate-pulse z-20 rounded-lg" />
								)}
								<img
									src={photo.src}
									alt={photo.alt}
									loading="lazy"
									className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
										loaded[idx] ? "opacity-100" : "opacity-0"
									} ${
										idx === activeThumb ? "brightness-100" : "brightness-50"
									}`}
									onLoad={() => handleLoad(idx)}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</section>
	);
}
