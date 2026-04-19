import logo from "/logo_lite_w.svg";
import arrow from "../assets/svg/arrow.svg";
import herobg from "/img-optimized/home/hero.jpg";
import Title from "../components/visual/Title";
import { hero } from "../data/home";

export default function HeroSection({ it }) {
	return (
		<section
			className="
      h-screen w-full relative -top-16 
      flex flex-col gap-6 justify-center items-center"
		>
			{/* immagine di background */}
			<img
				src={herobg}
				alt={it ? hero.bgAlt.it : hero.bgAlt.eng}
				width="1350"
				height="1800"
				className="absolute h-full w-full object-cover object-[90%_10%]  brightness-50"
				fetchPriority="high"
			/>
			{/* logo */}
			<img
				src={logo}
				alt="Logo Vanè Wedding & Event Creator"
				className="size-16 lg:size-32 z-1"
				fetchPriority="high"
			/>
			<div className="w-full z-1">
				<Title
					text={it ? hero.title.it : hero.title.eng}
					colorBg="bg-off-white"
					colorTxt="text-off-white"
					textSize="text-md lg:text-xl"
				/>
			</div>
			{/* testo */}
			<p className="text-off-white text-center text-md lg:text-lg  whitespace-pre-line z-1">
				{it ? hero.text.it : hero.text.eng}
			</p>
			{/* scroll down */}
			<div className="absolute bottom-4 flex flex-col items-center gap-4 z-1">
				<p className="text-off-white text-center text-sm">
					{it ? hero.scroll.it : hero.scroll.eng}
				</p>
				<img
					src={arrow}
					alt={it ? hero.iconAlt.it : hero.iconAlt.eng}
					className="size-6 animate-bouncy"
					loading="lazy"
					decoding="async"
				></img>
			</div>
		</section>
	);
}
