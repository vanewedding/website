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
      <Slider photos={studio.photos} isMobile={isMobile} />
      <VariantComposer
        style={"mt-8"}
        data={studio}
        it={it}
        linkType="external"
        isDark={true}
        isMask={false}
        mobileLayout="image-button"
        desktopLayout="text-right"
        customStyleImg="max-h-64"
      />
    </section>
  );
}
