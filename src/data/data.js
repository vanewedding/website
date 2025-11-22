import fb from "../assets/svg/fb.svg";
import ig from "../assets/svg/ig.svg";
import wa from "../assets/svg/wa.svg";
import ita from "../assets/svg/ita.svg";
import eng from "../assets/svg/eng.svg";
import logoLiteWhite from "../assets/svg/logo_lite_w.svg";

export const navLinks = [
	{
		id: 1,
		pathIt: "/it/",
		pathEng: "/eng/",
		nameIt: "HOME",
		nameEng: "HOME",
		svg: logoLiteWhite,
		submenu: false,
		submenuItems: [],
	},
	{
		id: 2,
		pathIt: "/it/gallery",
		pathEng: "/eng/gallery",
		nameIt: "GALLERIA",
		nameEng: "GALLERY",
		svg: "",
		submenu: true,
		submenuItems: [
			{
				id: 1,
				pathIt: "/it/gallery/wedding",
				pathEng: "/eng/gallery/wedding",
				nameIt: "WEDDING",
				nameEng: "WEDDING",
			},
			{
				id: 2,
				pathIt: "/it/gallery/gender-reveal",
				pathEng: "/eng/gallery/gender-reveal",
				nameIt: "GENDER REVEAL",
				nameEng: "GENDER REVEAL",
			},
			{
				id: 3,
				pathIt: "/it/gallery/baby-shower",
				pathEng: "/eng/gallery/baby-shower",
				nameIt: "BABY SHOWER",
				nameEng: "BABY SHOWER",
			},
			{
				id: 4,
				pathIt: "/it/gallery/welcome-home",
				pathEng: "/eng/gallery/welcome-home",
				nameIt: "WELCOME HOME",
				nameEng: "WELCOME HOME",
			},
			{
				id: 5,
				pathIt: "/it/gallery/battesimo",
				pathEng: "/eng/gallery/baptism",
				nameIt: "BATTESIMO",
				nameEng: "BAPTISM",
			},
			{
				id: 6,
				pathIt: "/it/gallery/prima-comunione",
				pathEng: "/eng/gallery/first-communion",
				nameIt: "PRIMA COMUNIONE",
				nameEng: "FIRST COMMUNION",
			},
			{
				id: 7,
				pathIt: "/it/gallery/cresima",
				pathEng: "/eng/gallery/confirmation",
				nameIt: "CRESIMA",
				nameEng: "CONFIRMATION",
			},
			{
				id: 8,
				pathIt: "/it/gallery/diciottesimo",
				pathEng: "/eng/gallery/18th-birthday",
				nameIt: "DICIOTTESIMO",
				nameEng: "18TH BIRTHDAY",
			},
			{
				id: 9,
				pathIt: "/it/gallery/laurea",
				pathEng: "/eng/gallery/graduation",
				nameIt: "LAUREA",
				nameEng: "GRADUATION",
			},
			{
				id: 10,
				pathIt: "/it/gallery/party",
				pathEng: "/eng/gallery/party",
				nameIt: "PARTY",
				nameEng: "PARTY",
			},
		],
	},
	{
		id: 3,
		pathIt: "/it/about",
		pathEng: "/eng/about",
		nameIt: "SU DI ME",
		nameEng: "ABOUT ME",
		svg: "",
		submenu: false,
		submenuItems: [],
	},
	{
		id: 4,
		pathIt: "/it/form",
		pathEng: "/eng/form",
		nameIt: "QUESTIONARIO",
		nameEng: "FORM",
		svg: "",
		submenu: false,
		submenuItems: [],
	},
];

export const socials = [
	{
		id: 1,
		url: "https://wa.me/393281323219",
		svg: wa,
	},
	{
		id: 2,
		url: "https://www.facebook.com/vanessafronterre",
		svg: fb,
	},
	{
		id: 3,
		url: "https://www.instagram.com/vane.wedding",
		svg: ig,
	},
];

export const langs = [
	{
		id: 1,
		lang: "it",
		svg: ita,
	},
	{
		id: 2,
		lang: "eng",
		svg: eng,
	},
];
