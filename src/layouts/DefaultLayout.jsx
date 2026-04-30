import { Outlet } from "react-router-dom";
import Header from "../components/visual/Header";
import Footer from "../components/visual/Footer";
import ScrollToTopButton from "../components/visual/ScrollToTopBtn";

export default function DefaultLayout() {
  // RENDER
  return (
    <div>
      {
        <>
          <a href="#main-content" className="skip-link">
            Salta al contenuto principale
          </a>
          <Header />
          <main id="main-content" tabIndex={-1}>
            <Outlet />
          </main>
          <ScrollToTopButton />
          <Footer />
        </>
      }
    </div>
  );
}
