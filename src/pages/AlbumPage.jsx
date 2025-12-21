import { useParams } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react";
import Macy from "macy";
import Title from "../components/visual/Title";
import { albumData } from "../data/gallery";
import Image from "../components/visual/Image";
import Slider from "../components/visual/Slider";
import { RiLayoutMasonryFill, RiLayoutBottomFill } from "react-icons/ri";
import GlobalContext from "../context/GlobalContext";

export default function AlbumPage() {
  const { it } = useContext(GlobalContext);
  const { slug } = useParams();
  const album = albumData[slug];
  const containerRef = useRef(null);
  console.log(album);

  const [activeLayout, setActiveLayout] = useState("layout2");

  // inizializza Macy
  useEffect(() => {
    if (!album || !containerRef.current) return;

    const macyInstance = Macy({
      container: containerRef.current,
      trueOrder: false, // mantiene l’ordine naturale o meno
      waitForImages: true, // attende il caricamento delle immagini
      columns: 4, // default numero di colonne
      margin: 0,
      padding: 0,
      breakAt: {
        1024: 4,
        768: 3,
        480: 2,
      },
    });

    return () => macyInstance.remove(); // cleanup
  }, [album, activeLayout]);

  if (!album) return <div className="m-6">Album non trovato</div>;

  return (
    <>
      <Title
        text={it ? album.title.it : album.title.eng}
        colorBg={"bg-bordeaux"}
      />
      <section className="">
        {/* pulsanti layout */}

        {/* Layout condizionale */}
        {activeLayout === "layout1" ? (
          <div ref={containerRef}>
            {album.photos.map((img) => (
              <div key={img.id}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  isMask={false}
                  isMobileRounded={true}
                  isDesktopRounded={true}
                  customStyleBox="w-full p-3"
                  isMobileOverlay={false}
                  isDesktopOverlay={false}
                  isDesktopMask={false}
                  isShadowed
                />
              </div>
            ))}
          </div>
        ) : (
          <Slider
            photos={album.photos}
            showThumbs={true}
            isMobile={true}
            isNavigation={true}
            isSingleSlide={true}
            isMaskTop={false}
          />
        )}
        <div className="fixed top-20 right-0 z-20 flex gap-3 mx-4">
          {activeLayout === "layout1" ? (
            <RiLayoutBottomFill
              onClick={() =>
                activeLayout !== "layout2" && setActiveLayout("layout2")
              }
              className="bg-off-white vrounded-full p-2 text-5xl text-brand-pink cursor-pointer"
            />
          ) : (
            <RiLayoutMasonryFill
              onClick={() =>
                activeLayout !== "layout1" && setActiveLayout("layout1")
              }
              className="bg-off-white  rounded-full p-2 text-5xl text-brand-pink cursor-pointer"
            />
          )}
        </div>
      </section>
    </>
  );
}
