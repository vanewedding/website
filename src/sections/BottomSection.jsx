import { Link } from "react-router-dom";

export default function BottomSection({ bottomSection, it }) {
	return (
		<section className="p-4 flex flex-wrap lg:flex-nowrap bg-brand-pink text-off-white text-xs font-light">
			{/* Figlio 1: LOGO */}
			<div className=" w-1/2  order-1">
				<img
					src={bottomSection.logo.svg}
					alt={bottomSection.logo.alt}
					className="size-16 lg:size-24"
				></img>
			</div>
			{/* Figlio 2: Social + Indirizzo */}
			<div className="w-1/2  order-2 lg:order-3 flex flex-col justify-between gap-1">
				<div className="flex gap-3 justify-end">
					{bottomSection.links.map((l) => (
						<a
							key={l.id}
							href={l.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src={l.svg}
								alt={l.alt}
								className="size-8 lg:size-6 lg:mb-6"
							/>
						</a>
					))}
				</div>
				<p className="text-end font-semibold ">{bottomSection.address.line1}</p>
				<p className="text-end font-semibold ">{bottomSection.address.line2}</p>
			</div>
			{/* Figlio 3: IVA, policies e made by */}
			<div className=" py-2 w-full  order-3 lg:order-2 flex flex-col items-center gap-4 justify-center">
				{/* Divisore */}
				<div className="h-0.5 w-full bg-off-white lg:hidden"></div>

				<p className="">{bottomSection.iva}</p>

				<div className="underline-offset-2">
					<Link
						className=" underline"
						to={
							it
								? `/it${bottomSection.cookies}`
								: `/eng${bottomSection.cookies}`
						}
					>
						Cookie policy
					</Link>
					{" | "}
					<Link
						className=" underline"
						to={
							it
								? `/it${bottomSection.privacy}`
								: `/eng${bottomSection.privacy}`
						}
					>
						Privacy Policy
					</Link>
				</div>

				<p className="">{bottomSection.madeby}</p>
			</div>
		</section>
	);
}
