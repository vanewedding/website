// react
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
// data
import { galleryData } from "../data/gallery";
// components
import Title from "../components/visual/Title";
import VariantComposer from "../components/visual/VariantComposer";
export default function GalleryPage() {
  const { it } = useContext(GlobalContext);
  const { title, album } = galleryData;
  console.log(title);
  return (
    <>
      <section className="my-6">
        <Title
          text={it ? title.it : title.eng}
          colorBg={"bg-bordeaux"}
          colorTxt={"text-bordeaux"}
        />
        <VariantComposer
          style=""
          data={album[0]}
          it={it}
          isDark={false}
          isMask={true}
          isPink={false}
          isDesktopMask={true}
          isMobileOverlay={true}
          mobileLayout="title-image-button"
          desktopLayout="title-image-button"
          isRounded={false}
          customStyleImg="h-[calc(100vh-8rem)]"
        />
        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:m-4">
          {album.map((data) =>
            data.id !== 1 ? (
              <VariantComposer
                key={data.id}
                style=""
                data={data}
                it={it}
                isDark={false}
                isMask={data.id === 1} // già boolean
                isMobileOverlay={true}
                isPink={false}
                mobileLayout="title-image-button"
                desktopLayout="title-image"
                customStyleImg="h-screen lg:h-100 lg:rounded-2xl"
                customStyleBox=""
              />
            ) : null
          )}
        </div>
      </section>
    </>
  );
}
