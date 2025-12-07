import { useContext } from "react";
import VariantComposer from "./VariantComposer";
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
      <VariantComposer
        style={""}
        data={footerData}
        it={it}
        isDark={false}
        isMask={true}
        linkType="internal"
        mobileLayout="text-image-button"
        desktopLayout="text-right"
      />

      <BottomSection bottomSection={bottomSection} it={it} />
    </footer>
  );
}
