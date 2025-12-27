// import Hooks
import { useEffect, useState } from "react";
import arr from "../../assets/svg/arrow_pink.svg";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // RENDER
  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to Top"
      className={`
    fixed bottom-6 right-4 z-9999
    size-10 rounded-full
    bg-off-white text-primary-brown
    border border-bordeaux 
    transition-all duration-300 ease-in-out
    flex items-center justify-center
    ${
      isVisible
        ? "opacity-80 translate-y-0 cursor-pointer pointer-events-auto hover:opacity-100"
        : "opacity-0 translate-y-5 pointer-events-none"
    }
  `}
    >
      <div className="rotate-180 w-5">
        <img src={arr} alt="" />
      </div>
    </button>
  );
}
