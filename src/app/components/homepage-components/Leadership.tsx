("");
import Image from "next/image";
import React from "react";
import { Modal } from "../Modal";

export default function Leadership() {
	return (
		<div className="mt-10 p-4 lg:p-0">
			<div className="flex justify-start border-b border-black">
				<h1 className="text-base uppercase font-semibold text-center">
					Message from our Leadership
				</h1>
			</div>
			<div className="grid lg:grid-cols-2 items-center justify-between p-4 w-full gap-y-4">
				<div className="flex items-center gap-4">
					<div className="flex relative w-[200px] h-[150px]">
						<Image
							src="/dummy.jpg"
							alt="Image"
							layout="fill" // This makes the image responsive
							objectFit="contain" // Makes the image cover the container
							className="rounded"
						/>
					</div>
					<div className="flex flex-col justify-start items-start gap-y-2">
						<h2 className="text-2xl font-semibold text-blue-500">John Doe</h2>
						<h3 className="text-base font-medium">Managing Director</h3>
						<p className="max-w-[320px] text-sm">
							We are committed to create a greener future. Our vision is to have
							a portfolio of 50 GW of RE capacity by 2030.
						</p>
						<Modal buttonText={"Read More"} />
					</div>
				</div>
				<div className="flex items-center gap-4">
					<div className="flex relative w-[200px] h-[150px]">
						<Image
							src="/dummy.jpg"
							alt="Image"
							layout="fill" // This makes the image responsive
							objectFit="contain" // Makes the image cover the container
							className="rounded"
						/>
					</div>
					<div className="flex flex-col justify-start items-start gap-y-2">
						<h2 className="text-2xl font-semibold text-blue-500">Doe John</h2>
						<h3 className="text-base font-medium">Managing Director</h3>
						<p className="max-w-[320px] text-sm">
							We are committed to create a greener future. Our vision is to have
							a portfolio of 50 GW of RE capacity by 2030.
						</p>
						<Modal buttonText={"Read More"} />
					</div>
				</div>
			</div>
		</div>
	);
}
