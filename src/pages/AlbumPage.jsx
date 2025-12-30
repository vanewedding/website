import { useParams } from "react-router-dom";
import { useEffect, useRef, useState, useContext } from "react";
import Macy from "macy";
import Title from "../components/visual/Title";
import { albumData } from "../data/gallery";
import Image from "../components/visual/Image";
import Slider from "../components/visual/Slider";
import { RiLayoutMasonryFill, RiLayoutBottomFill } from "react-icons/ri";
import GlobalContext from "../context/GlobalContext";
import useBodyScrollLock from "../hooks/useBodyScrollLock";

export default function AlbumPage() {
  const { it, isMobile, isTablet } = useContext(GlobalContext);
  const { slug } = useParams();
  const album = albumData[slug];
  const containerRef = useRef(null);
  console.log(album);
  const defaultLayout = isMobile || isTablet ? "layoutSlider" : "layoutGrid";
  const [activeLayout, setActiveLayout] = useState(defaultLayout);
  const [activePicture, setActivePicture] = useState(1);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  console.log(activePicture);
  useBodyScrollLock(isLightBoxOpen);

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

  if (!album)
    return (
      <div className="mx-5 flex justify-center items-center h-[calc(100vh-8rem)]">
        {it
          ? "Non ci sono ancora foto in questo album"
          : "There are still no pictures in this album"}
      </div>
    );

  return (
    <>
      <section className="my-6">
        <Title
          text={it ? album.title.it : album.title.eng}
          colorBg={"bg-bordeaux"}
        />
        <div className="my-3">
          {/* pulsanti layout */}
          {isMobile || isTablet ? (
            <>
              {/* Layout condizionale */}
              {activeLayout === "layoutGrid" ? (
                <div ref={containerRef}>
                  {album.photos.map((img) => (
                    <div
                      key={img.id}
                      onClick={() => {
                        if (activeLayout !== "layoutSlider") {
                          setActiveLayout("layoutSlider");
                        }
                        setActivePicture(img.id);
                      }}
                      className="cursor-pointer"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        isMask={false}
                        isMobileRounded={true}
                        isDesktopRounded={true}
                        isMobileOverlay={false}
                        isDesktopOverlay={false}
                        isDesktopMask={false}
                        isShadowed
                        customStyleBox="w-full p-3"
                        customStyleImg=""
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <Slider
                  activePicture={activePicture}
                  photos={album.photos}
                  showThumbs={true}
                  isMobile={true}
                  isNavigation={true}
                  isSingleSlide={true}
                  isMaskTop={false}
                  isMaskHorizontal={true}
                  isOrginalSize={true}
                  customStyleBox="h-[calc(100vh-22rem)]"
                  customSpeed={500}
                />
              )}

              <div className="fixed top-18 right-0 z-20 flex gap-3 mx-2">
                {activeLayout === "layoutGrid" ? (
                  <div
                    className="bg-off-white rounded-full p-2 text-4xl text-brand-pink cursor-pointer"
                    onClick={() =>
                      activeLayout !== "layoutSlider" &&
                      setActiveLayout("layoutSlider")
                    }
                  >
                    <RiLayoutBottomFill />
                  </div>
                ) : (
                  <div
                    className="bg-off-white  rounded-full p-2 text-4xl text-brand-pink cursor-pointer"
                    onClick={() =>
                      activeLayout !== "layoutGrid" &&
                      setActiveLayout("layoutGrid")
                    }
                  >
                    <RiLayoutMasonryFill />
                  </div>
                )}
              </div>
            </>
          ) : (
            // DESKTOP
            <div ref={containerRef}>
              {album.photos.map((img) => (
                <div
                  key={img.id}
                  onClick={() => {
                    setActivePicture(img.id);
                    setIsLightBoxOpen(true);
                  }}
                  className="cursor-pointer"
                >
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
          )}
          {/* Lightbox */}
          {isLightBoxOpen && (
            <>
              <div className="relative w-screen h-screen">
                <div className="fixed top-16 w-screen h-screen bg-black/85 ">
                  <div className="absolute right-0 mr-6 mt-6">
                    <svg
                      className="size-8 cursor-pointer text-off-white"
                      fill=""
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      onClick={() => setIsLightBoxOpen(false)}
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <div className="h-[calc(100vh-4rem)] w-[80%] m-auto flex justify-center items-center">
                    <img
                      src={album.photos[activePicture - 1].src}
                      alt={album.photos[activePicture - 1].alt}
                      className="h-5/6 rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
