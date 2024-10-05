"use client";
import {
	Tab,
	TabPanel,
	Tabs,
	TabsBody,
	TabsHeader,
} from "@material-tailwind/react";
import FeedTheNeedy from "../components/sustainabilty-components/FeedTheNeedy";
import Perfume from "../components/sustainabilty-components/Perfume";

export default function page() {
	const data = [
		{
			label: "Feed the Needy",
			value: "feed-the-needy",
			desc: <FeedTheNeedy />,
		},
		{
			label: "Net Zero - Perfume",
			value: "net-zero-perfume",
			desc: <Perfume />,
		},
	];

	return (
		<div className="p-4">
			<Tabs value="feed-the-needy">
				<TabsHeader
					className="flex justify-center items-center bg-gray-200 p-2 w-full md:w-1/2 lg:w-1/3 mx-auto my-5"
					indicatorProps={{
						className: `absolute inset-0 z-10 h-full w bg-green-500 rounded-md shadow px-8 align-middle`,
					}}
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					{data.map(({ label, value }) => (
						<Tab
							key={value}
							value={value}
							placeholder={undefined}
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							{label}
						</Tab>
					))}
				</TabsHeader>
				<TabsBody
					placeholder={undefined}
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
					animate={{
						initial: { y: 250 },
						mount: { y: 0 },
						unmount: { y: 250 },
					}}
				>
					{data.map(({ value, desc }) => (
						<TabPanel key={value} value={value} className="p-0">
							{desc}
						</TabPanel>
					))}
				</TabsBody>
			</Tabs>
		</div>
	);
}
