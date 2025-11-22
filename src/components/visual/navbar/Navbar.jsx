import { navLinks, socials, langs } from "../../../data/data";
import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { useSwitchLang } from "../../../hooks/useSwitchLang";

import GlobalContext from "../../../context/globalContext";

export default function Navbar({ isScrolled }) {
	const switchLang = useSwitchLang();
	const { lang, it, eng } = useContext(GlobalContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

	return (
		<nav
			className={`w-full flex items-center justify-between transition-all duration-500 `}
		>
			{/* Desktop Left */}

			<div className="hidden lg:flex items-center justify-around gap-4 lg:gap-8">
				{navLinks.map((link) => (
					<NavLink
						key={link.id}
						to={it ? link.pathIt : link.pathEng}
						className={`flex justify-center  ${
							isScrolled ? "text-gray-700" : "text-off-white"
						}  ${link.id != 1 ? "min-w-40" : ""} 
						${link.submenu === true ? "hover:display-block" : "display:none"}`}
					>
						{link.id === 1 ? (
							<div className="size-12">
								<img src={link.svg} alt="Logo" />
							</div>
						) : (
							<>
								<div className="font-semibold transition-all duration-300 hover:font-black">
									{it ? link.nameIt : link.nameEng}
								</div>
								{link.submenu === true ? (
									<section
										className={`hidden bg-brand-pink absolute top-16 items-center gap-4 p-4 w-64
										border-b-2 border-l-2 border-r-2 rounded-b-lg shadow-overlay-black drop-shadow-xl
										hover:flex flex-col`}
									>
										{link.submenuItems.map((sublink) => (
											<NavLink
												key={sublink.id}
												to={it ? sublink.pathIt : sublink.pathEng}
												className="font-semibold transition-all duration-300 hover:font-black"
											>
												{it ? sublink.nameIt : sublink.nameEng}
											</NavLink>
										))}
									</section>
								) : (
									""
								)}
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

			{/* Mobile Menu Button */}
			<div className={`z-50 flex items-center gap-3 lg:hidden text-off-white`}>
				<svg
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className={`size-8 cursor-pointer`}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					viewBox="0 0 24 24"
				>
					{isMenuOpen ? (
						<>
							<line x1="18" y1="6" x2="6" y2="18" />
							<line x1="6" y1="6" x2="18" y2="18" />
						</>
					) : (
						<>
							<line x1="4" y1="6" x2="20" y2="6" />
							<line x1="4" y1="12" x2="20" y2="12" />
							<line x1="4" y1="18" x2="20" y2="18" />
						</>
					)}
				</svg>
			</div>

			{/* Mobile Menu */}
			<div
				className={`transition-all duration-800 pt-16 h-screen fixed top-16 left-0 w-full flex flex-col items-center gap-10 bg-brand-pink text-off-white text-base font-semibold lg:hidden ${
					isMenuOpen ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				{navLinks.map((link) => (
					<NavLink
						key={link.id}
						to={it ? link.pathIt : link.pathEng}
						onClick={() => setIsMenuOpen(false)}
						className={`text-base ${
							isMenuOpen
								? " transition-opacity duration-1100 opacity-100"
								: " transition-opacity duration-500 opacity-0 pointer-events-none"
						}  hover:transition-all hover:duration-200 hover:font-black`}
					>
						{it ? link.nameIt : link.nameEng}
					</NavLink>
				))}

				<section className="flex justify-center items-center gap-6">
					{langs.map((l) => (
						<button
							key={l.id}
							onClick={() => {
								switchLang(l.lang);
								setIsMenuOpen(false);
							}}
							className={`${
								l.lang === lang ? "pointer-events-none" : ""
							} text-base size-6 cursor-pointer`}
						>
							<img
								src={l.svg}
								className={`${
									l.lang === lang
										? "opacity-100"
										: "opacity-25 hover:opacity-100 transition-opacity"
								} ${isMenuOpen ? " duration-300" : "opacity-0"}`}
							/>
						</button>
					))}
				</section>
			</div>

			{/* Desktop Right */}
			<div className="z-100 flex items-center gap-4 lg:gap-8">
				{socials.map((social) => (
					<a
						key={social.id}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className="size-8"
					>
						<img src={social.svg} />
					</a>
				))}
			</div>
		</nav>
	);
}
