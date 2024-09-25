"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Footer() {
	return (
		<div className="mt-10 p-4 lg:p-0">
			<div className="flex justify-start border-b border-black"></div>
			<footer className="w-full bg-white p-8">
				<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
					<Image src="/logo.png" alt="logo-ct" width={50} height={50} />
					<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
						<li>
							<Typography
								as="a"
								href="#"
								color="blue-gray"
								className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
								placeholder=""
								onPointerEnterCapture={() => {}}
								onPointerLeaveCapture={() => {}}
							>
								About Us
							</Typography>
						</li>
						<li>
							<Typography
								as="a"
								href="#"
								color="blue-gray"
								className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
								placeholder=""
								onPointerEnterCapture={() => {}}
								onPointerLeaveCapture={() => {}}
							>
								License
							</Typography>
						</li>
						<li>
							<Typography
								as="a"
								href="#"
								color="blue-gray"
								className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
								placeholder=""
								onPointerEnterCapture={() => {}}
								onPointerLeaveCapture={() => {}}
							>
								Contact Us
							</Typography>
						</li>
					</ul>
				</div>
				<hr className="my-8 border-blue-gray-50" />
				<Typography
					color="blue-gray"
					className="text-center font-normal"
					placeholder=""
					onPointerEnterCapture={() => {}}
					onPointerLeaveCapture={() => {}}
				>
					&copy; Binny New Re Energy Limited
				</Typography>
			</footer>
		</div>
	);
}
