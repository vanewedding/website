import Title from "../components/visual/Title";
import { aboutMe } from "../data/home";
import BottomSection2 from "./ButtonSection2";
export default function Aboutme(it, isMobile) {
  return (
    <section>
      <Title
        text={it ? aboutMe.titleIt : aboutMe.titleEng}
        colorBg="bg-bordeaux"
        colorText="text-bordeaux"
      ></Title>
      <BottomSection2
        style={""}
        data={aboutMe}
        it={it}
        isInternal={true}
        isDark={false}
        isMask={false}
      />
    </section>
  );
}
