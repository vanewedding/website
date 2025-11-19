import { navLinks, socials } from "../../../data/data";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useSwitchLang } from "../../../hooks/useSwitchLang";
import LogoProva from "../../../assets/LogoProva.svg";

import GlobalContext from "../../../context/globalContext";

export default function Navbar({ isScrolled }) {
  const switchLang = useSwitchLang();
  const { lang, it, eng } = useContext(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full flex items-center justify-between transition-all duration-500 `}
    >
      {/* Desktop Left */}

      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={it ? link.pathIt : link.pathEng}
            className={`group flex flex-col gap-0.5 font-bold ${
              isScrolled ? "text-gray-700" : "text-off-white"
            }`}
          >
            {link.id === 1 ? (
              <div className="size-12">
                <img src={LogoProva} alt="Logo" />
              </div>
            ) : (
              <>
                {it ? link.nameIt : link.nameEng}
                {/*<div
									className={`${
										isScrolled ? "bg-gray-700" : "bg-white"
									} h-0.5 w-0 group-hover:w-full transition-all duration-300`}
								/>*/}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="size-12"
          >
            <img src={social.svg} />
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className={`flex items-center gap-3 md:hidden `}>
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-off-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="absolute top-4 right-4 bg-danger">
          <button onClick={() => setIsMenuOpen(false)}>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {navLinks.map((link) => (
          <NavLink
            key={link.id}
            to={it ? link.pathIt : link.pathEng}
            onClick={() => setIsMenuOpen(false)}
          >
            {it ? link.nameIt : link.nameEng}
          </NavLink>
        ))}

        <section>
          <button
            className={it ? "text-amber-800" : "text-black"}
            onClick={() => {
              switchLang("it");
              setIsMenuOpen(false);
            }}
          >
            ITALIANO
          </button>

          <button
            className={eng ? "text-amber-800" : "text-black"}
            onClick={() => {
              switchLang("eng");
              setIsMenuOpen(false);
            }}
          >
            INGLESE
          </button>
        </section>
      </div>
    </nav>
  );
}
