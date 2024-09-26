"use client";
import Image from "next/image";
import React from "react";
import { Modal } from "../Modal";
import { Carousel, IconButton } from "@material-tailwind/react";

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
			<div className="w-full bg-gradient-to-b from-green-200 to-white rounded-xl p-8">
				<Carousel
					className="rounded-xl"
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
					prevArrow={({ handlePrev }) => (
						<IconButton
							variant="text"
							color="black"
							size="lg"
							onClick={handlePrev}
							className="!absolute top-2/4 left-4 -translate-y-2/4"
							placeholder=""
							onPointerEnterCapture=""
							onPointerLeaveCapture=""
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
								/>
							</svg>
						</IconButton>
					)}
					nextArrow={({ handleNext }) => (
						<IconButton
							variant="text"
							color="black"
							size="lg"
							onClick={handleNext}
							placeholder=""
							onPointerEnterCapture=""
							onPointerLeaveCapture=""
							className="!absolute top-2/4 !right-4 -translate-y-2/4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="h-6 w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</IconButton>
					)}
				>
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
				</Carousel>
			</div>
		</div>
	);
}
