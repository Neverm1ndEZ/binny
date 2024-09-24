"use client";

import { NextUIProvider } from "@nextui-org/react";

export function Providers({ children }: { children: React.ReactNode }) {
	return <NextUIProvider>{children}</NextUIProvider>;
}

import { ThemeProvider } from "@material-tailwind/react";

export function MaterialProvider({ children }: { children: React.ReactNode }) {
	return <ThemeProvider>{children}</ThemeProvider>;
}
