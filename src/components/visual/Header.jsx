import Navbar from "./Navbar";
import { useState, useEffect } from "react";
export default function Header() {
	return (
		<header className="w-full h-16 sticky top-0 left-0 flex items-center bg-brand-pink text-off-white px-4 z-100 ">
			<Navbar />
		</header>
	);
}
