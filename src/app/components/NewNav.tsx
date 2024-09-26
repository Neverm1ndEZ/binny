"use client";
import Image from "next/image";
import { Search, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";

export default function EnhancedNav() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [showUpperNav, setShowUpperNav] = useState(true);

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

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);

		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
			setShowUpperNav(scrollPosition < heroHeight * 0.25);
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("resize", handleResize);
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="flex justify-center items-center w-full sticky top-0 z-50 bg-white shadow-2xl transition-all duration-300">
			<div className="w-full max-w-6xl mx-auto flex flex-col justify-between items-center px-4">
				<div className="w-full flex justify-between items-center py-4">
					<div className="flex items-center ">
						<Image src="/logo.png" alt="logo-ct" width={70} height={50} />
						<div className="grid place-items-center">
							<h1 className="text-base font-medium">
								Binny New Re Energy Limited
							</h1>
							<h1 className="text-[10px]">
								Fuel Ethanol, Bio Diesel, Windmills and Solar Energy
							</h1>
						</div>
					</div>
					<div>
						{!isMobile && (
							<div
								className={`w-full transition-all duration-300 ${
									showUpperNav
										? "max-h-20 opacity-100"
										: "max-h-0 opacity-0 overflow-hidden"
								}`}
							>
								<ul className="flex items-center justify-center gap-4 py-2">
									{menuItems.map((item) => (
										<li key={item.label}>
											<a href={item.href}>
												<span className="px-3 py-2 rounded-md text-sm hover:bg-gray-300 transition duration-300 ease-in-out">
													{item.label}
												</span>
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
						{!isMobile && (
							<div className="w-full">
								<ul className="flex items-center justify-center gap-16 py-2 rounded-lg">
									{lowerMenuItems.map((item) => (
										<li key={item.label}>
											<a href={item.href}>
												<span className="flex items-center font-semibold justify-center w-20 px-3 py-2 rounded-md text-sm bg-light-green-500 text-white hover:bg-gray-700 transition duration-300 ease-in-out">
													{item.label}
												</span>
											</a>
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
					{!isMobile ? (
						<div className="flex items-center space-x-4">
							<div className="relative">
								{isSearchOpen ? (
									<div className="flex items-center">
										<input
											type="text"
											placeholder="Search..."
											className="border rounded-md px-2 py-1 mr-2"
										/>
										<button
											onClick={toggleSearch}
											className="text-gray-500 hover:text-gray-700"
										>
											<X size={20} />
										</button>
									</div>
								) : (
									<button
										onClick={toggleSearch}
										className="text-gray-500 hover:text-gray-700"
									>
										<Search size={20} />
									</button>
								)}
							</div>
						</div>
					) : (
						<>
							<button
								onClick={toggleMobileMenu}
								className="text-gray-500 hover:text-gray-700"
							>
								<Menu size={24} />
							</button>
							{/* <div className="relative mt-2">
								{isSearchOpen ? (
									<div className="flex items-center">
										<input
											type="text"
											placeholder="Search..."
											className="border rounded-md px-2 py-1 mr-2"
										/>
										<button
											onClick={toggleSearch}
											className="text-gray-500 hover:text-gray-700"
										>
											<X size={20} />
										</button>
									</div>
								) : (
									<button
										onClick={toggleSearch}
										className="text-gray-500 hover:text-gray-700"
									>
										<Search size={20} />
									</button>
								)}
							</div> */}
						</>
					)}
				</div>
			</div>
			{isMobile && isMobileMenuOpen && (
				<div className="fixed inset-0 bg-white z-50 pt-24">
					<div className="flex justify-center items-start gap-4">
						<ul className="flex flex-col items-center gap-y-10">
							{lowerMenuItems.map((item) => (
								<li key={item.label}>
									<a href={item.href}>
										<span
											className="px-3 py-2 rounded-sm hover:bg-blue-100 transition duration-300 ease-in-out"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.label}
										</span>
									</a>
								</li>
							))}
						</ul>
						<ul className="flex flex-col items-center gap-4 mb-4">
							{menuItems.map((item) => (
								<li key={item.label}>
									<a href={item.href}>
										<span
											className="px-3 py-2 rounded-sm hover:bg-gray-100 transition duration-300 ease-in-out"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.label}
										</span>
									</a>
								</li>
							))}
						</ul>
					</div>
					<button
						onClick={toggleMobileMenu}
						className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
					>
						<X size={24} />
					</button>
				</div>
			)}
		</nav>
	);
}
