import { useContext } from "react";
import FormCalltoAction from "../../sections/FormCallToAction";
import BottomSection from "../../sections/BottomSection";
import GlobalContext from "../../context/GlobalContext";
import { footerData, bottomSection } from "../../data/footer";

export default function Footer() {
	const { it } = useContext(GlobalContext);
	return (
		<footer className="w-full h-60 ">
			<FormCalltoAction footerData={footerData} it={it} />

			<BottomSection bottomSection={bottomSection} it={it} />
		</footer>
	);
}
