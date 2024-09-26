import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Services() {
	return (
		<div className="p-4 lg:p-0">
			<div className="flex justify-start border-b border-green-700">
				<h1 className=" text-base uppercase font-semibold text-center text-green-600">
					Services
				</h1>
			</div>
			<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start py-8 gap-y-6">
				<div className="flex flex-col items-start lg:w-1/3">
					<h1 className="text-5xl font-semibold">Reliable Solar Services</h1>
					<p className="text-base lg:max-w-[320px] mt-4 font-light">
						Our solar energy company offers installation, maintenance,
						consultation, financing, monitoring, energy storage, grid
						integration, optimization.
					</p>
					<div className="flex items-start pt-40">
						<button className="flex flex-row-reverse items-center gap-3 rounded-full px-8 py-3 transition duration-300 ease-in-out group relative">
							<span className="absolute inset-0 rounded-full border-2 border-black group-hover:border-transparent"></span>
							<span className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							<MoveUpRight className="w-5 h-5 relative z-10 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
							<span className="relative z-10 group-hover:text-white transition-colors duration-300">
								Services
							</span>
						</button>
					</div>
				</div>
				<div className="flex flex-col items-start lg:w-1/2 gap-y-6">
					<Image
						src="/solar.jpg"
						alt="services"
						width={600}
						height={500}
						className="rounded"
					/>
				</div>
			</div>
		</div>
	);
}
