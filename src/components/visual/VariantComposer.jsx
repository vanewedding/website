import Button from "./Button";
import Image from "./Image";

export default function VariantComposer({
	style = "",
	data,
	it,
	linkType = "internal",
	isDark = false,
	isMask = false,
	isRounded,
	mobileLayout = "image-button",
	desktopLayout = "text-right",
	customStyleImg,
}) {
	// ---------------- MOBILE ----------------
	const renderMobile = () => {
		switch (mobileLayout) {
			case "image-button":
				return (
					<>
						<div className="lg:hidden">
							{/* Foto con bottone */}
							<div className="relative flex justify-center mt-4">
								{data.images.map((img) => (
									<Image
										key={img.id}
										src={img.src}
										alt={img.alt}
										listSize={data.images.length}
										isMask={isMask}
										customStyleImg={customStyleImg}
									/>
								))}
								<Button
									data={data.buttonData}
									it={it}
									isDark={true}
									isAbsolute={true}
									linkType={linkType}
								/>
							</div>
						</div>
					</>
				);
			case "text-image-button":
				return (
					<div className="lg:hidden">
						{/* layout con testo */}
						<p className="text-sm text-center mt-1">
							{it ? data.line1.mobile.it : data.line1.mobile.eng}
						</p>
						<p className="text-md text-center">
							{it ? data.line2.mobile.it : data.line2.mobile.eng}
						</p>

						<div className="relative flex justify-center mt-4">
							{data.images.map((img) => (
								<Image
									key={img.id}
									src={img.src}
									alt={img.alt}
									listSize={data.images.length}
									isMask={isMask}
									customStyleImg={customStyleImg}
								/>
							))}

							<Button
								data={data.buttonData}
								it={it}
								isDark={true}
								isAbsolute={true}
								linkType={linkType}
							/>
						</div>
					</div>
				);
			case "propic-layout":
				return (
					<div className="lg:hidden px-4">
						{/*  immagine pro pic*/}
						<div className="flex justify-center my-6">
							<img
								src={data.imgPropic.src}
								alt={data.imgPropic.alt}
								className="size-64 rounded-full  border-brand-pink border-2 shadow-sm shadow-brand-pink"
							/>
						</div>

						<h3 className="text-center my-3">
							{it ? data.line1.mobile.it : data.line1.mobile.eng}
						</h3>

						<p className="text-md text-center">
							{it ? data.line2.mobile.it : data.line2.mobile.eng}
						</p>

						<div className="flex flex-col items-center gap-3 my-8">
							{data.logos.map((logo) => (
								<div className="w-96">
									<a
										key={logo.id}
										href={logo.url}
										target="_blank"
										rel="noopener noreferrer"
										className=""
									>
										<img src={logo.src} alt={logo.alt} className="w-full" />
									</a>
								</div>
								// <div className="w-36">
								// 	<img
								// 		key={logo.id}
								// 		src={logo.src}
								// 		alt={logo.alt}
								// 		className="w-full "
								// 	/>
								// </div>
							))}
							<Button
								data={data.buttonData}
								it={it}
								isDark={false}
								isAbsolute={false}
								isInternal={true}
							/>
						</div>
					</div>
				);
		}
	};
	// ---------------- DESKTOP ----------------
	const renderDesktop = () => {
		switch (desktopLayout) {
			case "text-right":
				return (
					<>
						{/* DESKTOP */}
						<div className="hidden lg:flex items-center gap-6 px-4 my-4">
							<div className="flex-[0.60] my-4 flex gap-6">
								{data.images.map((img) => (
									<Image
										key={img.id}
										src={img.src}
										alt={img.alt}
										listSize={data.images.length}
										isMask={isMask}
										isRounded={isRounded}
										customStyleImg={customStyleImg}
									/>
								))}
							</div>

							{/* testuale */}
							<div className="flex-[0.40] flex flex-col text-center m-auto">
								<p className="text-lg">
									{it ? data.line1.desktop.it : data.line1.desktop.eng}
								</p>
								<p className="text-sm  m-5 whitespace-pre-line">
									{it ? data.line2.desktop.it : data.line2.desktop.eng}
								</p>
								<Button
									data={data.buttonData}
									it={it}
									isDark={isDark}
									linkType={linkType}
								/>
							</div>
						</div>
					</>
				);
			case "text-left":
				return (
					<>
						{/* DESKTOP */}
						<div className="hidden lg:flex items-center gap-6 px-4 my-4">
							{/* testuale */}
							<div className="flex-[0.40] flex flex-col text-center m-auto">
								<p className="text-lg">
									{it ? data.line1.desktop.it : data.line1.desktop.eng}
								</p>
								<p className="text-sm  m-5 whitespace-pre-line">
									{it ? data.line2.desktop.it : data.line2.desktop.eng}
								</p>
								<Button
									data={data.buttonData}
									it={it}
									isDark={isDark}
									linkType={linkType}
								/>
							</div>
							{/* immagine */}
							<div className="flex-[0.60] my-4 flex gap-6 justify-end">
								{data.images.map((img) => (
									<Image
										key={img.id}
										src={img.src}
										alt={img.alt}
										listSize={data.images.length}
										isMask={isMask}
										isRounded={isRounded}
										customStyleImg={customStyleImg}
									/>
								))}
							</div>
						</div>
					</>
				);
			case "text-left-logo":
				return (
					<>
						<div className="hidden lg:flex items-center gap-6 px-4 my-4">
							{/* testuale */}
							<div className="flex-[0.50] flex flex-col text-center m-auto px-10">
								<p className="text-lg">
									{it ? data.line1.desktop.it : data.line1.desktop.eng}
								</p>
								<p className="text-sm  m-5 whitespace-pre-line">
									{it ? data.line2.desktop.it : data.line2.desktop.eng}
								</p>
								{/* box loghi */}
								<div className="flex justify-center gap-12 mt-2 mb-6">
									{data.logos.map((logo) => (
										<div className="w-48">
											<a
												key={logo.id}
												href={logo.url}
												target="_blank"
												rel="noopener noreferrer"
												className=""
											>
												<img src={logo.src} alt={logo.alt} className="w-full" />
											</a>
										</div>
										// <div className="w-48">
										// 	<img
										// 		key={logo.id}
										// 		src={logo.src}
										// 		alt={logo.alt}
										// 		className="w-full "
										// 	/>
										// </div>
									))}
								</div>

								<Button
									data={data.buttonData}
									it={it}
									isDark={isDark}
									linkType={linkType}
								/>
							</div>
							{/* immagine */}
							<div className="flex-[0.50] my-4 flex gap-6 justify-center">
								{data.images.map((img) => (
									<Image
										key={img.id}
										src={img.src}
										alt={img.alt}
										listSize={data.images.length}
										isMask={isMask}
										isRounded={isRounded}
										customStyleImg={customStyleImg}
									/>
								))}
							</div>
						</div>
					</>
				);
		}
	};

	return (
		<div
			className={`${
				isDark ? "bg-brand-pink text-off-white" : "bg-off-white text-bordeaux"
			} ${style}`}
		>
			{renderMobile()}
			{renderDesktop()}
		</div>
	);
}
