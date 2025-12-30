import Slider from "../components/visual/Slider";
import Title from "../components/visual/Title";
import Button from "../components/visual/Button";
import { gallery } from "../data/home";

export default function GallerySection({ it, isMobile }) {
  return (
    <section>
      <Title
        text={it ? gallery.title.it : gallery.title.eng}
        colorBg="bg-bordeaux"
        colorText="text-bordeaux"
      ></Title>

      <Slider
        photos={gallery.photos}
        isMobile={isMobile}
        isAutoplay={false}
        isNavigation={true}
        isPagination={true}
        showThumbs={false}
      />

      <div className="flex justify-center mt-4">
        <Button data={gallery.buttonData} it={it} isDark={false} />
      </div>
    </section>
  );
}
