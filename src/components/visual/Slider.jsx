import { Swiper, SwiperSlide } from "swiper/react";
import {
	EffectCoverflow,
	Autoplay,
	Pagination,
	Navigation,
	Thumbs,
	FreeMode,
	A11y,
	Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import arrow from "../../assets/svg/arrow.svg";
import { useState, useContext, useId } from "react";
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
	const sliderId = useId().replace(/:/g, "");
	const [mainSwiper, setMainSwiper] = useState(null);
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
			? { delay: 2000, disableOnInteraction: true, pauseOnMouseEnter: true }
			: false;

	const navigationConfig =
		isMobile && isNavigation
			? { nextEl: `.next-btn-${sliderId}`, prevEl: `.prev-btn-${sliderId}` }
			: false;

	const paginationConfig =
		isMobile && isPagination
			? { clickable: true, dynamicBullets: false }
			: false;

	const spaceBetween = isMobile ? 0 : 36;
	const showPhoto = (idx) => {
		mainSwiper?.slideTo(idx);
		setActiveThumb(idx);
	};

	return (
		<section
			className={`pt-4 w-screen overflow-visible lg:block min-h-90 py-5`}
		>
			{/* MAIN SWIPER */}
			<Swiper
				onSwiper={setMainSwiper}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[
					EffectCoverflow,
					Autoplay,
					Navigation,
					Pagination,
					Thumbs,
					FreeMode,
					A11y,
					Keyboard,
				]}
				a11y={{
					enabled: true,
					prevSlideMessage: it ? "Foto precedente" : "Previous photo",
					nextSlideMessage: it ? "Foto successiva" : "Next photo",
					firstSlideMessage: it ? "Questa e' la prima foto" : "This is the first photo",
					lastSlideMessage: it ? "Questa e' l'ultima foto" : "This is the last photo",
					paginationBulletMessage: it
						? "Vai alla foto {{index}}"
						: "Go to photo {{index}}",
				}}
				keyboard={{ enabled: true, onlyInViewport: true }}
				effect="coverflow"
				grabCursor
				centeredSlides={false}
				loop={false}
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
						<button
							type="button"
							className="relative block w-full h-full overflow-hidden border-0 bg-transparent p-0 text-left"
							aria-label={
								it
									? `Mostra foto ${idx + 1}: ${photo.alt.it}`
									: `Show photo ${idx + 1}: ${photo.alt.eng}`
							}
							onFocus={() => showPhoto(idx)}
							onClick={() => showPhoto(idx)}
						>
							{/* Placeholder shimmer */}
							{!loaded[idx] && (
								<div className="absolute inset-0 bg-brand-pink animate-pulse z-20 rounded-2xl" />
							)}

							<img
								src={photo.slideSrc || photo.src}
								alt={it ? photo.alt.it : photo.alt.eng}
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
						</button>
					</SwiperSlide>
				))}

				{/* Navigation frecce */}
				{isMobile && !isOrginalSize && (
					<>
						<button
							type="button"
							className={`prev-btn-${sliderId} absolute left-4 top-1/2 -translate-y-1/2 z-50 rounded-full border-0 bg-transparent p-2 text-3xl`}
							aria-label={it ? "Foto precedente" : "Previous photo"}
						>
							<img
								src={arrow}
								className="rotate-90 size-6 cursor-pointer"
								alt=""
								aria-hidden="true"
							/>
						</button>
						<button
							type="button"
							className={`next-btn-${sliderId} absolute right-4 top-1/2 -translate-y-1/2 z-50 border-0 bg-transparent text-3xl`}
							aria-label={it ? "Foto successiva" : "Next photo"}
						>
							<img
								src={arrow}
								className="-rotate-90 size-6 cursor-pointer"
								alt=""
								aria-hidden="true"
							/>
						</button>
					</>
				)}
			</Swiper>

			{/* THUMBS */}
			{showThumbs && (
				<div aria-hidden="true">
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
										src={photo.thumbSrc || photo.slideSrc || photo.src}
										alt=""
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
				</div>
			)}
		</section>
	);
}
