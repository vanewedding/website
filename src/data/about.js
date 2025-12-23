import about1 from "/img/about1.jpg";
import studio1 from "/img/studio1.jpg";
import studio2 from "/img/studio2.jpg";
import studio3 from "/img/studio3.jpg";
import logoVane from "../assets/svg/logo_lite_w.svg";
import logoWedding from "../assets/svg/logo2.svg";
import logoCatania from "../assets/svg/logo1.svg";
import logoVanePink from "../assets/svg/logo_pink.svg";

export const aboutData = {
	title: {
		it: "SU DI ME",
		eng: "ABOUT ME",
	},
	images: [{ id: 1, src: about1, alt: "" }],
	logoVane: {
		id: 1,
		src: logoVane,
		alt: "",
	},
	logoVanePink: {
		id: 4,
		src: logoVanePink,
		alt: "",
	},
	line1: {
		mobile: {
			it: "CIAO,\nSONO VANESSA",
			eng: "HI,\nI'M VANESSA",
		},
		desktop: {
			it: "CIAO, SONO VANESSA",
			eng: "HI, I'M VANESSA",
		},
	},
	line2: {
		mobile: {
			it: "Qui scriviamo una piccola introduzione che lascia capire al visitatore del sito web che sei una persona fresca e creativa, ma anche disponibile e professionale. Possiamo dire da quanto tempo hai aperto lo studio o qualche altro dettaglio che ritieni importante.",
			eng: "Here we write a small introduction that lets the website visitor understand that you are a fresh and creative person, but also available and professional. We can say how long you have had the studio or some other detail that you consider important.",
		},
		desktop: {
			it: "Qui scriviamo una piccola introduzione che lascia capire al visitatore del sito web che sei una persona fresca e creativa, ma anche disponibile e professionale. Possiamo dire da quanto tempo hai aperto lo studio o qualche altro dettaglio che ritieni importante.",
			eng: "Here we write a small introduction that lets the website visitor understand that you are a fresh and creative person, but also available and professional. We can say how long you have had the studio or some other detail that you consider important.",
		},
	},
};

export const aboutWeddingData = {
	images: [
		{ id: 1, src: studio1, alt: "" },
		{ id: 2, src: studio2, alt: "" },
		{ id: 3, src: studio3, alt: "" },
	],
	logo: {
		id: 1,
		src: logoWedding,
		alt: "",
	},
	line1: {
		mobile: {
			it: "Qua spieghiamo il corso che hai fatto e la certificazione che hai ottenuto.",
			eng: "Here we explain the course you took and the certification you obtained.",
		},
		desktop: {
			it: "Qua spieghiamo il corso che hai fatto e la certificazione che hai ottenuto.",
			eng: "Here we explain the course you took and the certification you obtained.",
		},
	},
};

export const aboutCataniaData = {
	images: [{ id: 1, src: about1, alt: "" }],
	logo: {
		id: 1,
		src: logoCatania,
		alt: "",
	},
};

export const aboutVaneData = {
	images: [{ id: 1, src: about1, alt: "" }],
	logo: {
		id: 1,
		src: logoVanePink,
		alt: "",
	},
};
