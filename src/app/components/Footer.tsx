"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function Footer() {
	const menuItems = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/" },
		{ label: "Services", href: "/" },
		{ label: "Projects", href: "/" },
		{ label: "News", href: "/" },
		{ label: "Contact", href: "/" },
	];

	const lowerMenuItems = [
		{ label: "Ethanol", href: "/" },
		{ label: "Solar", href: "/" },
		{ label: "Wind", href: "/" },
		{ label: "Hydrogen", href: "/" },
	];

	return (
		<div className="mt-10 px-4 lg:px-0">
			<div className="flex justify-start border-b border-black"></div>
			<footer className="w-full bg-white py-8">
				<div className="flex flex-col md:flex-row items-center justify-center gap-y-6 md:gap-y-0 md:justify-between">
					<Image src="/full-logo.jpeg" alt="logo-ct" width={300} height={250} />
					<div className="space-y-4">
						<ul className="flex flex-wrap justify-center md:justify-end items-center gap-y-2 gap-x-4 lg:gap-x-8">
							{menuItems.map((item, index) => (
								<li key={index}>
									<Typography
										as="a"
										href={item.href}
										color="blue-gray"
										className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
										placeholder=""
										onPointerEnterCapture={() => {}}
										onPointerLeaveCapture={() => {}}
									>
										{item.label}
									</Typography>
								</li>
							))}
						</ul>
						<ul className="flex flex-wrap justify-center md:justify-end items-center gap-y-2 gap-x-4 lg:gap-x-8">
							{lowerMenuItems.map((item, index) => (
								<li key={index}>
									<Typography
										as="a"
										href={item.href}
										color="blue-gray"
										className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
										placeholder=""
										onPointerEnterCapture={() => {}}
										onPointerLeaveCapture={() => {}}
									>
										{item.label}
									</Typography>
								</li>
							))}
						</ul>
					</div>
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
