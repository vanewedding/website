import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/visual/Header";
import Footer from "../components/visual/Footer";
import ScrollToTopButton from "../components/visual/ScrollToTopBtn";

export default function DefaultLayout() {
  // RENDER
  return (
    <div>
      {
        <>
          <Header />
          <main>
            <Outlet />
          </main>
          <ScrollToTopButton />
          <Footer />
        </>
      }
    </div>
  );
}
