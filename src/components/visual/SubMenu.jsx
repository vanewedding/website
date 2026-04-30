import { Link } from "react-router-dom";

export default function SubMenu({
	bgColor,
	isOpen = false,
	link,
	it,
}) {
	return (
		<section
			className={`
			no-scrollbar
            absolute top-16 flex flex-col  items-center gap-4 
            z-40 p-4 w-64  ${bgColor}
            border-b-2 rounded-b-lg  border-l-2 border-r-2  border-off-white drop-shadow-xl shadow-overlay-black
            transition-all duration-300
            ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
            overflow-y-scroll max-h-screen
          `}
		>
			{link.submenuItems.map((sublink) => (
				<Link
					key={sublink.id}
					to={
						it
							? `${link.pathIt}/${sublink.slug}`
							: `${link.pathEng}/${sublink.slug}`
					}
					className="font-semibold text-off-white
          transition-all duration-300 hover:font-black"
				>
					{it ? sublink.nameIt : sublink.nameEng}
				</Link>
			))}
		</section>
	);
}
