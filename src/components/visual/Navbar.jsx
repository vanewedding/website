import { navLinks, socials, langs } from "../../data/header";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useSwitchLang } from "../../hooks/useSwitchLang";
import SubMenu from "./SubMenu";

import GlobalContext from "../../context/GlobalContext";

export default function Navbar({ bgColor, isMenuOpen, setIsMenuOpen }) {
	const switchLang = useSwitchLang();
	const { lang, it } = useContext(GlobalContext);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [desktopSubmenuOpenId, setDesktopSubmenuOpenId] = useState(null);
	const location = useLocation();

	useEffect(() => {
		let isMounted = true;

		queueMicrotask(() => {
			if (!isMounted) return;
			setIsMenuOpen(false);
			setIsSubmenuOpen(false);
		});

		return () => {
			isMounted = false;
		};
	}, [location.pathname, setIsMenuOpen]);

	return (
		<nav
			className={`relative z-50 w-full flex items-center justify-between transition-all duration-500`}
		>
			{/* Desktop Left */}
			<div className="hidden lg:flex items-center justify-around gap-4 lg:gap-8">
				{/* Links */}
				{navLinks.map((link) => (
					<div
						key={link.id}
						className="relative flex flex-col items-center"
						onMouseEnter={() =>
							link.submenu ? setDesktopSubmenuOpenId(link.id) : undefined
						}
						onMouseLeave={() =>
							link.submenu ? setDesktopSubmenuOpenId(null) : undefined
						}
						onFocus={() =>
							link.submenu ? setDesktopSubmenuOpenId(link.id) : undefined
						}
					>
						<NavLink
							to={it ? link.pathIt : link.pathEng}
							onClick={() => {
								setIsSubmenuOpen(false);
								setIsMenuOpen(false);
							}}
							className={`flex justify-center items-center group h-16 ${
								link.id !== 1 ? "min-w-40" : ""
							}`}
						>
							{link.id === 1 ? (
								<div className="size-12">
									<img src={link.svg} alt="Logo Vanè Wedding & Event Creator" />
								</div>
							) : (
								<div className="font-semibold transition-all duration-300 hover:font-black">
									{it ? link.nameIt : link.nameEng}
								</div>
							)}
						</NavLink>

						{/* submenu */}
						{link.submenu && (
							<SubMenu
								bgColor={bgColor}
								isOpen={desktopSubmenuOpenId === link.id}
								link={link}
								it={it}
							/>
						)}
					</div>
				))}
			</div>

			{/* Mobile Menu Button */}
			<div className={`z-50 flex items-center gap-3 lg:hidden text-off-white`}>
				<button
					type="button"
					onClick={() => {
						setIsMenuOpen(!isMenuOpen);
						setIsSubmenuOpen(false);
					}}
					className="size-8 cursor-pointer border-0 bg-transparent p-0 text-current"
					aria-label={
						isMenuOpen
							? it
								? "Chiudi menu"
								: "Close menu"
							: it
							? "Apri menu"
							: "Open menu"
					}
					aria-expanded={isMenuOpen}
					aria-controls="mobile-menu"
				>
					<svg
						className="size-8"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						viewBox="0 0 24 24"
						aria-hidden="true"
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
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				id="mobile-menu"
				className={`no-scrollbar fixed top-16 left-0 flex flex-col items-center lg:hidden
			 h-[calc(100vh-4rem)] w-full justify-center  text-off-white text-base font-semibold 
			transition-all duration-800 overflow-y-auto 
			${
				isMenuOpen
					? `translate-y-0 ${bgColor} pointer-events-auto z-40`
					: "-translate-y-full pointer-events-none"
			}`}
				aria-hidden={!isMenuOpen}
			>
				{/* Links */}
				{navLinks.map((link) => {
					const isOpen = isSubmenuOpen;

					return (
						<div key={link.id} className="flex flex-col items-center">
							{/* main link */}
							<NavLink
								to={it ? link.pathIt : link.pathEng}
								onClick={() => {
									setIsMenuOpen(false);
									setIsSubmenuOpen(false);
								}}
								className={`text-2xl my-3 hover:font-black transition-all ${
									isMenuOpen
										? "opacity-100 duration-100"
										: "opacity-0 duration-500 pointer-events-none"
								}`}
							>
								{it ? link.nameIt : link.nameEng}
							</NavLink>

							{/* dropdown */}
							{link.submenu && (
								<>
									{/* trigger */}
									<button
										type="button"
										onClick={() => setIsSubmenuOpen((prev) => !prev)}
										className={` cursor-pointer text-2xl my-3 hover:font-black transition-all ${
											isMenuOpen
												? "opacity-100 duration-100"
												: "opacity-0 duration-500 pointer-events-none"
										}`}
										aria-label={
											isOpen
												? it
													? link.ariaLabel.close.it
													: link.ariaLabel.close.eng
												: it
												? link.ariaLabel.open.it
												: link.ariaLabel.open.eng
										}
									>
										{it ? link.submenuNameIt : link.submenuNameEng}
										<span
											className={`transition-transform duration-300 ${
												isOpen ? "rotate-180" : ""
											}`}
										>
											▾
										</span>
									</button>

									{/* content */}
									{isOpen && (
										<div className="flex flex-col items-center mt-2">
											{link.submenuItems.map((item) => (
												<Link
													key={item.id}
													to={`${it ? link.pathIt : link.pathEng}/${item.slug}`}
													onClick={() => {
														setIsMenuOpen(false);
														setIsSubmenuOpen(false);
													}}
													className="text-base my-2 hover:font-black transition-all"
												>
													{it ? item.nameIt : item.nameEng}
												</Link>
											))}
										</div>
									)}
								</>
							)}
						</div>
					);
				})}

				{/* langs mobile */}
				<section className="my-3 flex justify-center items-center gap-6 pb-50">
					{langs.map((l) => (
						<button
							key={l.id}
							onClick={() => {
								switchLang(l.lang);
								setIsMenuOpen(false);
								setIsSubmenuOpen(false);
							}}
							className={`${
								l.lang === lang ? "pointer-events-none" : ""
							} text-base size-6 cursor-pointer`}
							aria-label={it ? l.ariaLabel.it : l.ariaLabel.eng}
						>
							<img
								src={l.svg}
								alt={it ? l.alt.it : l.alt.eng}
								className={`transition-opacity duration-300 
					${
						isMenuOpen
							? l.lang === lang
								? "opacity-100"
								: "opacity-25 hover:opacity-100"
							: "opacity-0 pointer-events-none"
					}`}
							/>
						</button>
					))}
				</section>
			</div>

			{/* Desktop Right */}
			<div className="z-100 flex items-center gap-4 lg:gap-8">
				{/* Langs */}
				<section className="hidden lg:flex justify-center items-center gap-6 my-3">
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
							aria-label={it ? l.ariaLabel.it : l.ariaLabel.eng}
						>
							<img
								src={l.svg}
								alt={it ? l.alt.it : l.alt.eng}
								className={`transition-opacity duration-300 
					${l.lang === lang ? "opacity-100" : "opacity-25 hover:opacity-100"}`}
							/>
						</button>
					))}
				</section>

				{/* Socials */}
				{socials.map((social) => (
					<a
						key={social.id}
						href={social.url}
						target="_blank"
						rel="noopener noreferrer"
						className={`${
							isMenuOpen ? "block" : "hidden"
						}  lg:block size-8 transition-all duration-200 ease-in-out hover:scale-105`}
						aria-label={it ? social.ariaLabel.it : social.ariaLabel.eng}
					>
						<img src={social.svg} alt={it ? social.alt.it : social.alt.eng} />
					</a>
				))}
			</div>
			<Link
				to={it ? "/it/form" : "/eng/form"}
				className={`
    ${isMenuOpen ? "hidden" : "block"}
    text-xl font-bold
    transform transition-transform duration-300 ease-out
    hover:scale-x-110
    origin-center
    z-1
    lg:hidden
  `}
			>
				{it ? "SCRIVIMI" : "WRITE ME"}
			</Link>
		</nav>
	);
}
