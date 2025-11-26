import { useContext } from "react";
import HeroSection from "../sections/HeroSection";
import GallerySection from "../sections/GallerySection";
import StudioSection from "../sections/StudioSection";
import PresentationSection from "../sections/PresentationSection";
import GlobalContext from "../context/GlobalContext";

export default function HomePage() {
	const { it } = useContext(GlobalContext);
	return (
		<>
			<HeroSection it={it} />
			<GallerySection />
			<StudioSection />
			<PresentationSection />
		</>
	);
}
