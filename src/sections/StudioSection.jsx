import Slider from "../components/visual/Slider";
import Title from "../components/visual/Title";
import ButtonSection from "./ButtonSection";

import { studio } from "../data/home";
export default function StudioSection({ it, isMobile }) {
  return (
    <section className="my-8">
      <Title
        text={it ? studio.titleIt : studio.titleEng}
        colorBg="bg-bordeaux"
        colorText="text-bordeaux"
      ></Title>
      <Slider photos={studio.photos} isMobile={isMobile} />
      <ButtonSection
        it={it}
        data={studio}
        isInternal={false}
        isDark={true}
        isMask={false}
        style={"mt-8"}
      ></ButtonSection>
    </section>
  );
}
