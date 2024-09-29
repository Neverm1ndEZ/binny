import { CheckCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function OurPurpose() {
	return (
		<div className="w-full">
			{/* Background Image Section */}
			<div className="relative flex flex-col sm:flex-row items-center justify-start min-h-screen w-full">
				{/* Background Image */}
				<div className="absolute inset-0 -z-10 w-full h-full">
					<Image
						src="/solar-wind.jpg"
						alt="background"
						layout="fill"
						className="object-cover"
						quality={100}
						priority
					/>
				</div>
				{/* Text on top of the image */}
				<div className="max-w-[90%] sm:max-w-[70%] p-5 sm:p-10">
					<h1 className="text-2xl sm:text-4xl font-bold uppercase text-black">
						Our Purpose
					</h1>
					<p className="text-4xl sm:text-7xl font-semibold text-green-300">
						To create a carbon-free world by accelerating the clean energy
						transition
					</p>
				</div>
			</div>

			{/* Vision and Mission Section (Below the Background Image) */}
			<div className="flex flex-col sm:flex-row w-full min-h-[86vh]">
				{/* Vision Section */}
				<div className="w-full sm:w-1/2 bg-black flex items-center justify-center py-8">
					<div className="max-w-[90%] sm:max-w-[60%] p-5 sm:p-10 space-y-7">
						<h1 className="text-2xl sm:text-3xl font-bold uppercase text-white">
							Our Vision
						</h1>
						<p className="text-3xl sm:text-6xl font-medium text-green-300">
							To be the leading force in sustainable energy solutions.
						</p>
					</div>
				</div>

				{/* Mission Section */}
				<div className="w-full sm:w-1/2 bg-green-900 flex items-center justify-center py-8">
					<div className="max-w-[90%] sm:max-w-[80%] p-5 sm:p-10 space-y-5">
						<h1 className="text-2xl sm:text-4xl font-bold uppercase text-white">
							Our Mission
						</h1>
						<div className="flex items-center gap-4 text-sm sm:text-base font-medium text-green-100">
							<CheckCheck className="text-xl sm:text-2xl" /> Delivering
							innovative clean energy systems for a greener future.
						</div>
						<div className="flex items-center gap-4 text-sm sm:text-base font-medium text-green-100">
							<CheckCheck className="text-xl sm:text-2xl" /> Lorem ipsum dolor
							sit, amet consectetur adipisicing elit. Fugiat, ipsam suscipit.
							Deserunt.
						</div>
						<div className="flex items-center gap-4 text-sm sm:text-base font-medium text-green-100">
							<CheckCheck className="text-xl sm:text-2xl" /> Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Tempora doloribus soluta
							iusto corporis veritatis!
						</div>
						<div className="flex items-center gap-4 text-sm sm:text-base font-medium text-green-100">
							<CheckCheck className="text-xl sm:text-2xl" /> Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Optio soluta quas ut,
							debitis quidem minima iste?
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
