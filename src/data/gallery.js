import gallery1 from "/img/gallery1.jpg";
import gallery2 from "../assets/img/footer.jpg";
import { LINK_TYPE } from "../constants/enum";
export const helmetData = {
	title: "Gallery | Vanè Wedding & Event",
	description:
		"Esplora la galleria fotografica di matrimoni, eventi e cerimonie curati da Vanessa Fronterrè. Portfolio completo di wedding design a Pozzallo, Ragusa, Sicilia.",
	keywords:
		"galleria matrimoni, foto matrimoni Sicilia, portfolio wedding, fotografie matrimoni Pozzallo, eventi Ragusa, wedding photography, gallery matrimoni, cerimonie",
	ogtitle: "Gallery | Vanè Wedding & Event",
	ogtype: "website",
	ogdescription:
		"Esplora la galleria fotografica di matrimoni, eventi e cerimonie curati da Vanessa Fronterrè. Portfolio completo di wedding design a Pozzallo, Ragusa, Sicilia.",
	ogurl: "https://www.vanewedding.it/#/it/gallery",
	ogimage: "https://www.vanewedding.it/img/gallery1.jpg",
};
export const galleryData = {
	title: {
		it: "GALLERIA",
		eng: "GALLERY",
	},
	album: [
		{
			id: 1,
			line1: {
				mobile: {
					it: "WEDDING",
					eng: "WEDDING",
				},
				desktop: {
					it: "WEDDING",
					eng: "WEDDING",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "wedding",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 2,
			line1: {
				mobile: {
					it: "GENDER REVEAL",
					eng: "GENDER REVEAL",
				},
				desktop: {
					it: "GENDER REVEAL",
					eng: "GENDER REVEAL",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "gender-reveal",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 3,
			line1: {
				mobile: {
					it: "BABY SHOWER",
					eng: "BABY SHOWER",
				},
				desktop: {
					it: "BABY SHOWER",
					eng: "BABY SHOWER",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "baby-shower",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 4,
			line1: {
				mobile: {
					it: "WELCOME HOME",
					eng: "WELCOME HOME",
				},
				desktop: {
					it: "WELCOME HOME",
					eng: "WELCOME HOME",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "welcome-home",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 5,
			line1: {
				mobile: {
					it: "BATTESIMO",
					eng: "BAPTISM",
				},
				desktop: {
					it: "BATTESIMO",
					eng: "BAPTISM",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "baptism",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 6,
			line1: {
				mobile: {
					it: "PRIMA COMUNIONE",
					eng: "FIRST COMMUNION",
				},
				desktop: {
					it: "PRIMA COMUNIONE",
					eng: "FIRST COMMUNION",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "first-communion",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 7,
			line1: {
				mobile: {
					it: "CRESIMA",
					eng: "CONFIRMATION",
				},
				desktop: {
					it: "CRESIMA",
					eng: "CONFIRMATION",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "confirmation",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 8,
			line1: {
				mobile: {
					it: "DICIOTTESIMO",
					eng: "18TH BIRTHDAY",
				},
				desktop: {
					it: "DICIOTTESIMO",
					eng: "18TH BIRTHDAY",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "18th-birthday",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 9,
			line1: {
				mobile: {
					it: "LAUREA",
					eng: "GRADUATION",
				},
				desktop: {
					it: "LAUREA",
					eng: "GRADUATION",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "graduation",
				linkType: LINK_TYPE.SLUG,
			},
		},
		{
			id: 10,
			line1: {
				mobile: {
					it: "PARTY",
					eng: "PARTY",
				},
				desktop: {
					it: "PARTY",
					eng: "PARTY",
				},
			},
			images: [
				{
					id: 1,
					src: gallery1,
					alt: "",
				},
			],
			buttonData: {
				it: "GUARDA LE FOTO",
				eng: "WATCH THE ALBUM",
				url: "party",
				linkType: LINK_TYPE.SLUG,
			},
		},
	],
};

export const albumData = {
	wedding: {
		helmetData: {
			title: "Album | Vanè Wedding & Event",
		},
		title: {
			it: "WEDDING",
			eng: "WEDDING",
		},
		photos: [
			{ id: 1, src: gallery1, alt: "Wedding" },
			{ id: 2, src: gallery2, alt: "Wedding" },
			{ id: 3, src: gallery1, alt: "Wedding" },
			{ id: 4, src: gallery2, alt: "Wedding" },
			{ id: 5, src: gallery1, alt: "Wedding" },
			{ id: 6, src: gallery1, alt: "Wedding" },
			{ id: 7, src: gallery1, alt: "Wedding" },
			{ id: 8, src: gallery2, alt: "Wedding" },
			{ id: 9, src: gallery1, alt: "Wedding" },
			{ id: 10, src: gallery1, alt: "Wedding" },
		],
	},
	birthday: {
		title: {
			it: "COMPLEANNO",
			eng: "BIRTHDAY",
		},
		photos: [
			{ id: 1, src: gallery1, alt: "Birthday" },
			{ id: 2, src: gallery1, alt: "Birthday" },
			// altre immagini...
		],
	},
};
