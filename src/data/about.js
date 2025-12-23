import about1 from "/img/about1.jpg";
import studio1 from "/img/studio1.jpg";
import studio2 from "/img/studio2.jpg";
import studio3 from "/img/studio3.jpg";
import studio4 from "/img/studio4.jpg";
import studio5 from "/img/studio5.jpg";
import studio6 from "/img/studio6.jpg";
import gallery1 from "/img/gallery1.jpg";
import gallery2 from "/img/gallery2.jpg";
import gallery3 from "/img/gallery3.jpg";
import gallery4 from "/img/gallery4.jpg";
import gallery5 from "/img/gallery5.jpg";
import gallery6 from "/img/gallery6.jpg";
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
			it: "Qua spieghiamo il corso che hai fatto e la certificazione che hai ottenuto, dicendo anche del contest che hai vinto durante l`esperienza da Cira Lombardo. Aggiungiamo tutte le foto che vuoi.",
			eng: "Here we explain the course you took and the certification you obtained, also mentioning the contest you won during the experience at Cira Lombardo. We add all the photos you want.",
		},
		desktop: {
			it: "Qua spieghiamo il corso che hai fatto e la certificazione che hai ottenuto.",
			eng: "Here we explain the course you took and the certification you obtained.",
		},
	},
};

export const aboutContestData = {
	images: [
		{ id: 1, src: studio4, alt: "" },
		{ id: 2, src: studio5, alt: "" },
		{ id: 3, src: studio6, alt: "" },
	],
	line1: {
		mobile: {
			it: "Qua parliamo del contest che hai vinto durante l`esperienza da Cira Lombardo.",
			eng: "Here we talk about the contest you won during the experience at Cira Lombardo.",
		},
		desktop: {
			it: "Qua parliamo del contest che hai vinto durante l`esperienza da Cira Lombardo.",
			eng: "Here we talk about the contest you won during the experience at Cira Lombardo.",
		},
	},
};

export const aboutCataniaData = {
	images: [
		{ id: 1, src: gallery1, alt: "" },
		{ id: 2, src: gallery2, alt: "" },
		{ id: 3, src: gallery3, alt: "" },
	],
	logo: {
		id: 1,
		src: logoCatania,
		alt: "",
	},
	line1: {
		mobile: {
			it: "Qua parliamo del tuo percorso di studi all`Accademia. Possiamo scendere nel dettaglio quanto vuoi e se vuoi possiamo aggiungere qualche foto di quando eri all`università.",
			eng: "Here we talk about your study path at the Academy. We can go into as much detail as you want and if you want we can add some photos of when you were at university.",
		},
		desktop: {
			it: "Qua parliamo del tuo percorso di studi all`Accademia. Possiamo scendere nel dettaglio quanto vuoi e se vuoi possiamo aggiungere qualche foto di quando eri all`università.",
			eng: "Here we talk about your study path at the Academy. We can go into as much detail as you want and if you want we can add some photos of when you were at university.",
		},
	},
};

export const aboutVaneData = {
	images: [
		{ id: 1, src: gallery4, alt: "" },
		{ id: 2, src: gallery5, alt: "" },
		{ id: 3, src: gallery6, alt: "" },
	],
	logo: {
		id: 1,
		src: logoVanePink,
		alt: "",
	},
	line1: {
		mobile: {
			it: "Parte finale in cui spieghi al visitatore del sito web il processo di creazione degli eventi, dalla discussione delle idee all’allestimento finale, accompagnando i clienti in ogni fase e realizzando tutti i loro sogni nei minimi dettagli.",
			eng: "Final part in which you explain to the website visitor the process of creating events, from discussing ideas to the final setup, accompanying clients at every stage and realizing all their dreams in minute detail.",
		},
		desktop: {
			it: "Parte finale in cui spieghi al visitatore del sito web il processo di creazione degli eventi, dalla discussione delle idee all’allestimento finale, accompagnando i clienti in ogni fase e realizzando tutti i loro sogni nei minimi dettagli.",
			eng: "Final part in which you explain to the website visitor the process of creating events, from discussing ideas to the final setup, accompanying clients at every stage and realizing all their dreams in minute detail.",
		},
	},
};
