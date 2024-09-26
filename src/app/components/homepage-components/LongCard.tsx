"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LongCard() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
		});
	}, []);

	return (
		<div className="mt-10 px-4 lg:px-0 max-w-7xl mx-auto">
			<div className="flex justify-start border-b border-green-700">
				<h1 className=" text-base uppercase font-semibold text-center text-green-600">
					Propelling Decarbonization With
				</h1>
			</div>
			<div className="mt-4 space-y-8">
				<CardItem
					title="Solar"
					imageSrc="/solar-new.jpg"
					imagePosition="left"
				/>
				<CardItem
					title="Wind"
					imageSrc="/wind_mobile.jpg"
					imagePosition="right"
				/>
				<CardItem
					title="Hydrogen"
					imageSrc="/hydrogen.png"
					imagePosition="left"
				/>
			</div>
		</div>
	);
}

function CardItem({
	title,
	imageSrc,
	imagePosition,
}: {
	title: string;
	imageSrc: string;
	imagePosition: "left" | "right";
}) {
	return (
		<div
			className={`flex flex-col bg-gray-100 ${
				imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
			} items-start gap-6 p-4 lg:p-6 shadow-2xl rounded-lg`}
		>
			<div className="w-full lg:w-1/2" data-aos="zoom-in-up">
				<div className="relative w-full aspect-[4/3]">
					<Image
						src={imageSrc}
						alt={title}
						layout="fill"
						objectFit="cover"
						className="rounded"
					/>
				</div>
			</div>
			<div className="w-full lg:w-1/2 space-y-4">
				<h2 className="text-3xl lg:text-4xl font-semibold text-green-700">
					{title}
				</h2>
				<p className="text-sm lg:text-base">
					Our engineering capabilities help us design cost-efficient projects,
					which are backed by a thorough analysis of the land, solar radiation,
					grid connection infrastructure, and emerging technologies. Our project
					design also considers various factors such as the geographical
					location, climate conditions, temperature and its impact on equipment,
					local facilities as well as potential maintenance requirements. We
					thus ensure that all our capital investment projects are carried out
					after considering and studying the risks involved.
				</p>
			</div>
		</div>
	);
}
