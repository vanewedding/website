import { useParams } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react";
import Macy from "macy";
import Title from "../components/visual/Title";
import { albumData } from "../data/gallery";
import Image from "../components/visual/Image";
import Slider from "../components/visual/Slider";
import { RiLayoutMasonryFill, RiLayoutBottomFill } from "react-icons/ri";
import GlobalContext from "../context/GlobalContext";

export default function AlbumPage() {
	const { it, isMobile, isTablet } = useContext(GlobalContext);
	const { slug } = useParams();
	const album = albumData[slug];
	const containerRef = useRef(null);
	console.log(album);
	const defaultLayout = isMobile || isTablet ? "layoutSlider" : "layoutGrid";
	const [activeLayout, setActiveLayout] = useState(defaultLayout);
	const [activePicture, setActivePicture] = useState(1);
	const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

	console.log(activePicture);
	// inizializza Macy
	useEffect(() => {
		if (!album || !containerRef.current) return;

		const macyInstance = Macy({
			container: containerRef.current,
			trueOrder: false, // mantiene l’ordine naturale o meno
			waitForImages: true, // attende il caricamento delle immagini
			columns: 4, // default numero di colonne
			margin: 0,
			padding: 0,
			breakAt: {
				1024: 4,
				768: 3,
				480: 2,
			},
		});

		return () => macyInstance.remove(); // cleanup
	}, [album, activeLayout]);

	if (!album) return <div className="m-6">Album non trovato</div>;

	return (
		<>
			<Title
				text={it ? album.title.it : album.title.eng}
				colorBg={"bg-bordeaux"}
			/>
			<section className="mb-6">
				{/* pulsanti layout */}
				{isMobile || isTablet ? (
					<>
						{/* Layout condizionale */}
						{activeLayout === "layoutGrid" ? (
							<div ref={containerRef}>
								{album.photos.map((img) => (
									<div
										key={img.id}
										onClick={() => {
											if (activeLayout !== "layoutSlider") {
												setActiveLayout("layoutSlider");
											}
											setActivePicture(img.id);
										}}
										className="cursor-pointer"
									>
										<Image
											src={img.src}
											alt={img.alt}
											isMask={false}
											isMobileRounded={true}
											isDesktopRounded={true}
											customStyleBox="w-full p-3"
											isMobileOverlay={false}
											isDesktopOverlay={false}
											isDesktopMask={false}
											isShadowed
										/>
									</div>
								))}
							</div>
						) : (
							<Slider
								activePicture={activePicture}
								photos={album.photos}
								showThumbs={true}
								isMobile={true}
								isNavigation={true}
								isSingleSlide={true}
								isMaskTop={false}
							/>
						)}
						<div className="fixed top-32 left-0 z-20 flex gap-3 mx-4">
							{activeLayout === "layoutGrid" ? (
								<div
									className="bg-off-white/90 rounded-full p-2 text-4xl text-brand-pink cursor-pointer"
									onClick={() =>
										activeLayout !== "layoutSlider" &&
										setActiveLayout("layoutSlider")
									}
								>
									<RiLayoutBottomFill />
								</div>
							) : (
								<div
									className="bg-off-white/90  rounded-full p-2 text-4xl text-brand-pink cursor-pointer"
									onClick={() =>
										activeLayout !== "layoutGrid" &&
										setActiveLayout("layoutGrid")
									}
								>
									<RiLayoutMasonryFill />
								</div>
							)}
						</div>
					</>
				) : (
					<div ref={containerRef}>
						{album.photos.map((img) => (
							<div
								key={img.id}
								onClick={() => {
									setActivePicture(img.id);
									setIsLightBoxOpen(true);
								}}
								className="cursor-pointer"
							>
								<Image
									src={img.src}
									alt={img.alt}
									isMask={false}
									isMobileRounded={true}
									isDesktopRounded={true}
									customStyleBox="w-full p-3"
									isMobileOverlay={false}
									isDesktopOverlay={false}
									isDesktopMask={false}
									isShadowed
								/>
							</div>
						))}
					</div>
				)}
				{/* Lightbox */}
				{isLightBoxOpen && (
					<div className="z-10 overflow-hidden fixed top-[calc(50%+4rem)] left-1/2 -translate-x-1/2 -translate-y-1/2 h-full bg-black/80 w-full ">
						<div className="flex justify-end mr-6 mt-6">
							<svg
								className="size-8 cursor-pointer text-off-white"
								fill=""
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
								onClick={() => setIsLightBoxOpen(false)}
							>
								<line x1="18" y1="6" x2="6" y2="18" />
								<line x1="6" y1="6" x2="18" y2="18" />
							</svg>
						</div>
						<div className="h-5/6 flex justify-center items-center p-6">
							<img
								src={album.photos[activePicture - 1].src}
								alt={album.photos[activePicture - 1].alt}
								className="h-full rounded-xl"
							/>
						</div>
					</div>
				)}
			</section>
		</>
	);
}
