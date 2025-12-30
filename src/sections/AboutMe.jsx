import Title from "../components/visual/Title";
import { aboutMe } from "../data/home";
import VariantComposer from "../components/visual/VariantComposer";
export default function Aboutme(it) {
  return (
    <section>
      <Title
        text={it ? aboutMe.title.it : aboutMe.title.eng}
        colorBg="bg-bordeaux"
        colorText="text-bordeaux"
      ></Title>

      <VariantComposer
        data={aboutMe}
        it={it}
        isDark={false}
        isDesktopMask={false}
        mobileLayout="propic-layout"
        desktopLayout="text-left-logo"
        isMobileRounded={false}
        isDesktopRounded={true}
        isShadowed={true}
      />
    </section>
  );
}
