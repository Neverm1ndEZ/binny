"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LongCard() {
	useEffect(() => {
		AOS.init({
			duration: 1000, // Adjust the duration if needed
			easing: "ease-in-out", // You can change this to other AOS options
		});
	}, []);

	return (
		<div className="mt-10 p-4 lg:p-0">
			<div className="flex justify-start border-b border-black">
				<h1 className="text-base uppercase font-semibold text-center">
					Propelling Decarbonization With
				</h1>
			</div>
			<div className="grid grid-cols-2 items-start py-6">
				<div className="relative w-[600px] h-[350px]" data-aos="zoom-in-up">
					<Image
						src="/solar-new.jpg"
						alt="Image"
						layout="fill"
						objectFit="cover"
						className="rounded"
					/>
				</div>
				<div className="grid gap-y-5">
					<h2 className="text-4xl font-semibold">Solar</h2>
					<p className="max-w-[600px]">
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
			<div className="grid grid-cols-2 items-start py-6">
				<div className="grid gap-y-5">
					<h2 className="text-4xl font-semibold">Wind</h2>
					<p className="max-w-[600px]">
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
				<div className="relative w-[600px] h-[400px]" data-aos="fade-left">
					<Image
						src="/wind_mobile.jpg"
						alt="Image"
						layout="fill" // This makes the image responsive
						objectFit="cover" // Makes the image cover the container
						className="rounded"
					/>
				</div>
			</div>
			<div className="grid grid-cols-2 items-start py-6">
				<div className="relative w-[600px] h-[400px]" data-aos="zoom-in-down">
					<Image
						src="/hydrogen.png"
						alt="Image"
						layout="fill" // This makes the image responsive
						objectFit="cover" // Makes the image cover the container
						className="rounded"
					/>
				</div>
				<div className="grid gap-y-5">
					<h2 className="text-4xl font-semibold">Hydrogen</h2>
					<p className="max-w-[600px]">
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
