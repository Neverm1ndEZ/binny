"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Modal } from "../Modal";

interface CardItemProps {
	title: string;
	imageSrc: string;
	imagePosition: "left" | "right";
	description: string;
	longDescription: string;
}

const CardItem: React.FC<CardItemProps> = ({
	title,
	imageSrc,
	imagePosition,
	description,
	longDescription,
}) => {
	return (
		<div
			className={`flex flex-col ${
				imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
			} items-stretch bg-white shadow-lg rounded-xl overflow-hidden`}
			data-aos={imagePosition === "right" ? "fade-left" : "fade-right"}
		>
			<div className="w-full lg:w-1/2 h-64 lg:h-auto relative">
				<Image
					src={imageSrc}
					alt={title}
					fill
					style={{ objectFit: "cover" }}
					sizes="(max-width: 768px) 100vw, 50vw"
					className="transition-transform duration-300 hover:scale-105"
				/>
			</div>
			<div className="w-full lg:w-1/2 p-6 lg:p-8 space-y-4 flex flex-col justify-center">
				<h2 className="text-3xl lg:text-4xl font-bold text-green-700 mb-4">
					{title}
				</h2>
				<p className="text-gray-700 font-semibold">{description}</p>
				<p className="text-gray-600 leading-relaxed">{longDescription}</p>
				{/* <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300 self-start">
					Learn More
				</button> */}
				<Modal buttonText="Learn More" />
			</div>
		</div>
	);
};

const LongCard: React.FC = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: "ease-in-out",
			once: true,
		});
	}, []);

	const cardItems: CardItemProps[] = [
		{
			title: "Solar Energy",
			imageSrc: "/solar-new.jpg",
			imagePosition: "left",
			description: "Harnessing the power of the sun for a sustainable future.",
			longDescription:
				"Our solar energy solutions leverage cutting-edge photovoltaic technology to convert sunlight into clean, renewable electricity. We design and implement large-scale solar farms and rooftop installations, optimizing energy production while minimizing environmental impact. Our projects consider factors such as geographical location, solar radiation levels, and local climate conditions to ensure maximum efficiency and return on investment.",
		},
		{
			title: "Wind Power",
			imageSrc: "/wind_mobile.jpg",
			imagePosition: "right",
			description: "Capturing the force of wind to generate clean electricity.",
			longDescription:
				"Our wind power initiatives focus on both onshore and offshore wind farm development. We utilize advanced turbine technology and sophisticated wind mapping techniques to identify optimal locations for wind energy harvesting. Our projects are designed to withstand various weather conditions while maximizing energy output. We also prioritize community engagement and environmental conservation in all our wind power developments.",
		},
		{
			title: "Hydrogen Technology",
			imageSrc: "/hydrogen.png",
			imagePosition: "left",
			description: "Pioneering hydrogen solutions for a zero-emission future.",
			longDescription:
				"We're at the forefront of hydrogen technology, developing innovative solutions for clean energy storage and transportation. Our focus includes green hydrogen production through electrolysis, hydrogen fuel cell technology for vehicles, and hydrogen storage solutions for grid stabilization. We're also exploring the integration of hydrogen in industrial processes to reduce carbon emissions in hard-to-abate sectors.",
		},
	];

	return (
		<div className="mt-16 px-4 lg:px-0 max-w-7xl mx-auto">
			<div className="flex justify-start mb-8">
				<h1 className="text-xl uppercase font-bold text-green-700 border-b-2 border-green-500 pb-2">
					Propelling Decarbonization With
				</h1>
			</div>
			<div className="space-y-12">
				{cardItems.map((item, index) => (
					<CardItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default LongCard;
