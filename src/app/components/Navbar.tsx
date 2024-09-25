"use client";

import Image from "next/image";
import { Search, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const pathname = usePathname();

	const menuItems = [
		{ label: "Home", href: "/" },
		{ label: "About Us", href: "/about" },
		{ label: "Services", href: "/services" },
		{ label: "Projects", href: "/projects" },
		{ label: "News", href: "/news" },
		{ label: "Contact", href: "/contact" },
	];

	const lowerMenuItems = [
		{ label: "Solar Power", href: "/about" },
		{ label: "Wind Power", href: "/services" },
		{ label: "Hybrid Power", href: "/projects" },
		{ label: "Solar Parks", href: "/news" },
		{ label: "Operational Excellence", href: "/contact" },
	];

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className="flex justify-center items-center h-24 lg:h-32 w-full border-b sticky top-0 z-50 bg-white">
			<div className="w-full max-w-6xl mx-auto flex justify-between items-center px-4">
				<div>
					<Image src="/full-logo.jpeg" alt="logo-ct" width={300} height={250} />
				</div>
				{!isMobile ? (
					<>
						<div>
							<ul className="flex items-center gap-4 pb-4 border-b border-gray-600">
								{menuItems.map((item) => (
									<li key={item.label}>
										<Link href={item.href}>
											<span
												className={`px-3 py-2 rounded-md transition-colors text-sm ${
													pathname === item.href
														? "bg-black text-white"
														: "hover:bg-gray-400 transition duration-300 ease-in-out"
												}`}
											>
												{item.label}
											</span>
										</Link>
									</li>
								))}
							</ul>
							<ul className="flex items-center gap-4 pt-4">
								{lowerMenuItems.map((item) => (
									<li key={item.label}>
										<Link href={item.href}>
											<span
												className={`px-3 py-2 rounded-md transition-colors text-sm ${
													pathname === item.href
														? "bg-black text-white"
														: "hover:bg-gray-400 transition duration-300 ease-in-out"
												}`}
											>
												{item.label}
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
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
					</>
				) : (
					<button
						onClick={toggleMobileMenu}
						className="text-gray-500 hover:text-gray-700"
					>
						<Menu size={24} />
					</button>
				)}
			</div>
			{isMobile && isMobileMenuOpen && (
				<div className="fixed inset-0 bg-white z-50 pt-24">
					<div className="flex flex-col items-center">
						<ul className="flex flex-col items-center gap-4 mb-4">
							{lowerMenuItems.map((item) => (
								<li key={item.label}>
									<Link href={item.href}>
										<span
											className={`px-3 py-2 rounded-sm transition-colors ${
												pathname === item.href
													? "bg-black text-white"
													: "hover:bg-gray-400 transition duration-300 ease-in-out"
											}`}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.label}
										</span>
									</Link>
								</li>
							))}
						</ul>
						<ul className="flex flex-col items-center gap-4 mb-4">
							{menuItems.map((item) => (
								<li key={item.label}>
									<Link href={item.href}>
										<span
											className={`px-3 py-2 rounded-sm transition-colors ${
												pathname === item.href
													? "bg-black text-white"
													: "hover:bg-gray-400 transition duration-300 ease-in-out"
											}`}
											onClick={() => setIsMobileMenuOpen(false)}
										>
											{item.label}
										</span>
									</Link>
								</li>
							))}
						</ul>
						<div className="relative flex items-center gap-2">
							<input
								type="text"
								placeholder="Search..."
								className="border rounded-md px-2 py-1 mr-2"
							/>
							<button className="text-gray-500 hover:text-gray-700">
								<Search size={20} />
							</button>
						</div>
					</div>
					<button
						onClick={toggleMobileMenu}
						className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
					>
						<X size={24} />
					</button>
				</div>
			)}
		</div>
	);
}
