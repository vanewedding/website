import { useContext } from "react";
import Title from "../components/visual/Title";
import { notFoundData } from "../data/notFound";
import GlobalContext from "../context/GlobalContext";
import VariantComposer from "../components/visual/VariantComposer";
import Seo from "../components/technical/seo/Seo";

export default function NotFoundPage() {
  const { it } = useContext(GlobalContext);
  return (
    <>
      <Seo
        title={it ? "Pagina non trovata | Vanè Wedding & Event Creator" : "Page not found | Vanè Wedding & Event Creator"}
        description={
          it
            ? "La pagina richiesta non è disponibile."
            : "The requested page is not available."
        }
        noindex
      />
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
