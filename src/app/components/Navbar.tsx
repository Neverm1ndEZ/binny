"use client";

import React, { useState, useEffect, memo } from "react";
import Image from "next/image";
import {
	Bars3Icon,
	ChevronDownIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Bars4Icon, SunIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import {
	Collapse,
	IconButton,
	List,
	ListItem,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Navbar,
	Typography,
} from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";

const navListMenuItems = [
	{
		title: "Solar",
		description: "How we convert Solar Power into Energy",
		icon: SunIcon,
		href: "solar",
	},
	{
		title: "Wind",
		description: "Meet and learn about our dedication",
		icon: UserGroupIcon,
		href: "wind",
	},
	{
		title: "Ethanol",
		description: "Find the perfect solution for your needs.",
		icon: Bars4Icon,
		href: "ethanol",
	},
	{
		title: "Hydrogen",
		description: "Learn how we can help you achieve your goals.",
		icon: SunIcon,
		href: "hydrogen",
	},
];

const NavListMenuItem = memo(
	({
		icon: Icon,
		title,
		description,
		href,
	}: {
		icon: React.ElementType;
		title: string;
		description: string;
		href: string;
	}) => (
		<a href={`/energy/${href}`}>
			<MenuItem
				className="flex items-center gap-3 rounded-lg"
				placeholder={undefined}
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				<div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
					<Icon strokeWidth={2} className="h-6 w-6 text-gray-900" />
				</div>
				<div>
					<Typography
						variant="h6"
						color="blue-gray"
						className="flex items-center text-sm font-bold"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{title}
					</Typography>
					<Typography
						variant="paragraph"
						className="text-xs !font-medium text-blue-gray-500"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{description}
					</Typography>
				</div>
			</MenuItem>
		</a>
	),
);

NavListMenuItem.displayName = "NavListMenuItem";

const NavListMenu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const renderItems = navListMenuItems.map((item, index) => (
		<NavListMenuItem key={index} {...item} />
	));

	return (
		<>
			<Menu
				open={isMenuOpen}
				handler={setIsMenuOpen}
				offset={{ mainAxis: 20 }}
				placement="bottom"
				allowHover={true}
			>
				<MenuHandler>
					<Typography
						as="div"
						variant="small"
						className="font-medium"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						<ListItem
							className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
							selected={isMenuOpen || isMobileMenuOpen}
							onClick={() => setIsMobileMenuOpen((cur) => !cur)}
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							Energy
							<ChevronDownIcon
								strokeWidth={2.5}
								className={`h-3 w-3 transition-transform ${
									isMenuOpen ? "rotate-180" : ""
								} ${isMobileMenuOpen ? "block lg:hidden" : "hidden lg:block"}`}
							/>
						</ListItem>
					</Typography>
				</MenuHandler>
				<MenuList
					className="hidden max-w-screen-xl rounded-xl lg:block"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
						{renderItems}
					</ul>
				</MenuList>
			</Menu>
			<div className="block lg:hidden">
				<Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
			</div>
		</>
	);
};

const NavList = memo(() => {
	const router = useRouter();
	const pathname = usePathname();

	const handleClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		if (pathname === "/about" && href === "/#contact") {
			router.push("/#contact");
		} else {
			router.push(href);
		}
	};

	const navItems = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
		{ label: "Contact", href: "/#contact" },
	];

	return (
		<List
			className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			{navItems.map((item, index) => (
				<Typography
					key={index}
					as="a"
					href={item.href}
					variant="small"
					color="blue-gray"
					className="font-medium"
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					onClick={(e) =>
						handleClick(e as React.MouseEvent<HTMLAnchorElement>, item.href)
					}
				>
					<ListItem
						className="flex items-center gap-2 py-2 pr-4"
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{item.label}
					</ListItem>
				</Typography>
			))}
			<NavListMenu />
		</List>
	);
});

NavList.displayName = "NavList";

export function NavbarFinal() {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<Navbar
			className="sticky top-0 z-10 w-full max-w-none rounded-none px-0 py-2"
			placeholder={undefined}
			onPointerEnterCapture={undefined}
			onPointerLeaveCapture={undefined}
		>
			<div className="mx-auto max-w-[1320px] px-4">
				<div className="flex items-center justify-between text-blue-gray-900">
					<div className="flex items-center">
						<Image src="/logo.png" alt="logo-ct" width={70} height={50} />
						<div className="grid place-items-center">
							<h1 className="text-base font-bold">
								Binny New Re Energy Limited
							</h1>
							<h2 className="text-[10px] font-semibold">
								Fuel Ethanol, Bio Diesel, Windmills and Solar Energy
							</h2>
						</div>
					</div>
					<div className="hidden lg:block">
						<NavList />
					</div>
					<IconButton
						variant="text"
						color="blue-gray"
						className="lg:hidden"
						onClick={() => setOpenNav(!openNav)}
						placeholder={undefined}
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						{openNav ? (
							<XMarkIcon className="h-6 w-6" strokeWidth={2} />
						) : (
							<Bars3Icon className="h-6 w-6" strokeWidth={2} />
						)}
					</IconButton>
				</div>
				<Collapse open={openNav}>
					<NavList />
				</Collapse>
			</div>
		</Navbar>
	);
}
