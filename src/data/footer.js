import footer from "../assets/img/footer.jpg";
import logoLiteWhite from "../assets/svg/logo_lite_w.svg";
import fb from "../assets/svg/fb.svg";
import ig from "../assets/svg/ig.svg";
import wa from "../assets/svg/wa.svg";
import mail from "../assets/svg/mail.svg";
import { LINK_TYPE } from "../constants/enum";

export const footerData = {
  title: {
    it: "PROGETTIAMO IL TUO GIORNO",
    eng: "LET'S DESIGN YOUR DAY",
  },
  line1: {
    mobile: {
      it: "Il primo passo è fissare un appuntamento.",
      eng: "The first step is to schedule an appointment.",
    },
    desktop: {
      it: "Il primo passo è fissare un appuntamento.",
      eng: "The first step is to schedule an appointment.",
    },
  },
  line2: {
    mobile: {
      it: "Ma prima, rispondi ad alcune domande:",
      eng: "But first, answer a few questions:",
    },
    desktop: {
      it: "Ma prima, ho preparato un questionario per te.\nRispondi ad alcune domande: mi aiuteranno a prepararmi meglio per il nostro primo incontro",
      eng: "But first, I’ve prepared a form for you.\nAnswer a few questions: they will help me get ready for our first meeting.",
    },
  },

  images: [{ id: 1, src: footer, alt: "footer img" }],
  buttonData: {
    it: "SCRIVIMI LE TUE IDEE",
    eng: "WRITE ME YOUR IDEAS",
    url: "/form",
    linkType: LINK_TYPE.FULL,
  },
};

export const bottomSection = {
  logo: {
    svg: logoLiteWhite,
    alt: "Logo",
  },
  links: [
    {
      id: 1,
      svg: mail,
      alt: "email adress",
      url: "mailto:vanessafronterre83@gmail.com",
      linkType: LINK_TYPE.EXTERNAL,
    },
    {
      id: 2,
      svg: wa,
      alt: "whatsapp",
      url: "https://wa.me/393281323219",
      linkType: LINK_TYPE.EXTERNAL,
    },
    {
      id: 3,
      svg: fb,
      alt: "facebook",
      url: "https://www.facebook.com/vanessafronterre",
      linkType: LINK_TYPE.EXTERNAL,
    },
    {
      id: 4,
      svg: ig,
      alt: "instagram",
      url: "https://www.instagram.com/vane.wedding",
      linkType: LINK_TYPE.EXTERNAL,
    },
  ],
  address: {
    line1: "Via Rodolfo Morandi, 1",
    line2: "97016 Pozzallo (RG), Sicilia, Italia",
  },
  iva: "Vanè Wedding and event creator P.IVA xxxxxxxxxxx",

  cookies: "/cookie-policy",

  privacy: "/privacy-policy",

  madeby: "Made by MeG Siti & Social",
};
