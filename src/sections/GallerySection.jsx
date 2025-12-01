import PhotoSlider from "../components/visual/PhotoSlider";
import Slider from "../components/visual/Slider";
import Title from "../components/visual/Title";
import Button from "../components/visual/Button";
import { gallery } from "../data/home";

export default function GallerySection({ it, isMobile }) {
	return (
		<section className="h-screen">
			<Title
				text={it ? gallery.titleIt : gallery.titleEng}
				colorBg="bg-bordeaux"
				colorText="text-bordeaux"
			></Title>

			<Slider photos={gallery.photos} isMobile={isMobile} />

			<div className="flex justify-center mt-4">
				<Button data={gallery.buttonData} it={it} isDark={false} />
			</div>
		</section>
	);
}
