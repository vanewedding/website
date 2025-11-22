import Title from "../components/visual/Title";
import Button from "../components/visual/Button";

export default function FormCalltoAction({ footerData, it }) {
	return (
		// MOBILE
		<section className="lg:hidden">
			{/* Titolo */}
			<Title
				text={it ? footerData.title.it : footerData.title.eng}
				color="bordeaux"
			/>
			<p className="text-sm text-center mt-1">
				{it ? footerData.line1.it : footerData.line1.eng}
			</p>
			<p className="text-md text-center">
				{it ? footerData.line2.it : footerData.line2.eng}
			</p>

			{/* Foto con bottone */}
			<div className="flex justify-center mt-4">
				<img
					src={footerData.image}
					className="w-full mask-t-from-50% brightness-50"
				/>
				<Button data={footerData} it={it} isDark={true} isAbsolute={true} />
			</div>
		</section>
	);
}
