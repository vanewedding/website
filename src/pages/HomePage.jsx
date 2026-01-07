import { useContext } from "react";
import HeroSection from "../sections/HeroSection";
import GallerySection from "../sections/GallerySection";
import StudioSection from "../sections/StudioSection";
import AboutMe from "../sections/AboutMe";
import GlobalContext from "../context/GlobalContext";
import { Helmet } from "react-helmet-async";
import { helmetData } from "../data/home";

export default function HomePage() {
	const { it, isMobile } = useContext(GlobalContext);
	return (
		<>
			<Helmet>
				<title>{helmetData.title}</title>
				<meta name="description" content={helmetData.description} />
			</Helmet>

			<HeroSection it={it} />
			<GallerySection it={it} isMobile={isMobile} />
			<StudioSection it={it} isMobile={isMobile} />
			<AboutMe it={it} isMobile={isMobile} />
		</>
	);
}
