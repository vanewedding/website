import logo from "../assets/svg/logo_lite_w.svg";
import Title from "../components/visual/Title";

export default function HeroSection() {
  return (
    <section
      className="
      h-screen w-full relative -top-16  bg-amber-600 
      flex flex-col gap-6 justify-center items-center"
    >
      {/* immagine di background */}
      {/* logo */}
      <img src={logo} alt="logo" className="size-16" />
      <div className="w-full">
        <Title
          text="questo è un text"
          colorBg="bg-off-white"
          colorTxt="text-off-white"
        />
      </div>
    </section>
  );
}
