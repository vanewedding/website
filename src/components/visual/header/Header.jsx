import Navbar from "../navbar/Navbar";

export default function Header() {
	return (
		<header
			className={`px-4 h-16 fixed top-0 left-0 bg-indigo-500 w-full z-50 flex items-center`}
		>
			<Navbar />
		</header>
	);
}
