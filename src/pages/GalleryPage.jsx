// react
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import { Helmet } from "react-helmet-async";
// data
import { galleryData, helmetData } from "../data/gallery";
// components
import Title from "../components/visual/Title";
import VariantComposer from "../components/visual/VariantComposer";
export default function GalleryPage() {
	const { it } = useContext(GlobalContext);
	const { title, album } = galleryData;
	return (
		<>
			<Helmet>
				<title>{helmetData.title}</title>
				<meta name="description" content={helmetData.description} />
				<meta name="keywords" content={helmetData.keywords}></meta>
				{/* Open Graph Tags */}
				<meta property="og:title" content={helmetData.ogtitle} />
				<meta property="og:type" content={helmetData.ogtype} />
				<meta property="og:description" content={helmetData.ogdescription} />
				<meta property="og:url" content={helmetData.ogurl} />
				<meta property="og:image" content={helmetData.ogimage} />
				{/* Meta Robots */}
				<meta name="robots" content="index, follow" />
				{/* Canonical Link - Per evitare duplicati */}
				<link rel="canonical" href="https://www.vanewedding.it/#/it/gallery" />
			</Helmet>
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
					{album.map((data) =>
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
