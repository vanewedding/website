import Title from "../components/visual/Title";
import Button from "../components/visual/Button";

export default function FormCalltoAction({ footerData, it }) {
  return (
    <section className="">
      {/* Titolo */}
      <Title
        text={it ? footerData.title.it : footerData.title.eng}
        colorBg="bg-bordeaux"
        colorTxt="text-bordeaux"
      />
      {/* mobile */}
      <div className="lg:hidden">
        <p className="text-sm text-center mt-1">
          {it ? footerData.line1.it : footerData.line1.eng}
        </p>
        <p className="text-md text-center">
          {it ? footerData.line2.mobile.it : footerData.line2.eng}
        </p>

        {/* Foto con bottone */}
        <div className="relative flex justify-center mt-4">
          <img
            src={footerData.image}
            className="w-full mask-t-from-50% brightness-50"
          />
          <Button data={footerData} it={it} isDark={true} isAbsolute={true} />
        </div>
      </div>
      {/* DESKTOP */}
      <div className="hidden lg:flex items-center gap-6 px-4 my-4">
        {/* immagine */}
        <img src={footerData.image} className="w-1/2 rounded-lg shadow-lg" />
        {/* testuale */}
        <div className="flex flex-col text-center m-auto">
          <p className="text-lg">
            {it ? footerData.line1.it : footerData.line1.eng}
          </p>
          <p className="text-sm  m-5 whitespace-pre-line">
            {it ? footerData.line2.desktop.it : footerData.line2.desktop.eng}
          </p>
          <Button data={footerData} it={it} isDark={false} />
        </div>
      </div>
    </section>
  );
}
