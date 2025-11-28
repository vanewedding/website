import logo from "../assets/svg/logo_lite_w.svg";
import arrow from "../assets/svg/arrow.svg";
import herobg from "../assets/img/hero.jpg";
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
				alt="hero"
				className="absolute h-full w-full object-cover object-[90%_10%] -z-10 brightness-50"
			/>
			{/* logo */}
			<img src={logo} alt="logo" className="size-16 lg:size-32" />
			<div className="w-full">
				<Title
					text={it ? hero.titleIt : hero.titleEng}
					colorBg="bg-off-white"
					colorTxt="text-off-white"
					textSize="text-md lg:text-xl"
				/>
			</div>
			{/* testo */}
			<p className="text-off-white text-center text-md lg:text-lg  whitespace-pre-line">
				{it ? hero.textIt : hero.textEng}
			</p>
			{/* scroll down */}
			<div className="absolute bottom-4 flex flex-col items-center gap-4">
				<p className="text-off-white text-center text-sm">
					{it ? hero.scrollIt : hero.scrollEng}
				</p>
				<img src={arrow} className="size-6 animate-bouncy"></img>
			</div>
		</section>
	);
}
