import Image from "next/image";
import React from "react";

export default function Hero() {
	return (
		<div className="max-w-[1000px] mt-[-96px] w-full min-h-screen mx-auto text-center flex flex-col justify-center">
			<div className="flex flex-col justify-center items-center">
				<h1 className="text-3xl lg:text-7xl font-bold mb-4 max-w-[350px] lg:max-w-full">
					Lean energy for{" "}
					<span className="text-white bg-gradient-to-r from-lime-700 to-blue-300 px-4 py-1">
						bright
					</span>{" "}
					tomorrow.
				</h1>
				<p className="text-sm lg:text-base font-light mb-4 lg:mb-8 max-w-[350px] lg:max-w-full">
					Join us in going solar: Save money, protect Earth, and power your
					future sustainably.
				</p>
				<button className="flex items-center gap-3 rounded-full border border-black px-10 py-4 lg:px-14 lg:py-6 hover:bg-blue-600 hover:text-white hover:border-none transition duration-300 ease-in-out hover:scale-95 group">
					<Image
						src="/button-logo.svg"
						alt="arrow"
						width={50}
						height={50}
						className="group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300"
					/>
					<span className="mt-2">Go Solar Now!</span>
				</button>
			</div>
		</div>
	);
}
