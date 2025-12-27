import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

//Context
import GlobalContextProvider from "./context/GlobalContextProvider";
//Layouts
import DefaultLayout from "./layouts/DefaultLayout";
//Pages
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import FormPage from "./pages/FormPage";
import AlbumPage from "./pages/AlbumPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import NotFoundPage from "./pages/NotFoundPage";

// components
import Loader from "./components/visual/Loader";

//Hooks
import ScrollToTop from "./components/technical/scrollToTop/ScrollToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  console.log("is loading: ", isLoading);
  const [showContent, setShowContent] = useState(false);

  // CARICAMENTO SIMULATO
  // useEffect(() => {
  //   const timer = setTimeout(() => setIsLoading(false), 3000); // loader finisce dopo 3s
  //   return () => clearTimeout(timer);
  // }, []);

  //CARICAMENTO REALE
  useEffect(() => {
    const startTime = performance.now(); // quando inizia il loader
    const images = document.images;
    const totalImages = images.length;
    let loadedImages = 0;

    if (totalImages === 0) {
      // se non ci sono immagini, comunque aspetta almeno 1s
      const elapsed = performance.now() - startTime;
      const remaining = Math.max(1000 - elapsed, 0);
      setTimeout(() => setIsLoading(false), remaining);
      return;
    }

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        const elapsed = performance.now() - startTime;
        const remaining = Math.max(1000 - elapsed, 0); // minimo 1s
        setTimeout(() => setIsLoading(false), remaining);
      }
    };

    Array.from(images).forEach((img) => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener("load", imageLoaded);
        img.addEventListener("error", imageLoaded);
      }
    });
  }, []);

  // quando isLoading diventa false, aspetta 1s per far scendere il loader
  useEffect(() => {
    if (!isLoading) {
      // scroll immediato in alto
      window.scrollTo(0, 0);

      // mostra il contenuto subito dopo il loader
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 0);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      {!showContent && <Loader isLoading={isLoading} />}

      <div
        className={`transition-opacity duration-500 ease-out ${
          showContent ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <BrowserRouter>
          <ScrollToTop />
          <GlobalContextProvider>
            <Routes>
              <Route path="/it/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="gallery/:slug" element={<AlbumPage />} />
                <Route path="form" element={<FormPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="cookie-policy" element={<CookiePolicyPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>

              <Route path="/eng/" element={<DefaultLayout />}>
                <Route index element={<HomePage />} />
                <Route path="gallery" element={<GalleryPage />} />
                <Route path="gallery/:slug" element={<AlbumPage />} />
                <Route path="form" element={<FormPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="cookie-policy" element={<CookiePolicyPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
              <Route path="*" element={<Navigate to="/it/" />} />
            </Routes>
          </GlobalContextProvider>
        </BrowserRouter>
      </div>
    </>
  );
}
