import Navbar from "../navbar/Navbar";
import { useState, useEffect } from "react";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  // find scroll more then 60px and add background
  useEffect(() => {
    const handleScroll = () => {
      let isScroll = window.scrollY > 10;
      setIsScrolled(isScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log(isScrolled);
  }, [isScrolled]);

  return (
    <header
      className={`${`w-full h-16 sticky top-0 left-0 flex items-center z-50 bg-brand-pink px-4`} ${
        isScrolled
          ? "bg-overlay-white shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      <Navbar isScrolled={isScrolled} />
    </header>
  );
}
