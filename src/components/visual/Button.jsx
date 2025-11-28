import { Link } from "react-router-dom";

export default function Button({ data, it, isDark, isAbsolute }) {
	return (
		<Link
			className={`max-w-60 min-w-32 m-auto p-3 rounded-lg text-center font-semibold text-xs sm:text-sm border-2 
                ${
									isAbsolute
										? "absolute top-1/2 -translate-y-1/2 "
										: "shadow-md"
								} ${
				isDark
					? "backdrop-blur-sm text-brand-pink border-brand-pink hover:backdrop-blur-lg hover:text-off-white hover:border-off-white active:text-off-white active:border-off-white"
					: "bg-off-white text-bordeaux border-bordeaux hover:bg-none hover:text-brand-pink hover:border-brand-pink active:text-brand-pink active:border-brand-pink"
			} transition-all duration-500`}
			to={it ? `/it${data.url}` : `/eng${data.url}`}
		>
			{it ? data.it : data.eng}
		</Link>
	);
}
