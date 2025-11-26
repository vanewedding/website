// import Context
import GlobalContext from "./GlobalContext";

// import hooks
import useLang from "../hooks/useLang";
import useViewport from "../hooks/useViewport";

export default function GlobalContextProvider({ children }) {
	// prendi la lingua dal path
	const lang = useLang();
	const it = lang === "it";
	const eng = lang === "eng";
	const { isMobile, isTablet } = useViewport();

	return (
		<GlobalContext.Provider value={{ lang, it, eng, isMobile, isTablet }}>
			{children}
		</GlobalContext.Provider>
	);
}
