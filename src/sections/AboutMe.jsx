import Title from "../components/visual/Title";
import { aboutMe } from "../data/home";
import BottomSection2 from "./ButtonSection2";
import SectionVariant from "./SectionVariant";
export default function Aboutme(it, isMobile) {
  return (
    <section>
      <Title
        text={it ? aboutMe.title.it : aboutMe.title.eng}
        colorBg="bg-bordeaux"
        colorText="text-bordeaux"
      ></Title>

      <SectionVariant
        data={aboutMe}
        it={it}
        linkType="internal"
        isDark={false}
        isMask={false}
        mobileLayout="image-button"
        desktopLayout="text-left-logo"
      />
    </section>
  );
}
