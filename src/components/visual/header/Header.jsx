import Navbar from "../navbar/Navbar";

export default function Header() {
	return (
		<header
			className={`w-full h-16 
				fixed top-0 left-0 
				flex items-center z-50
				bg-brand-pink
				px-4`}
		>
			<Navbar />
		</header>
	);
}
