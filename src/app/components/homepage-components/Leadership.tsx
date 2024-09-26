"use client";
import Image from "next/image";
import React from "react";
import { Modal } from "../Modal";

interface LeadershipCardProps {
	name: string;
	position: string;
	message: string;
	imageSrc: string;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({
	name,
	position,
	message,
	imageSrc,
}) => (
	<div className="lg:pl-20 flex flex-col sm:flex-row items-center gap-6 rounded-lg shadow-2xl p-6 bg-white">
		<div className="relative w-[200px] h-[200px] flex-shrink-0">
			<Image
				src={imageSrc}
				alt={`${name} - ${position}`}
				layout="fill"
				objectFit="cover"
				className="rounded-full"
			/>
		</div>
		<div className="flex flex-col justify-start items-start gap-y-3">
			<h2 className="text-2xl font-bold text-green-600">{name}</h2>
			<h3 className="text-lg font-medium text-gray-700">{position}</h3>
			<p className="text-base text-gray-600 max-w-md">{message}</p>
			<Modal buttonText="Read More" />
		</div>
	</div>
);

export default function Leadership() {
	return (
		<div className="mt-16 px-4 lg:px-0">
			<div className="flex justify-start mb-6">
				<h1 className="text-xl uppercase font-bold text-green-700 border-b-2 border-green-500 pb-2">
					Leadership Speaks
				</h1>
			</div>
			<div className="w-full grid lg:grid-cols-2 gap-8 bg-gradient-to-b from-green-200 to-white rounded-xl p-8">
				<LeadershipCard
					name="John Doe"
					position="Managing Director"
					message="We are committed to creating a greener future. Our vision is to have a portfolio of 50 GW of RE capacity by 2030."
					imageSrc="/dummy.jpg"
				/>
				<LeadershipCard
					name="Jane Smith"
					position="Chief Sustainability Officer"
					message="Our goal is to lead the transition to renewable energy, fostering innovation and sustainable practices across the industry."
					imageSrc="/dummy.jpg"
				/>
			</div>
		</div>
	);
}
