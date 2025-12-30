import Title from "../components/visual/Title";
import { LINK_TYPE } from "../constants/enum";
import notFound from "../assets/img/404.png";
export const notFoundData = {
  title: {
    it: "PAGINA NON TROVATA",
    eng: "PAGE NOT FOUND",
  },
  buttonData: {
    it: "TORNA ALLA HOME",
    eng: "BACK TO HOME",
    url: "/",
    linkType: LINK_TYPE.FULL,
  },
  line1: {
    desktop: {
      it: "La festa non è qui!",
      eng: "The party is not here!",
    },
    mobile: {
      it: "La festa non è qui!",
      eng: "The party is not here!",
    },
  },
  images: [
    {
      src: notFound,
      alt: "",
      id: 1,
    },
  ],
};
