import { Link } from "react-router-dom";

export default function Button({ data, it, isDark, isAbsolute }) {
	return (
		<Link
			className={`p-3 min-w-32 rounded-lg text-center font-semibold text-sm border-2
                ${isAbsolute ? "absolute top-1/2 " : ""} ${
				isDark
					? "backdrop-blur-sm text-brand-pink border-brand-pink hover:backdrop-blur-lg hover:text-off-white hover:border-off-white active:text-off-white active:border-off-white"
					: "bg-off-white text-bordeaux border-bordeaux hover:bg-none hover:text-brand-pink hover:border-brand-pink active:text-brand-pink active:border-brand-pink"
			} transition-all duration-500`}
			to={it ? `/it${data.buttonText.url}` : `/eng${data.buttonText.url}`}
		>
			{it ? data.buttonText.it : data.buttonText.eng}
		</Link>
	);
}
