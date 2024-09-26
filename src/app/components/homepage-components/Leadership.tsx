("");
import Image from "next/image";
import React from "react";
import { Modal } from "../Modal";

export default function Leadership() {
	return (
		<div className="mt-10 px-4 lg:px-0">
			<div className="flex justify-start border-b border-green-700">
				<h1 className=" text-base uppercase font-semibold text-center text-green-600">
					Message from our Leadership
				</h1>
			</div>
			<div className="grid md:grid-cols-2 items-center justify-center lg:justify-between py-4 w-full gap-y-8">
				<LeadershipCard
					name="John Doe"
					position="Managing Director"
					message="We are committed to create a greener future. Our vision is to have a portfolio of 50 GW of RE capacity by 2030."
				/>
				<LeadershipCard
					name="Doe John"
					position="Managing Director"
					message="We are committed to create a greener future. Our vision is to have a portfolio of 50 GW of RE capacity by 2030."
				/>
			</div>
		</div>
	);
}

function LeadershipCard({
	name,
	position,
	message,
}: {
	name: string;
	position: string;
	message: string;
}) {
	return (
		<div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 rounded-lg shadow-xl p-4">
			<div className="relative w-[200px] h-[150px]">
				<Image
					src="/dummy.jpg"
					alt="Image"
					layout="fill"
					objectFit="contain"
					className="rounded"
				/>
			</div>
			<div className="flex flex-col justify-start items-start gap-y-2">
				<h2 className="text-2xl font-semibold text-green-500">{name}</h2>
				<h3 className="text-base font-medium">{position}</h3>
				<p className="max-w-[320px] text-sm">{message}</p>
				<Modal buttonText={"Read More"} />
			</div>
		</div>
	);
}
