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
				<meta name="keywords" content={helmetData.keywords}></meta>
				{/* Open Graph Tags */}
				<meta property="og:title" content={helmetData.ogtitle} />
				<meta property="og:type" content={helmetData.ogtype} />
				<meta property="og:description" content={helmetData.ogdescription} />
				<meta property="og:url" content={helmetData.ogurl} />
				<meta property="og:image" content={helmetData.ogimage} />
				{/* Additional Meta Tags */}
				<meta name="robots" content="index, follow" />
				<link rel="canonical" href="https://www.vanewedding.it/" />
			</Helmet>

			<HeroSection it={it} />
			<GallerySection it={it} isMobile={isMobile} />
			<StudioSection it={it} isMobile={isMobile} />
			<AboutMe it={it} isMobile={isMobile} />
		</>
	);
}
