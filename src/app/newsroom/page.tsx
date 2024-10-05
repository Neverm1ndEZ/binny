"use client";
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
import { Modal } from "../components/Modal";

export default function page() {
	const pressReleases = [
		{
			date: "October 1, 2024",
			title:
				"Binny New Re Energy Achieves 500 KLPD Ethanol Production Milestone",
			snippet:
				"Company reaches halfway mark towards 2030 bio-ethanol portfolio goal ahead of schedule.",
			tag: "Milestone",
		},
		{
			date: "September 15, 2024",
			title: "Green Hydrogen Facility Construction Begins",
			snippet:
				"Groundbreaking ceremony marks start of 50TPD green hydrogen production plant.",
			tag: "Project Update",
		},
		{
			date: "August 28, 2024",
			title: "Q2 2024 Sustainability Report Released",
			snippet:
				"Report highlights 40% reduction in carbon footprint across operations.",
			tag: "Report",
		},
	];

	const mediaHighlights = [
		{
			source: "Clean Energy Weekly",
			date: "September 25, 2024",
			title: "Binny New Re Energy Leading the Renewable Revolution",
			snippet:
				"Feature article on our innovative approach to sustainable energy production.",
		},
		{
			source: "EcoTech Today",
			date: "September 10, 2024",
			title: "The Future of Green Hydrogen in India",
			snippet: "Interview with our CEO on upcoming green hydrogen facility.",
		},
	];

	const upcomingEvents = [
		{
			date: "October 15, 2024",
			title: "Renewable Energy Expo 2024",
			description:
				"Join us at Booth 302 to learn about our latest innovations in renewable energy.",
		},
		{
			date: "November 1, 2024",
			title: "Q3 2024 Results Webinar",
			description:
				"Virtual presentation of our quarterly performance and sustainability metrics.",
		},
	];

	return (
		<div className="max-w-6xl mx-auto px-4 py-12">
			{/* Hero Section */}
			<div className="text-center mb-12">
				<Typography
					variant="h1"
					className="mb-4"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Newsroom
				</Typography>
				<Typography
					variant="lead"
					color="gray"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Stay updated on our journey towards a sustainable energy future
				</Typography>
			</div>

			{/* Main Content */}
			<Tabs value="press">
				<TabsHeader
					className="bg-green-50"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<Tab
						value="press"
						className="py-3"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						<NewspaperIcon className="w-5 h-5 mr-2" />
						Press Releases
					</Tab>
					<Tab
						value="media"
						className="py-3"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						<MegaphoneIcon className="w-5 h-5 mr-2" />
						Media Coverage
					</Tab>
					<Tab
						value="events"
						className="py-3"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						<CalendarDaysIcon className="w-5 h-5 mr-2" />
						Events
					</Tab>
				</TabsHeader>
				<TabsBody
					animate={{
						initial: { y: 250 },
						mount: { y: 0 },
						unmount: { y: 250 },
					}}
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<TabPanel value="press" className="py-4">
						<div className="grid gap-6">
							{pressReleases.map((release, index) => (
								<Card
									key={index}
									className="overflow-hidden"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									<CardBody
										placeholder=""
										onPointerEnterCapture={undefined}
										onPointerLeaveCapture={undefined}
									>
										<div className="flex justify-between items-start mb-2">
											<Typography
												variant="small"
												color="gray"
												className="flex items-center"
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
											>
												<CalendarDaysIcon className="w-4 h-4 mr-1" />
												{release.date}
											</Typography>
											<Typography
												variant="small"
												color="green"
												className="bg-green-50 px-2 py-1 rounded"
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
											>
												{release.tag}
											</Typography>
										</div>
										<Typography
											variant="h5"
											color="blue-gray"
											className="mb-2"
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
										>
											{release.title}
										</Typography>
										<Typography
											color="gray"
											className="mb-4"
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
										>
											{release.snippet}
										</Typography>
										<Modal buttonText="Read More" />
									</CardBody>
								</Card>
							))}
						</div>
					</TabPanel>
					<TabPanel value="media" className="py-4">
						<div className="grid gap-6">
							{mediaHighlights.map((highlight, index) => (
								<Card
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
									key={index}
									className="overflow-hidden"
								>
									<CardBody
										placeholder=""
										onPointerEnterCapture={undefined}
										onPointerLeaveCapture={undefined}
									>
										<div className="flex justify-between items-start mb-2">
											<Typography
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
												variant="h6"
												color="green"
											>
												{highlight.source}
											</Typography>
											<Typography
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
												variant="small"
												color="gray"
												className="flex items-center"
											>
												<CalendarDaysIcon className="w-4 h-4 mr-1" />
												{highlight.date}
											</Typography>
										</div>
										<Typography
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
											variant="h5"
											color="blue-gray"
											className="mb-2"
										>
											{highlight.title}
										</Typography>
										<Typography
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
											color="gray"
											className="mb-4"
										>
											{highlight.snippet}
										</Typography>
										<Button
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
											color="green"
											variant="text"
											className="flex items-center gap-2"
										>
											Read Article{" "}
											<ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</TabPanel>
					<TabPanel value="events" className="py-4">
						<div className="grid gap-6">
							{upcomingEvents.map((event, index) => (
								<Card
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
									key={index}
									className="overflow-hidden"
								>
									<CardBody
										placeholder=""
										onPointerEnterCapture={undefined}
										onPointerLeaveCapture={undefined}
									>
										<Typography
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
											variant="small"
											color="gray"
											className="flex items-center mb-2"
										>
											<CalendarDaysIcon className="w-4 h-4 mr-1" />
											{event.date}
										</Typography>
										<Typography
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
											variant="h5"
											color="blue-gray"
											className="mb-2"
										>
											{event.title}
										</Typography>
										<Typography
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
											color="gray"
											className="mb-4"
										>
											{event.description}
										</Typography>
										<Button
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
											color="green"
											variant="text"
											className="flex items-center gap-2"
										>
											Learn More{" "}
											<ArrowRightIcon strokeWidth={2} className="w-4 h-4" />
										</Button>
									</CardBody>
								</Card>
							))}
						</div>
					</TabPanel>
				</TabsBody>
			</Tabs>

			{/* Media Contact Section */}
			<Card
				placeholder=""
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
				className="mt-12 bg-green-50"
			>
				<CardBody
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					<Typography
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
						variant="h4"
						color="blue-gray"
						className="mb-4 text-center flex justify-center items-center"
					>
						<MegaphoneIcon className="w-6 h-6 mr-2" />
						Media Contact
					</Typography>
					<div className="text-center">
						<Typography
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
							className="mb-4"
						>
							For press inquiries, please contact our media relations team:
						</Typography>
						<Typography
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
							variant="h6"
							color="blue-gray"
						>
							Priya Sharma
						</Typography>
						<Typography
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							Head of Communications
						</Typography>
						<Typography
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
							color="green"
						>
							media@binnynewre.com
						</Typography>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}
