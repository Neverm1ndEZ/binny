"use client";
import React from "react";
import {
	ArrowRightIcon,
	CalendarDaysIcon,
	MegaphoneIcon,
	NewspaperIcon,
} from "@heroicons/react/24/outline";
import {
	Button,
	Card,
	CardBody,
	Tab,
	TabPanel,
	Tabs,
	TabsBody,
	TabsHeader,
	Typography,
} from "@material-tailwind/react";

// Define interfaces for different item types
interface BaseItem {
	date: string;
	title: string;
	link: string;
	img: string;
}

interface MediaItem extends BaseItem {
	source: string;
	snippet: string;
}

interface PressItem extends BaseItem {
	snippet: string;
	tag: string;
}

interface EventItem extends BaseItem {
	description: string;
}

// Define the type for the card type prop
type CardType = "media" | "press" | "event";

// Define props interface for ImageOverlayCard
interface ImageOverlayCardProps {
	item: MediaItem | PressItem | EventItem;
	type: CardType;
}

const ImageOverlayCard: React.FC<ImageOverlayCardProps> = ({ item, type }) => {
	const openLinkInNewTab = (url: string) => {
		window.open(url, "_blank");
	};
	return (
		<Card
			className="relative overflow-hidden cursor-pointer group h-[300px]"
			onClick={() => openLinkInNewTab(item.link)}
			placeholder=""
			onPointerEnterCapture=""
			onPointerLeaveCapture=""
		>
			<div className="absolute inset-0">
				<img
					src={item.img}
					alt={item.title}
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:bg-opacity-70" />
			</div>
			<CardBody
				className="relative h-full flex flex-col justify-between text-white z-10"
				placeholder=""
				onPointerEnterCapture=""
				onPointerLeaveCapture=""
			>
				<div>
					<div className="flex justify-between items-start mb-2">
						{type === "media" && "source" in item && (
							<Typography
								variant="h6"
								className="text-green-400"
								placeholder=""
								onPointerEnterCapture=""
								onPointerLeaveCapture=""
							>
								{item.source}
							</Typography>
						)}
						<Typography
							variant="small"
							className="flex items-center"
							placeholder=""
							onPointerEnterCapture=""
							onPointerLeaveCapture=""
						>
							<CalendarDaysIcon className="w-4 h-4 mr-1" />
							{item.date}
						</Typography>
					</div>
					<Typography
						variant="h5"
						className="mb-2"
						placeholder=""
						onPointerEnterCapture=""
						onPointerLeaveCapture=""
					>
						{item.title}
					</Typography>
					<Typography
						variant="small"
						className="mb-4 opacity-80"
						placeholder=""
						onPointerEnterCapture=""
						onPointerLeaveCapture=""
					>
						{"description" in item
							? item.description
							: "snippet" in item
							? item.snippet
							: ""}
					</Typography>
				</div>
				<Button
					color="white"
					variant="text"
					className="flex items-center gap-2 w-fit"
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					Read More <ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
				</Button>
			</CardBody>
		</Card>
	);
};

export default function Newsroom() {
	const mediaHighlights: MediaItem[] = [
		{
			source: "Clean Energy Weekly",
			img: "/ss.png",
			date: "October 6, 2023",
			title: "Government is future-proofing its energy...",
			snippet:
				"Binny New Re Energy Limited (BNREL) is setting up a 195 KLPD...",
			link: "https://www.chinimandi.com/government-is-future-proofing-its-energy-demands-with-biofuel-growth-binny-new-re-energy-limited/",
		},
		{
			source: "EcoTech Today",
			img: "/binny-image.jpeg",
			date: "June 28, 2024",
			title: "BNREL signs LTOA with OMCs for ethanol supply",
			snippet:
				"The expert members of the EAC have found the proposal in order...",
			link: "https://www.chinimandi.com/bnrel-receives-ec-nod-for-its-ethanol-plant-signs-ltoa-with-omcs-for-ethanol-supply/",
		},
	];

	// const pressReleases: PressItem[] = [
	// 	{
	// 		date: "October 1, 2024",
	// 		title:
	// 			"Binny New Re Energy Achieves 500 KLPD Ethanol Production Milestone",
	// 		snippet: "Company reaches halfway mark towards 2030 bio-ethanol goal...",
	// 		tag: "Milestone",
	// 		link: "/press/milestone-achievement",
	// 		img: "/api/placeholder/400/300",
	// 	},
	// 	{
	// 		date: "September 15, 2024",
	// 		title: "Green Hydrogen Facility Construction Begins",
	// 		snippet:
	// 			"Groundbreaking ceremony marks start of 50TPD green hydrogen production plant.",
	// 		tag: "Project Update",
	// 		link: "/press/hydrogen-facility",
	// 		img: "/api/placeholder/400/300",
	// 	},
	// ];

	// const upcomingEvents: EventItem[] = [
	// 	{
	// 		date: "October 15, 2024",
	// 		title: "Renewable Energy Expo 2024",
	// 		description:
	// 			"Join us at Booth 302 to learn about our latest innovations in renewable energy.",
	// 		link: "/events/renewable-energy-expo",
	// 		img: "/api/placeholder/400/300",
	// 	},
	// 	{
	// 		date: "November 1, 2024",
	// 		title: "Q3 2024 Results Webinar",
	// 		description:
	// 			"Virtual presentation of our quarterly performance and sustainability metrics.",
	// 		link: "/events/q3-results-webinar",
	// 		img: "/api/placeholder/400/300",
	// 	},
	// ];

	return (
		<div className="max-w-6xl mx-auto px-4 py-12">
			<div className="text-center mb-12">
				<Typography
					variant="h1"
					className="mb-4"
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					Newsroom
				</Typography>
				<Typography
					variant="lead"
					color="gray"
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					Stay updated on our journey towards a sustainable energy future
				</Typography>
			</div>

			<Tabs value="media">
				<TabsHeader
					className="bg-green-50"
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					<Tab
						value="media"
						className="py-3"
						placeholder=""
						onPointerEnterCapture=""
						onPointerLeaveCapture=""
					>
						<MegaphoneIcon className="w-5 h-5 mr-2" /> Media Coverage
					</Tab>
					<Tab
						value="press"
						className="py-3"
						placeholder=""
						onPointerEnterCapture=""
						onPointerLeaveCapture=""
					>
						<NewspaperIcon className="w-5 h-5 mr-2" /> Press Releases
					</Tab>
					<Tab
						value="events"
						className="py-3"
						placeholder=""
						onPointerEnterCapture=""
						onPointerLeaveCapture=""
					>
						<CalendarDaysIcon className="w-5 h-5 mr-2" /> Events
					</Tab>
				</TabsHeader>
				<TabsBody
					animate={{
						initial: { y: 250 },
						mount: { y: 0 },
						unmount: { y: 250 },
					}}
					placeholder=""
					onPointerEnterCapture=""
					onPointerLeaveCapture=""
				>
					<TabPanel value="media" className="py-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{mediaHighlights.map((highlight, index) => (
								<ImageOverlayCard key={index} item={highlight} type="media" />
							))}
						</div>
					</TabPanel>

					{/* <TabPanel value="press" className="py-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{pressReleases.map((release, index) => (
								<ImageOverlayCard key={index} item={release} type="press" />
							))}
						</div>
					</TabPanel>

					<TabPanel value="events" className="py-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{upcomingEvents.map((event, index) => (
								<ImageOverlayCard key={index} item={event} type="event" />
							))}
						</div>
					</TabPanel> */}
				</TabsBody>
			</Tabs>
		</div>
	);
}
