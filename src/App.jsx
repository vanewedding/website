import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";

//Context
import GlobalContextProvider from "./context/GlobalContextProvider";
//Layouts
import DefaultLayout from "./layouts/DefaultLayout";
//Pages
const HomePage = lazy(() => import("./pages/HomePage"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const FormPage = lazy(() => import("./pages/FormPage"));
const AlbumPage = lazy(() => import("./pages/AlbumPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// components
import Loader from "./components/visual/Loader";

//Hooks
import ScrollToTop from "./components/technical/scrollToTop/ScrollToTop";

const LOADER_SESSION_KEY = "vaneLoaderSeen";
const FIRST_LOAD_MIN_MS = 450;
const REPEAT_LOAD_MIN_MS = 0;
const SAFETY_TIMEOUT_MS = 3000;

function hasSeenLoader() {
  try {
    return window.sessionStorage.getItem(LOADER_SESSION_KEY) === "true";
  } catch {
    return false;
  }
}

function rememberLoader() {
  try {
    window.sessionStorage.setItem(LOADER_SESSION_KEY, "true");
  } catch {
    // Session storage can be unavailable in restricted browsing modes.
  }
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  //CARICAMENTO REALE
  useEffect(() => {
    const startTime = performance.now(); // quando inizia il loader
    const images = Array.from(document.images).filter(
      (img) => img.loading !== "lazy"
    );
    const totalImages = images.length;
    let loadedImages = 0;
    let didFinish = false;

    const finishLoading = () => {
      if (didFinish) return;
      didFinish = true;
      const elapsed = performance.now() - startTime;
      const minDuration = hasSeenLoader() ? REPEAT_LOAD_MIN_MS : FIRST_LOAD_MIN_MS;
      const remaining = Math.max(minDuration - elapsed, 0);
      setTimeout(() => {
        rememberLoader();
        setIsLoading(false);
      }, remaining);
    };

    if (totalImages === 0) {
      // se non ci sono immagini bloccanti, comunque aspetta almeno 1s
      finishLoading();
      return;
    }

    const imageLoaded = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        finishLoading();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        imageLoaded();
      } else {
        img.addEventListener("load", imageLoaded, { once: true });
        img.addEventListener("error", imageLoaded, { once: true });
      }
    });

    // fallback di sicurezza: evita loader infinito se un asset resta appeso
    const safetyTimer = setTimeout(() => {
      finishLoading();
    }, SAFETY_TIMEOUT_MS);

    return () => {
      clearTimeout(safetyTimer);
    };
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
        <HashRouter>
          <ScrollToTop />
          <GlobalContextProvider>
            <Suspense fallback={<Loader isLoading={true} />}>
              <Routes>
                <Route path="/it/" element={<DefaultLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="gallery" element={<GalleryPage />} />
                  <Route path="gallery/:slug" element={<AlbumPage />} />
                  <Route path="form" element={<FormPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route
                    path="privacy-policy"
                    element={<PrivacyPolicyPage />}
                  />
                  <Route path="cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>

                <Route path="/eng/" element={<DefaultLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="gallery" element={<GalleryPage />} />
                  <Route path="gallery/:slug" element={<AlbumPage />} />
                  <Route path="form" element={<FormPage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route
                    path="privacy-policy"
                    element={<PrivacyPolicyPage />}
                  />
                  <Route path="cookie-policy" element={<CookiePolicyPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/it/" />} />
              </Routes>
            </Suspense>
          </GlobalContextProvider>
        </HashRouter>
      </div>
    </>
  );
}
