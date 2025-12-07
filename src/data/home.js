import gallery1 from "/img/gallery1.jpg";
import gallery2 from "/img/gallery2.jpg";
import gallery3 from "/img/gallery3.jpg";
import gallery4 from "/img/gallery4.jpg";
import gallery5 from "/img/gallery5.jpg";
import gallery6 from "/img/gallery6.jpg";
import studio1 from "/img/studio1.jpg";
import studio2 from "/img/studio2.jpg";
import studio3 from "/img/studio3.jpg";
import studio4 from "/img/studio4.jpg";
import studio5 from "/img/studio5.jpg";
import studio6 from "/img/studio6.jpg";
import maps from "/img/maps.png";
import logo1 from "../assets/svg/ita.svg";
import logo2 from "../assets/svg/ita.svg";

export const hero = {
  titleIt: "BENVENUTI",
  titleEng: "WELCOME",
  textIt:
    "Sono Vanessa, Wedding & Event Creator.\nLasciate che vi aiuti a rendere unico il vostro giorno.",
  textEng:
    "I am Vanessa, Wedding & Event Creator.\nLet me help you make your day unique.",
  scrollIt: "ESPLORA IL SITO WEB",
  scrollEng: "EXPLORE THE WEBSITE",
};

export const gallery = {
  titleIt: "LASCIATI ISPIRARE",
  titleEng: "GET INSPIRED",
  photos: [
    { src: gallery1, alt: "Gallery photo 1" },
    { src: gallery2, alt: "Gallery photo 2" },
    { src: gallery3, alt: "Gallery photo 3" },
    { src: gallery4, alt: "Gallery photo 4" },
    { src: gallery5, alt: "Gallery photo 5" },
    { src: gallery6, alt: "Gallery photo 6" },
  ],
  buttonData: {
    it: "SFOGLIA LA GALLERY",
    eng: "VIEW THE GALLERY",
    url: "/gallery",
  },
};

export const studio = {
  titleIt: "LO STUDIO DI PROGETTAZIONE",
  titleEng: "THE DESIGN STUDIO",
  photos: [
    { src: studio1, alt: "Studio photo 1" },
    { src: studio2, alt: "Studio photo 2" },
    { src: studio3, alt: "Studio photo 3" },
    { src: studio4, alt: "Studio photo 4" },
    { src: studio5, alt: "Studio photo 5" },
    { src: studio6, alt: "Studio photo 6" },
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
  image: maps,
  buttonData: {
    it: "APRI SULLA MAPPA",
    eng: "SEE ON MAP",
    url: "https://maps.app.goo.gl/SBT2N4nSuV5ppLu36",
  },
};
export const aboutMe = {
  titleIt: "MI PRESENTO",
  titleEng: "THIS IS ME",
  line1: {
    mobile: {
      it: "VANESSA FRONTERRÉ",
      eng: "VANESSA FRONTERRÉ",
    },
    desktop: {
      it: "VANESSA FRONTERRÉ",
      eng: "VANESSA FRONTERRÉ",
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
    { id: 1, src: gallery1, alt: "" },
    { id: 2, src: gallery2, alt: "" },
  ],
  logos: [
    { id: 1, src: logo1, alt: "" },
    { id: 2, src: logo2, alt: "" },
  ],
  imgPropic: {
    src: gallery3,
    alt: "immagine di profilo",
  },
  buttonData: {
    it: "SCOPRI DI PIÙ",
    eng: "READ MORE",
    url: "/about",
  },
};
