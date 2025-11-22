import { useState, useEffect } from "react";

/**
 * Custom hook per rilevare se la pagina è scrollata oltre una certa soglia.
 * @param {number} threshold - la soglia in pixel per considerare la pagina "scrollata"
 * @returns {boolean} isScrolled - true se la scrollY supera la soglia
 */
export function useScroll(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    // Controllo iniziale nel caso la pagina sia già scrollata
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
