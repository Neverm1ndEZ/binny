import withMT from "@material-tailwind/react/utils/withMT";

const config = withMT({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-gotham-sans)"],
				bold: ["var(--font-gotham-bold)"],
			},
		},
	},
	darkMode: "class",
});

export default config;
