import Slider from "../components/visual/Slider";
import Title from "../components/visual/Title";
import VariantComposer from "../components/visual/VariantComposer";

import { studio } from "../data/home";
export default function StudioSection({ it, isMobile }) {
  return (
    <section className="my-8">
      <Title
        text={it ? studio.title.it : studio.title.eng}
        colorBg="bg-bordeaux"
        colorText="text-bordeaux"
      ></Title>
      <Slider
        photos={studio.photos}
        isMobile={isMobile}
        isAutoplay={false}
        isNavigation={true}
        isPagination={true}
        showThumbs={false}
      />
      <VariantComposer
        style={"mt-8"}
        data={studio}
        it={it}
        isDark={true}
        isMask={false}
        mobileLayout="image-button"
        desktopLayout="text-right"
        isMobileOverlay={true}
        isShadowed={true}
        isMobileRounded={false}
        isDesktopRounded={true}
      />
    </section>
  );
}
