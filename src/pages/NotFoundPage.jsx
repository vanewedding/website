import { useEffect, useContext } from "react";
import Button from "../components/visual/Button";
import Title from "../components/visual/Title";
import notFound from "../assets/img/404.png";
import { notFoundData } from "../data/notFound";
import GlobalContext from "../context/GlobalContext";
import VariantComposer from "../components/visual/VariantComposer";

export default function NotFoundPage() {
  const { it } = useContext(GlobalContext);

  console.log("notFoundData: ", notFoundData);
  return (
    <>
      <div className="my-6 ">
        <Title
          text={it ? notFoundData.title.it : notFoundData.title.eng}
          colorBg={"bg-brand-pink"}
        ></Title>
      </div>

      <VariantComposer
        data={notFoundData}
        it={it}
        mobileLayout="image-button"
        desktopLayout="title-image-button"
        isDesktopRounded={false}
        isWrap={false}
        isPink={true}
        isDark={false}
        isMobileRounded={false}
        isMobileOverlay={false}
        isDesktopOverlay={false}
        hasLine2={false}
        isMask={false}
        isDesktopMask={false}
        isShadowed={false}
        textSize={"text-2xl"}
      />
    </>
  );
}
