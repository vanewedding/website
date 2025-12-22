import { useContext } from "react";
import VariantComposer from "../components/visual/VariantComposer";
import GlobalContext from "../context/GlobalContext";
import { aboutData } from "../data/about";
import Title from "../components/visual/Title";

export default function AboutPage() {
	const { it } = useContext(GlobalContext);
	return (
		<>
			<section className="my-6">
				<Title
					text={it ? aboutData.title.it : aboutData.title.eng}
					colorBg={"bg-bordeaux"}
					colorTxt={"text-bordeaux"}
				/>
				<VariantComposer
					style=""
					data={aboutData}
					it
					isDark={false}
					isMask={true}
					isDesktopMask
					isPink={false}
					isRounded
					mobileLayout="logo-title-image"
					desktopLayout="logo-title-image"
					customStyleImg="h-[calc((100vh-8rem))] object-cover"
				/>
			</section>
		</>
	);
}
