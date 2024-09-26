import type { Metadata } from "next";
import localFont from "next/font/local";
import NewNav from "./components/NewNav";
import "./globals.css";
import { MaterialProvider } from "./providers";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "Binny - New Re Energy Limited",
	description: "Binny - New Re Energy Limited",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<MaterialProvider>
					<NewNav />
					<div className="flex flex-col min-h-screen items-center justify-center mx-auto max-w-full">
						{children}
					</div>
				</MaterialProvider>
			</body>
		</html>
	);
}
