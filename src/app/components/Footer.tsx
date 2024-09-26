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
		<div className="mt-10 p-4 lg:p-0">
			<div className="flex justify-start border-b border-black"></div>
			<footer className="w-full bg-white lg:p-8">
				<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
					<Image src="/full-logo.jpeg" alt="logo-ct" width={300} height={250} />
					<div className="space-y-4">
						<ul className="flex flex-wrap items-center gap-y-2 gap-x-4 lg:gap-x-8">
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
						<ul className="flex flex-wrap items-center justify-between gap-y-2 gap-x-8">
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
				<hr className="my-4 lg:my-8 border-blue-gray-50" />
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
