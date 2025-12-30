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
    submenuNameIt: "SERVIZI",
    submenuNameEng: "SERVICES",
    submenuItems: [
      {
        id: 1,
        slug: "wedding",
        nameIt: "WEDDING",
        nameEng: "WEDDING",
      },
      {
        id: 2,
        slug: "gender-reveal",
        nameIt: "GENDER REVEAL",
        nameEng: "GENDER REVEAL",
      },
      {
        id: 3,
        slug: "baby-shower",
        nameIt: "BABY SHOWER",
        nameEng: "BABY SHOWER",
      },
      {
        id: 4,
        slug: "welcome-home",
        nameIt: "WELCOME HOME",
        nameEng: "WELCOME HOME",
      },
      {
        id: 5,
        slug: "baptism",
        nameIt: "BATTESIMO",
        nameEng: "BAPTISM",
      },
      {
        id: 6,
        slug: "first-communion",
        nameIt: "PRIMA COMUNIONE",
        nameEng: "FIRST COMMUNION",
      },
      {
        id: 7,
        slug: "confirmation",
        nameIt: "CRESIMA",
        nameEng: "CONFIRMATION",
      },
      {
        id: 8,
        slug: "18th-birthday",
        nameIt: "DICIOTTESIMO",
        nameEng: "18TH BIRTHDAY",
      },
      {
        id: 9,
        slug: "graduation",
        nameIt: "LAUREA",
        nameEng: "GRADUATION",
      },
      {
        id: 10,
        slug: "party",
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
    nameIt: "SCRIVIMI",
    nameEng: "WRITE ME",
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
