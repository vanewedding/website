import { useParams } from "react-router-dom";
import { useEffect, useRef, useState, useContext, useCallback } from "react";
import Title from "../components/visual/Title";
import { albumData } from "../data/gallery";
import Image from "../components/visual/Image";
import Slider from "../components/visual/Slider";
import { RiLayoutMasonryFill, RiLayoutBottomFill } from "react-icons/ri";
import GlobalContext from "../context/GlobalContext";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import Seo from "../components/technical/seo/Seo";

export default function AlbumPage() {
  const { it, isMobile, isTablet } = useContext(GlobalContext);
  const { slug } = useParams();
  const album = albumData[slug];
  const isCompactViewport = isMobile || isTablet;

  if (!album)
    return (
      <div className="mx-5 flex justify-center items-center h-[calc(100vh-8rem)]">
        {it
          ? "Non ci sono ancora foto in questo album"
          : "There are still no pictures in this album"}
      </div>
    );

  return (
    <AlbumPageContent
      key={`${slug}-${isCompactViewport ? "compact" : "desktop"}`}
      album={album}
      it={it}
      isMobile={isMobile}
      isTablet={isTablet}
      isCompactViewport={isCompactViewport}
    />
  );
}

function AlbumPageContent({
  album,
  it,
  isMobile,
  isTablet,
  isCompactViewport,
}) {
  const shouldScrollToTopRef = useRef(false);
  const eagerImageCount = isCompactViewport ? 2 : 6;
  const [activeLayout, setActiveLayout] = useState(
    isCompactViewport ? "layoutSlider" : "layoutGrid"
  );
  const [activePicture, setActivePicture] = useState(0);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useBodyScrollLock(isLightBoxOpen);

  const closeLightbox = useCallback(() => {
    setIsLightBoxOpen(false);
    setSelectedPhoto(null);
  }, []);

  const showPreviousPhoto = useCallback(() => {
    const previousIndex =
      activePicture === 0 ? album.photos.length - 1 : activePicture - 1;
    setActivePicture(previousIndex);
    setSelectedPhoto(album.photos[previousIndex]);
  }, [activePicture, album.photos]);

  const showNextPhoto = useCallback(() => {
    const nextIndex =
      activePicture === album.photos.length - 1 ? 0 : activePicture + 1;
    setActivePicture(nextIndex);
    setSelectedPhoto(album.photos[nextIndex]);
  }, [activePicture, album.photos]);

  useEffect(() => {
    if (
      !isCompactViewport ||
      activeLayout !== "layoutSlider" ||
      !shouldScrollToTopRef.current
    ) {
      return;
    }

    shouldScrollToTopRef.current = false;

    const frameId = window.requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [activeLayout, isCompactViewport]);

  useEffect(() => {
    if (isCompactViewport || !isLightBoxOpen) {
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        showPreviousPhoto();
      }

      if (event.key === "ArrowRight") {
        showNextPhoto();
      }

      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    closeLightbox,
    isCompactViewport,
    isLightBoxOpen,
    showNextPhoto,
    showPreviousPhoto,
  ]);

  const gridColumnsClass = isCompactViewport
    ? "columns-2 md:columns-3 gap-0"
    : "columns-2 lg:columns-3 xl:columns-4 gap-0";

  const handleCompactGridPhotoClick = (index) => {
    shouldScrollToTopRef.current = true;
    if (activeLayout !== "layoutSlider") {
      setActiveLayout("layoutSlider");
    }
    setActivePicture(index);
  };

  const handleDesktopGridPhotoClick = (photo, index) => {
    setActivePicture(index);
    setSelectedPhoto(photo);
    setIsLightBoxOpen(true);
  };

  const renderAlbumGrid = (isDesktopGrid = false) => (
    <div className={gridColumnsClass}>
      {album.photos.map((img, index) => (
        <div
          key={img.src}
          onClick={() => {
            if (isDesktopGrid) {
              handleDesktopGridPhotoClick(img, index);
              return;
            }

            handleCompactGridPhotoClick(index);
          }}
          className="cursor-pointer break-inside-avoid p-3"
        >
          <Image
            src={img.thumbSrc || img.src}
            alt={it ? img.alt.it : img.alt.eng}
            isFastLoad={index === 0}
            isMask={false}
            isMobileRounded={true}
            isDesktopRounded={true}
            isMobileOverlay={false}
            isDesktopOverlay={false}
            isDesktopMask={false}
            isShadowed
            isLazy={index >= eagerImageCount}
            customStyleBox="w-full"
            customStyleImg=""
          />
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Seo
        title={`${it ? album.title.it : album.title.eng} | Vanè Wedding & Event Creator`}
        description={
          it
            ? `Scopri l'album ${album.title.it.toLowerCase()} del portfolio Vanè: matrimoni, cerimonie ed eventi progettati a Pozzallo, Ragusa e in Sicilia.`
            : `Discover the ${album.title.eng.toLowerCase()} portfolio album by Vanè, featuring bespoke weddings, destination weddings and events in Pozzallo, Ragusa and Sicily.`
        }
        image={album.photos[0]?.src}
      />
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
                renderAlbumGrid()
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
            renderAlbumGrid(true)
          )}
          {/* Lightbox */}
          {isLightBoxOpen && selectedPhoto && (
            <>
              <div className="relative w-screen h-screen">
                <div
                  className="fixed top-16 w-screen h-screen bg-black/85 "
                  onClick={closeLightbox}
                >
                  <div className="absolute right-0 mr-6 mt-6">
                    <svg
                      className="size-8 cursor-pointer text-off-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      onClick={closeLightbox}
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                  <button
                    type="button"
                    aria-label="Foto precedente"
                    className="absolute left-6 top-1/2 -translate-y-1/2 text-off-white text-5xl cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      showPreviousPhoto();
                    }}
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Foto successiva"
                    className="absolute right-6 top-1/2 -translate-y-1/2 text-off-white text-5xl cursor-pointer"
                    onClick={(event) => {
                      event.stopPropagation();
                      showNextPhoto();
                    }}
                  >
                    ›
                  </button>
                  <div className="h-[calc(100vh-4rem)] w-[80%] m-auto flex justify-center items-center">
                    <img
                      src={selectedPhoto.fullSrc || selectedPhoto.src}
                      alt={it ? selectedPhoto.alt.it : selectedPhoto.alt.eng}
                      className="h-5/6 rounded-xl object-cover"
                      onClick={(event) => event.stopPropagation()}
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
