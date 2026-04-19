import { useContext } from "react";
import HeroSection from "../sections/HeroSection";
import GallerySection from "../sections/GallerySection";
import StudioSection from "../sections/StudioSection";
import AboutMe from "../sections/AboutMe";
import GlobalContext from "../context/GlobalContext";
import { helmetData } from "../data/home";
import Seo from "../components/technical/seo/Seo";

export default function HomePage() {
	const { it, isMobile } = useContext(GlobalContext);
	const title = it
		? helmetData.title
		: "Destination Wedding Planner in Sicily | Vanè";
	const description = it
		? helmetData.description
		: "Full-service wedding planner and event designer in Pozzallo, Ragusa, Sicily. Bespoke destination weddings in Italy and elegant events for international couples.";
	const keywords = it
		? helmetData.keywords
		: "destination wedding planner Sicily, wedding planner Pozzallo, wedding planner Ragusa, wedding planner Sicily, full-service wedding planning Italy, bespoke weddings Sicily, event designer Sicily";
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "ProfessionalService",
		name: "Vanè Wedding & Event Creator",
		alternateName: "Vanè Wedding",
		url: "https://www.vanewedding.it/",
		image: "https://www.vanewedding.it/logo_full_pink.svg",
		description,
		email: "mailto:vanessafronterre@gmail.com",
		telephone: "+393281323219",
		priceRange: "$$",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Via Rodolfo Morandi, 1",
			addressLocality: "Pozzallo",
			postalCode: "97016",
			addressRegion: "RG",
			addressCountry: "IT",
		},
		areaServed: [
			{ "@type": "City", name: "Pozzallo" },
			{ "@type": "AdministrativeArea", name: "Ragusa" },
			{ "@type": "AdministrativeArea", name: "Sicily" },
			{ "@type": "Country", name: "Italy" },
		],
		availableLanguage: ["it", "en"],
		serviceType: [
			"Full-service wedding planning",
			"Destination wedding planning in Sicily",
			"Event creation",
			"Wedding design",
			"Private event planning",
		],
		hasOfferCatalog: {
			"@type": "OfferCatalog",
			name: "Wedding and event planning services",
			itemListElement: [
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Full-service wedding planning in Pozzallo and Sicily",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Destination wedding planning in Italy",
					},
				},
				{
					"@type": "Offer",
					itemOffered: {
						"@type": "Service",
						name: "Event creation and styling",
					},
				},
			],
		},
		sameAs: [
			"https://www.facebook.com/vanessafronterre",
			"https://www.instagram.com/vane.wedding",
		],
	};

	return (
		<>
			<Seo
				title={title}
				description={description}
				keywords={keywords}
				image={helmetData.ogimage}
				structuredData={structuredData}
			/>

			<HeroSection it={it} />
			<GallerySection it={it} isMobile={isMobile} />
			<StudioSection it={it} isMobile={isMobile} />
			<AboutMe it={it} isMobile={isMobile} />
		</>
	);
}
