import gallery1 from "/img/gallery1.jpg";
import gallery2 from "/img/gallery2.jpg";
import gallery3 from "/img/gallery3.jpg";
import gallery4 from "/img/gallery4.jpg";
import gallery5 from "/img/gallery5.jpg";

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
    // { src: gallery1, alt: "Gallery photo 1" },
    // { src: gallery2, alt: "Gallery photo 2" },
    // { src: gallery3, alt: "Gallery photo 3" },
    // { src: gallery4, alt: "Gallery photo 4" },
    // { src: gallery5, alt: "Gallery photo 5" },
  ],
  buttonData: {
    it: "SFOGLIA LA GALLERY",
    eng: "VIEW THE GALLERY",
    url: "/gallery",
  },
};
