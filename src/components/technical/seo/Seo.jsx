import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import useLang from "../../../hooks/useLang";

const BASE_URL = "https://www.vanewedding.it";
const DEFAULT_IMAGE = `${BASE_URL}/logo_full_pink.svg`;

const htmlLang = {
	it: "it",
	eng: "en",
};

const ogLocale = {
	it: "it_IT",
	eng: "en_GB",
};

function withBaseUrl(url = DEFAULT_IMAGE) {
	if (url.startsWith("http")) return url;
	if (url.startsWith("/")) return `${BASE_URL}${url}`;
	return url;
}

function switchLang(pathname, targetLang) {
	if (!pathname || pathname === "/") return targetLang === "it" ? "/it/" : "/eng/";
	return pathname.replace(/^\/(it|eng)(?=\/|$)/, `/${targetLang}`);
}

function canonicalFromPath(pathname) {
	if (!pathname || pathname === "/" || pathname === "/it/") return `${BASE_URL}/`;
	return `${BASE_URL}/#${pathname}`;
}

export default function Seo({
	title,
	description,
	keywords,
	image = DEFAULT_IMAGE,
	type = "website",
	noindex = false,
	structuredData,
}) {
	const location = useLocation();
	const lang = useLang();
	const canonicalUrl = canonicalFromPath(location.pathname);
	const italianUrl = canonicalFromPath(switchLang(location.pathname, "it"));
	const englishUrl = canonicalFromPath(switchLang(location.pathname, "eng"));
	const robots = noindex ? "noindex, follow" : "index, follow";
	const jsonLd = Array.isArray(structuredData)
		? structuredData
		: structuredData
		? [structuredData]
		: [];

	return (
		<Helmet htmlAttributes={{ lang: htmlLang[lang] || "it" }}>
			<title>{title}</title>
			<meta name="description" content={description} />
			{keywords ? <meta name="keywords" content={keywords} /> : null}
			<meta name="robots" content={robots} />
			<meta name="geo.region" content="IT-RG" />
			<meta name="geo.placename" content="Pozzallo, Ragusa, Sicilia" />
			<meta name="application-name" content="Vanè Wedding & Event Creator" />

			<link rel="canonical" href={canonicalUrl} />
			<link rel="alternate" hrefLang="it" href={italianUrl} />
			<link rel="alternate" hrefLang="en" href={englishUrl} />
			<link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/`} />

			<meta property="og:site_name" content="Vanè Wedding & Event Creator" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:image" content={withBaseUrl(image)} />
			<meta property="og:locale" content={ogLocale[lang] || ogLocale.it} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={withBaseUrl(image)} />

			{jsonLd.map((entry, index) => (
				<script key={index} type="application/ld+json">
					{JSON.stringify(entry)}
				</script>
			))}
		</Helmet>
	);
}
