// react
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
// data
import { galleryData, helmetData, albumData } from "../data/gallery";
// components
import Title from "../components/visual/Title";
import VariantComposer from "../components/visual/VariantComposer";
import Seo from "../components/technical/seo/Seo";
export default function GalleryPage() {
	const { it } = useContext(GlobalContext);
	const { title, album } = galleryData;
	const seoTitle = it
		? helmetData.title
		: "Wedding & Event Portfolio in Sicily | Vanè";
	const seoDescription = it
		? helmetData.description
		: "Browse bespoke weddings, destination weddings, ceremonies and private events designed by Vanè in Pozzallo, Ragusa and Sicily.";
	const seoKeywords = it
		? helmetData.keywords
		: "wedding portfolio Sicily, destination wedding Sicily gallery, wedding planner Pozzallo portfolio, event design Ragusa, bespoke wedding design Sicily";
	return (
		<>
			<Seo
				title={seoTitle}
				description={seoDescription}
				keywords={seoKeywords}
				image={helmetData.ogimage}
			/>
			<section className="my-6">
				<Title
					text={it ? title.it : title.eng}
					colorBg={"bg-bordeaux"}
					colorTxt={"text-bordeaux"}
				/>
				<VariantComposer
					style=""
					data={album[0]}
					it={it}
					isDark={false}
					isMask={true}
					isPink={false}
					isDesktopMask={true}
					isMobileOverlay={true}
					mobileLayout="title-image-button"
					desktopLayout="title-image-button"
					isRounded={false}
					customStyleImg="h-[calc(100vh-8rem)]"
				/>
				<div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:m-4">
					{album
						.filter((data) => albumData[data.buttonData.url])
						.map((data) =>
						data.id !== 1 ? (
							<VariantComposer
								key={data.id}
								style=""
								data={data}
								it={it}
								isDark={false}
								isMask={data.id === 1} // già boolean
								isMobileOverlay={true}
								isPink={false}
								mobileLayout="title-image-button"
								desktopLayout="title-image"
								customStyleImg="h-screen lg:h-100 lg:rounded-2xl"
								customStyleBox=""
							/>
						) : null
					)}
				</div>
			</section>
		</>
	);
}
