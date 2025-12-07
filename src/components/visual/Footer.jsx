import { useContext } from "react";
import ButtonSection from "../../sections/ButtonSection";
import BottomSection from "../../sections/BottomSection";
import GlobalContext from "../../context/GlobalContext";
import { footerData, bottomSection } from "../../data/footer";
import Title from "./Title";

export default function Footer() {
  const { it } = useContext(GlobalContext);
  return (
    <footer className="w-full h-60 ">
      {/* Titolo */}
      <Title
        text={it ? footerData.title.it : footerData.title.eng}
        colorBg="bg-bordeaux"
        colorTxt="text-bordeaux"
      />
      <ButtonSection
        data={footerData}
        it={it}
        isInternal={true}
        isDark={false}
        isMask={true}
      />

      <BottomSection bottomSection={bottomSection} it={it} />
    </footer>
  );
}
