"use client";

import Image from "next/image";
import { Carousel } from "../../utils/util";

export default function Hero() {
	return (
		<div className="relative w-full h-screen">
			<Carousel
				className="w-full h-full"
				navigation={({ setActiveIndex, activeIndex }) => (
					<div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
						{[0, 1].map((i) => (
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
				<div className="relative w-full h-full">
					<Image
						src="/banner5.png"
						alt="Background"
						fill
						style={{ objectFit: "cover" }}
						quality={100}
						priority
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50" />
					<HeroContent />
				</div>
				<div className="relative w-full h-full">
					<Image
						src="/Banner 1.png"
						alt="Background"
						fill
						style={{ objectFit: "cover" }}
						quality={100}
					/>
					<div className="absolute inset-0 bg-black bg-opacity-50" />
					<HeroContent />
				</div>
			</Carousel>
		</div>
	);
}

function HeroContent() {
	return (
		<div className="absolute inset-0 flex items-center justify-center">
			<div className="max-w-[1000px] w-full text-center px-4">
				<h1 className="text-3xl lg:text-7xl font-bold mb-4 text-white">
					Lean energy for{" "}
					<span className="bg-gradient-to-r from-lime-700 to-blue-300 px-4 py-1">
						bright
					</span>{" "}
					tomorrow.
				</h1>
				<p className="text-sm lg:text-base font-light mb-8 text-white max-w-2xl mx-auto">
					Join us in going solar: Save money, protect Earth, and power your
					future sustainably.
				</p>
			</div>
		</div>
	);
}
