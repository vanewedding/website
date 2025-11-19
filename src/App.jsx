import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

//Context
import GlobalContextProvider from "./context/GlobalContextProvider";
//Layouts
import DefaultLayout from "./layouts/DefaultLayout";
//Pages
import HomePage from "./pages/home/HomePage";
import GalleryPage from "./pages/gallery/GalleryPage";
import AboutPage from "./pages/about/AboutPage";
import FormPage from "./pages/form/FormPage";
import PrivacyPolicyPage from "./pages/privacyPolicy/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/cookiePolicy/CookiePolicyPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

//Hooks
import ScrollToTop from "./components/technical/scrollToTop/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GlobalContextProvider>
        <Routes>
          <Route path="/it/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="galleria" element={<GalleryPage />} />
            <Route path="questionario" element={<FormPage />} />
            <Route path="su-di-me" element={<AboutPage />} />
            <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="cookie-policy" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="/eng/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="gallery" element={<GalleryPage />} />
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
  );
}
