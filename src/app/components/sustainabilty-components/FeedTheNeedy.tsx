// app/feed-the-needy/page.tsx
"use client";

import React from "react";
import { Card, CardBody, Typography, Button } from "@material-tailwind/react";

// Types for our statistics
type Statistic = {
	value: string;
	label: string;
};

const statistics: Statistic[] = [
	{ value: "10,000+", label: "People fed monthly" },
	{ value: "500+", label: "Active volunteers" },
	{ value: "50,000 lbs", label: "Food rescued annually" },
];

export default function FeedTheNeedy() {
	return (
		<div className="max-w-7xl mx-auto px-4 py-8">
			{/* Hero Image */}
			<div className="rounded-xl overflow-hidden mb-8 h-[400px] lg:h-[600px] relative border-green-400 hover:ring-green-700">
				<img
					src="/feed-the-needy.jpg"
					alt="Volunteers distributing food"
					className="w-full h-full object-contain"
				/>
			</div>

			{/* Article Title */}
			<Typography
				variant="h1"
				className="mb-4"
				placeholder=""
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				Feed the Needy: Making a Difference Through Sustainable Food
				Distribution
			</Typography>

			{/* Article Introduction */}
			<Typography
				variant="lead"
				className="mb-8 text-gray-700"
				placeholder=""
				onPointerEnterCapture={undefined}
				onPointerLeaveCapture={undefined}
			>
				As our company leads the way in sustainable energy, we&apos;re also
				committed to addressing another critical challenge in our community:
				food insecurity. Through our Feed the Needy initiative, we&apos;re
				leveraging our resources and expertise to create a sustainable food
				distribution system that helps those in need while reducing waste.
			</Typography>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Article Body - 2 columns */}
				<div className="lg:col-span-2 space-y-6">
					<section>
						<Typography
							variant="h3"
							className="mb-4"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							The Challenge We&apos;re Addressing
						</Typography>
						<Typography
							className="mb-4"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							In our community, thousands of families struggle with food
							insecurity daily, while simultaneously, significant amounts of
							food go to waste. This paradox presents both a challenge and an
							opportunity for sustainable solutions.
						</Typography>
						<Typography
							className="mb-4"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							Our experience in creating efficient, sustainable systems in the
							energy sector has given us unique insights into how we can address
							this critical issue. By applying our expertise in logistics and
							community engagement, we&apos;ve developed a comprehensive
							approach to food distribution that benefits both those in need and
							the environment.
						</Typography>
					</section>

					<section>
						<Typography
							variant="h3"
							className="mb-4"
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							Our Approach
						</Typography>
						<div className="space-y-4">
							{[
								"Sustainable Sourcing",
								"Efficient Distribution",
								"Community Engagement",
							].map((title, index) => (
								<Card
									key={index}
									className="mb-4"
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									<CardBody
										placeholder=""
										onPointerEnterCapture={undefined}
										onPointerLeaveCapture={undefined}
									>
										<Typography
											variant="h4"
											color="blue-gray"
											className="mb-2"
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
										>
											{index + 1}. {title}
										</Typography>
										<Typography
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
										>
											{title === "Sustainable Sourcing" &&
												"We partner with local farms, restaurants, and grocery stores to rescue surplus food that would otherwise go to waste. This not only provides nutritious meals to those in need but also reduces the environmental impact of food waste."}
											{title === "Efficient Distribution" &&
												"Using our logistics expertise, we&apos;ve created a network of distribution points throughout the community, ensuring that food reaches those who need it most efficiently and quickly."}
											{title === "Community Engagement" &&
												"We believe that lasting change comes from within the community. That&apos;s why we work closely with local organizations and volunteers to identify needs and distribute resources effectively."}
										</Typography>
									</CardBody>
								</Card>
							))}
						</div>
					</section>
				</div>

				{/* Sidebar - 1 column */}
				<div className="space-y-6">
					{/* Impact Statistics Card */}
					<Card
						className="p-4"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						<CardBody
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<Typography
								variant="h4"
								color="blue-gray"
								className="mb-4"
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								Our Impact
							</Typography>
							<div className="space-y-4">
								{statistics.map((stat, index) => (
									<div key={index}>
										<Typography
											variant="h2"
											color="green"
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
										>
											{stat.value}
										</Typography>
										<Typography
											variant="lead"
											color="gray"
											placeholder=""
											onPointerEnterCapture={undefined}
											onPointerLeaveCapture={undefined}
										>
											{stat.label}
										</Typography>
									</div>
								))}
							</div>
						</CardBody>
					</Card>

					{/* Get Involved Card */}
					<Card
						className="p-4"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						<CardBody
							placeholder=""
							onPointerEnterCapture={undefined}
							onPointerLeaveCapture={undefined}
						>
							<Typography
								variant="h4"
								color="blue-gray"
								className="mb-4"
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								Get Involved
							</Typography>
							<div className="flex flex-col space-y-4">
								<Button
									// as="a"
									color="green"
									size="lg"
									fullWidth
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
									// src="www.gofundme.com/f/feed-the-needy-in-chennai-india-for-covid19"
								>
									Donate Now
								</Button>
								<Button
									variant="outlined"
									color="green"
									size="lg"
									fullWidth
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									Volunteer
								</Button>
								<Button
									variant="outlined"
									color="green"
									size="lg"
									fullWidth
									placeholder=""
									onPointerEnterCapture={undefined}
									onPointerLeaveCapture={undefined}
								>
									Partner With Us
								</Button>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
}
