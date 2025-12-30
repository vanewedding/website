import { useContext } from "react";
import VariantComposer from "./VariantComposer";
import BottomSection from "../../sections/BottomSection";
import GlobalContext from "../../context/GlobalContext";
import { footerData, bottomSection } from "../../data/footer";
import Title from "./Title";

export default function Footer() {
  const { it, isFormPage, isNotFound } = useContext(GlobalContext);
  return (
    <footer className="w-full">
      <div className={`${isFormPage || isNotFound ? "hidden" : ""}`}>
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
          mobileLayout="text-image-button"
          desktopLayout="text-right"
          isDesktopRounded={true}
          isShadowed={true}
        />
      </div>

      <BottomSection bottomSection={bottomSection} it={it} />
    </footer>
  );
}
