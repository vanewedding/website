import { Helmet } from "react-helmet-async";
import useLang from "../../../hooks/useLang";

const BASE_URL = "https://www.vanewedding.it";
const DEFAULT_IMAGE = `${BASE_URL}/img-optimized/home/footer.jpg`;

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

export default function Seo({
	title,
	description,
	keywords,
	image = DEFAULT_IMAGE,
	type = "website",
	noindex = false,
	structuredData,
}) {
	const lang = useLang();
	const canonicalUrl = `${BASE_URL}/`;
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

			<meta property="og:site_name" content="Vanè Wedding & Event Creator" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content={type} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:image" content={withBaseUrl(image)} />
			<meta property="og:image:secure_url" content={withBaseUrl(image)} />
			<meta property="og:image:type" content="image/jpeg" />
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
