import { useContext, useState } from "react";
import Navbar from "./Navbar";
import { useScroll } from "../../hooks/useScroll";
import GlobalContext from "../../context/GlobalContext";

export default function Header() {
  const { isMobile, isHome } = useContext(GlobalContext);
  const isScrolled = useScroll(isMobile ? 30 : 10);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className={` w-full h-16 sticky top-0 left-0 flex items-center px-4 z-100 text-off-white  transition-all duration-300  ${
        isHome
          ? isScrolled
            ? "bg-brand-pink"
            : isMenuOpen
            ? "duration-800 bg-brand-pink"
            : ""
          : "bg-brand-pink"
      }`}
    >
      <Navbar
        bgColor={
          isHome
            ? isScrolled
              ? "bg-brand-pink"
              : "backdrop-blur-md"
            : "bg-brand-pink"
        }
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
}
