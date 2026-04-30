import gallery1 from "/img-optimized/slides/comunioni/comunioni-1.jpg";
import gallery2 from "/img-optimized/slides/wedding/wedding-2.jpg";
import gallery3 from "/img-optimized/slides/party/party-2.jpg";
import gallery4 from "/img-optimized/slides/wedding/wedding-16.jpg";
import gallery5 from "/img-optimized/slides/cresime/cresime-10.jpg";
import gallery6 from "/img-optimized/slides/18esimi/18esimo-3.jpg";
import studio1 from "/img-optimized/home/studio/studio1.jpg";
import studio2 from "/img-optimized/home/studio/studio2.jpg";
import studio3 from "/img-optimized/home/studio/studio3.jpg";
import studio4 from "/img-optimized/home/studio/studio4.jpg";
import studio5 from "/img-optimized/home/studio/studio5.jpg";
import studio6 from "/img-optimized/home/studio/studio6.jpg";
import maps from "/img-optimized/home/maps.jpg";
import about1 from "/img/about1.jpg";
import about2 from "/img/about2.jpg";
import logo1 from "../assets/svg/logo1.svg";
import logo2 from "../assets/svg/logo2.svg";
import propic from "/img/propic.jpg";
import { LINK_TYPE } from "../constants/enum";

export const helmetData = {
	title: "Wedding Planner Pozzallo e Sicilia | Vanè Wedding & Event",
	description:
		"Wedding planner e event designer a Pozzallo, Ragusa, Sicilia. Matrimoni su misura, destination wedding ed eventi eleganti per clienti locali e internazionali.",
	keywords:
		"wedding planner Pozzallo, wedding planner Ragusa, wedding planner Sicilia, destination wedding Sicilia, destination wedding Italy, full service wedding planning, matrimoni Pozzallo, matrimoni Ragusa, organizzazione matrimoni Sicilia, event creator Pozzallo, wedding design Sicilia",
	ogtitle: "Wedding Planner Pozzallo e Sicilia | Vanè Wedding & Event Creator",
	ogtype: "website",
	ogdescription:
		"Matrimoni su misura, destination wedding ed eventi eleganti a Pozzallo, Ragusa e in Sicilia.",
	ogurl: "https://www.vanewedding.it/",
	ogimage: "https://www.vanewedding.it/img-optimized/home/footer.jpg",
};

export const hero = {
	title: {
		it: "BENVENUTI",
		eng: "WELCOME",
	},
	text: {
		it: "Sono Vanessa, Wedding & Event Creator.\nLasciate che vi aiuti a rendere unico il vostro giorno.",
		eng: "I am Vanessa, Wedding & Event Creator.\nLet me help you make your day unique.",
	},
	scroll: {
		it: "ESPLORA IL SITO WEB",
		eng: "EXPLORE THE WEBSITE",
	},
	bgAlt: {
		it: "Tavolo matrimoniale decorato con fiori e candele all'aperto vista mare",
		eng: "Wedding table decorated with flowers and candles outdoors with sea view",
	},
	iconAlt: {
		it: "icona freccia giù",
		eng: "down arrow icon",
	},
};

export const gallery = {
	title: {
		it: "LASCIATI ISPIRARE",
		eng: "GET INSPIRED",
	},

	photos: [
		{
			src: gallery1,
			alt: {
				it: "Allestimento esterno con fiori rosa",
				eng: "Outdoor setup with pink flowers",
			},
		},
		{
			src: gallery2,
			alt: {
				it: "Segnaposto della sposa e rose bianche",
				eng: "Bride's place card and white roses",
			},
		},
		{
			src: gallery3,
			alt: {
				it: "Festeggiata avvolta da una pioggia di lucine",
				eng: "Birthday girl surrounded by a shower of fairy lights",
			},
		},
		{
			src: gallery4,
			alt: {
				it: "Tavoli del ricevimento apparecchiati con candele e rose rosa",
				eng: "Reception tables set with candles and pink roses",
			},
		},
		{
			src: gallery5,
			alt: {
				it: "Tavolo di legno decorato con piante e fiori bianchi davanti a vetrata che da sul giardino",
				eng: "Wooden table decorated with plants and white flowers in front of a window overlooking the garden",
			},
		},
		{
			src: gallery6,
			alt: {
				it: "Tavola decorata con candele e fiori bianchi",
				eng: "Table decorated with candles and white flowers",
			},
		},
	],
	buttonData: {
		it: "SFOGLIA LA GALLERY",
		eng: "VIEW THE GALLERY",
		url: "/gallery",
		linkType: LINK_TYPE.FULL,
	},
};

export const studio = {
	title: {
		it: "LO STUDIO DI PROGETTAZIONE",
		eng: "THE DESIGN STUDIO",
	},
	photos: [
		{
			src: studio1,
			alt: {
				it: "Insegna con logo Vanè accanto alla porta d'ingresso dello studio",
				eng: "Sign with Vanè logo next to the studio entrance door",
			},
		},
		{
			src: studio2,
			alt: { it: "Porta d'ingresso dello studio", eng: "Studio entrance door" },
		},
		{
			src: studio3,
			alt: {
				it: "Interni dello studio in cui Vanessa riceve i clienti per gli appuntamenti",
				eng: "Interior of the studio where Vanessa meets clients for appointments",
			},
		},
		{
			src: studio4,
			alt: { it: "Porta d'ingresso dello studio", eng: "Studio entrance door" },
		},
		{
			src: studio5,
			alt: { it: "Porta d'ingresso dello studio", eng: "Studio entrance door" },
		},
		{
			src: studio6,
			alt: {
				it: "Insegna con logo Vanè accanto alla porta d'ingresso dello studio",
				eng: "Sign with Vanè logo next to the studio entrance door",
			},
		},
	],
	line1: {
		mobile: {
			it: "",
			eng: "",
		},
		desktop: {
			it: "TI ASPETTO QUI",
			eng: "I'LL WAIT YOU HERE",
		},
	},
	line2: {
		mobile: {
			it: "",
			eng: "",
		},
		desktop: {
			it: "Via R. Morandi 1, Pozzallo(RG)\n Piano terra",
			eng: "Via R. Morandi 1, Pozzallo(RG)\n Ground floor",
		},
	},
	images: [
		{
			id: 1,
			src: maps,
			width: 900,
			height: 384,
			alt: "mappa",
		},
	],
	buttonData: {
		it: "APRI SULLA MAPPA",
		eng: "SEE ON MAP",
		url: "https://maps.app.goo.gl/SBT2N4nSuV5ppLu36",
		linkType: LINK_TYPE.EXTERNAL,
	},
};
export const aboutMe = {
	title: {
		it: "MI PRESENTO",
		eng: "THIS IS ME",
	},
	line1: {
		mobile: {
			it: "VANESSA FRONTERRÈ",
			eng: "VANESSA FRONTERRÈ",
		},
		desktop: {
			it: "VANESSA FRONTERRÈ",
			eng: "VANESSA FRONTERRÈ",
		},
	},
	line2: {
		mobile: {
			it: "Nata come graphic designer e specializzata in event creation, unisco creatività e professionalità per dare forma alle tue idee e personalizzare ogni dettaglio del tuo evento.",
			eng: "Trained in graphic design and specialized in event creation, I combine creativity and professionalism to shape your ideas and craft every detail of your event with care.",
		},
		desktop: {
			it: "Nata come graphic designer e specializzata in event creation, unisco creatività e professionalità per dare forma alle tue idee e personalizzare ogni dettaglio del tuo evento.",
			eng: "Trained in graphic design and specialized in event creation, I combine creativity and professionalism to shape your ideas and craft every detail of your event with care.",
		},
	},
	images: [
		{
			id: 1,
			src: about1,
			alt: {
				it: "Vanessa Fronterrè, wedding planner, mentre sistema sul tavolo i regali per gli invitati a un matrimonio in Sicilia",
				eng: "Vanessa Fronterrè, wedding planner, while arranging the gifts for the guests on the table at a wedding in Sicily",
			},
		},
		{
			id: 2,
			src: about2,
			alt: {
				it: "Vanessa Fronterrè, wedding planner, mentre sistema una composizione floreale di fiori rosa, lilla e viola per un 30esimo compleanno a bordo piscina",
				eng: "Vanessa Fronterrè, wedding planner, while arranging a floral composition of pink, lilac, and purple flowers for a 30th birthday by the pool",
			},
		},
	],
	logos: [
		{
			id: 1,
			src: logo1,
			alt: "Visit Accademia delle Belle Arti Catania",
			url: "https://www.abacatania.it/",
		},
		{
			id: 2,
			src: logo2,
			alt: "Visit Accademia del Wedding",
			url: "https://www.accademiadelwedding.com/",
		},
	],
	imgPropic: {
		src: propic,
		alt: {
			it: "Ritratto di Vanessa Fronterrè",
			eng: "Portrait of Vanessa Fronterrè",
		},
	},
	buttonData: {
		it: "SCOPRI DI PIÙ",
		eng: "READ MORE",
		url: "/about",
		linkType: LINK_TYPE.FULL,
	},
};
