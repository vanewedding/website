// import Context
import GlobalContext from "./GlobalContext";

// import hooks
import useLang from "../hooks/useLang";

export default function GlobalContextProvider({ children }) {
	// prendi la lingua dal path
	const lang = useLang();
	const it = lang === "it";
	const eng = lang === "eng";

	return (
		<GlobalContext.Provider value={{ lang, it, eng }}>
			{children}
		</GlobalContext.Provider>
	);
}
