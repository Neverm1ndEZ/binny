import Image from "next/image";
import React from "react";

export default function LongCard() {
	return (
		<div className="mt-10 p-4 lg:p-0">
			<h1 className="text-xl text-blue-gray-800">
				Propelling Decarbonization With
			</h1>
			<div className="flex items-center justify-between gap-x-6 p-4 w-full">
				<div className="flex relative w-[500px] h-[400px]">
					<Image
						src="/solar.jpg"
						alt="Image"
						layout="fill" // This makes the image responsive
						objectFit="cover" // Makes the image cover the container
						className="rounded"
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-y-5">
					<h2 className="text-4xl font-semibold">Solar</h2>
					<p className="max-w-[500px]">
						Our engineering capabilities help us design cost-efficient projects,
						which are backed by a thorough analysis of the land, solar
						radiation, grid connection infrastructure, and emerging
						technologies. Our project design also considers various factors such
						as the geographical location, climate conditions, temperature and
						its impact on equipment, local facilities as well as potential
						maintenance requirements. We thus ensure that all our capital
						investment projects are carried out after considering and studying
						the risks involved.
					</p>
				</div>
			</div>
			<div className="flex flex-row-reverse items-center justify-between gap-x-6 p-4 w-full">
				<div className="flex relative w-[500px] h-[400px]">
					<Image
						src="/solar.jpg"
						alt="Image"
						layout="fill" // This makes the image responsive
						objectFit="cover" // Makes the image cover the container
						className="rounded"
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-y-5">
					<h2 className="text-4xl font-semibold">Wind</h2>
					<p className="max-w-[500px]">
						Our engineering capabilities help us design cost-efficient projects,
						which are backed by a thorough analysis of the land, solar
						radiation, grid connection infrastructure, and emerging
						technologies. Our project design also considers various factors such
						as the geographical location, climate conditions, temperature and
						its impact on equipment, local facilities as well as potential
						maintenance requirements. We thus ensure that all our capital
						investment projects are carried out after considering and studying
						the risks involved.
					</p>
				</div>
			</div>
			<div className="flex items-center justify-between gap-x-6 p-4 w-full">
				<div className="flex relative w-[500px] h-[400px]">
					<Image
						src="/solar.jpg"
						alt="Image"
						layout="fill" // This makes the image responsive
						objectFit="cover" // Makes the image cover the container
						className="rounded"
					/>
				</div>
				<div className="flex flex-col justify-start items-start gap-y-5">
					<h2 className="text-4xl font-semibold">Hybrid</h2>
					<p className="max-w-[500px]">
						Our engineering capabilities help us design cost-efficient projects,
						which are backed by a thorough analysis of the land, solar
						radiation, grid connection infrastructure, and emerging
						technologies. Our project design also considers various factors such
						as the geographical location, climate conditions, temperature and
						its impact on equipment, local facilities as well as potential
						maintenance requirements. We thus ensure that all our capital
						investment projects are carried out after considering and studying
						the risks involved.
					</p>
				</div>
			</div>
		</div>
	);
}
