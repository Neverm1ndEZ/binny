"use client";

import Image from "next/image";
import { Carousel } from "../../utils/util";

export default function Hero() {
	const images = [
		"/hydrogen.png",
		"/solar-new.jpg",
		"/solar-wind.jpg",
		"/wind-web.jpg",
		"/ethanol.jpeg",
	];

	return (
		<div className="relative w-full h-screen" id="hero">
			<Carousel
				autoplay={true}
				loop={true}
				autoplayDelay={6000}
				className="w-full h-full"
				navigation={({ setActiveIndex, activeIndex }) => (
					<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
						{images.map((_, i) => (
							<span
								key={i}
								className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
									activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
								}`}
								onClick={() => setActiveIndex(i)}
							/>
						))}
					</div>
				)}
				placeholder=""
				onPointerEnterCapture={() => {}}
				onPointerLeaveCapture={() => {}}
			>
				{images.map((image) => (
					<div key={image} className="relative w-full h-full">
						<Image
							src={image}
							alt="Background"
							fill
							style={{ objectFit: "cover" }}
							quality={100}
							priority
						/>
						<div className="absolute inset-0 bg-black bg-opacity-50" />
						<HeroContent />
					</div>
				))}
			</Carousel>
		</div>
	);
}

function HeroContent() {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="max-w-[1000px] w-full text-center px-4 [text-shadow:_0_4px_0_rgb(0_0_0_/_40%)]">
				<h1 className="text-3xl lg:text-7xl font-bold mb-4 text-white">
					Clean energy for{" "}
					<span className="bg-gradient-to-r from-lime-700 to-blue-300 px-4 py-1">
						bright
					</span>{" "}
					tomorrow.
				</h1>
				<p className="text-sm lg:text-base font-light mb-8 text-white max-w-2xl mx-auto">
					Join us to go clean, protect Earth, and power your future sustainably.
				</p>
			</div>
		</div>
	);
}
