import { useContext } from "react";
import VariantComposer from "../components/visual/VariantComposer";
import GlobalContext from "../context/GlobalContext";
import {
  aboutData,
  aboutWeddingData,
  aboutContestData,
  aboutCataniaData,
  aboutVaneData,
} from "../data/about";
import Title from "../components/visual/Title";

export default function AboutPage() {
  const { it } = useContext(GlobalContext);
  return (
    <>
      <section className="my-6">
        <Title
          text={it ? aboutData.title.it : aboutData.title.eng}
          colorBg={"bg-bordeaux"}
          colorTxt={"text-bordeaux"}
        />
        <VariantComposer
          style=""
          data={aboutData}
          it={it}
          isDark={false}
          isMask={true}
          isDesktopMask
          isPink={false}
          isRounded
          mobileLayout="logo-title-image"
          desktopLayout="logo-title-image"
          customStyleImg="h-[calc((100vh-6rem))] object-cover object-[85%_15%]"
        />
      </section>

      <section className="mb-6">
        <Title
          isLogo={true}
          logo={aboutWeddingData.logo}
          colorBg={"bg-bordeaux"}
          customBoxStyle="w-136"
        />
        <VariantComposer
          style=""
          data={aboutWeddingData}
          it={it}
          isDark={false}
          isMask={false}
          isDesktopMask={false}
          isPink={false}
          isRounded={true}
          hasButton={false}
          hasLine2={false}
          mobileLayout="slider"
          desktopLayout="text-right"
          customStyleImg="rounded-xl"
          isShadowed={true}
          isMargin={false}
        />
        <VariantComposer
          style=""
          data={aboutContestData}
          it={it}
          isDark={true}
          isMask={false}
          isDesktopMask={false}
          isPink={false}
          isRounded={true}
          hasButton={false}
          hasLine2={false}
          mobileLayout=""
          desktopLayout="text-left"
          customStyleImg="rounded-xl"
          isShadowed={true}
          isMargin={false}
        />
      </section>

      <section className="">
        <Title
          isLogo={true}
          logo={aboutCataniaData.logo}
          colorBg={"bg-bordeaux"}
          customBoxStyle="w-100"
        />
        <VariantComposer
          style=""
          data={aboutCataniaData}
          it={it}
          isDark={false}
          isMask={false}
          isDesktopMask={false}
          isPink={false}
          isRounded={true}
          hasButton={false}
          hasLine2={false}
          mobileLayout="slider"
          desktopLayout="text-right"
          customStyleImg="rounded-xl"
          isShadowed={true}
          isMargin={false}
        />
      </section>

      <section className="">
        <Title
          isLogo={true}
          logo={aboutVaneData.logo}
          colorBg={"bg-bordeaux"}
          customBoxStyle="w-48"
        />
        <VariantComposer
          style=""
          data={aboutVaneData}
          it={it}
          isDark={false}
          isMask={false}
          isDesktopMask={false}
          isPink={false}
          isDesktopRounded={true}
          hasButton={false}
          hasLine2={false}
          mobileLayout="slider"
          desktopLayout="text-left"
          isShadowed={true}
          isMargin={false}
        />
      </section>
    </>
  );
}
