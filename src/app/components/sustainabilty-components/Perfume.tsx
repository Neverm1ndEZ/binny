import React from "react";
import { Typography, Card, CardBody } from "@material-tailwind/react";

export default function Perfume() {
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			{/* Hero Section */}
			<div className="mb-12">
				<Typography
					variant="h1"
					className="text-4xl font-bold mb-4"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					The Art of Fragrance: A Journey Through Scent
				</Typography>
				<Typography
					variant="paragraph"
					color="blue-gray"
					className="text-xl mb-6"
					placeholder=""
					onPointerEnterCapture={undefined}
					onPointerLeaveCapture={undefined}
				>
					Exploring the delicate balance of notes and the craft behind premium
					perfumes
				</Typography>
				<div className="h-[650px] w-full relative mb-8">
					<img
						src="/net-zero-perfume.jpeg"
						alt="Luxury perfume bottles"
						className="h-full w-full object-contain rounded-xl"
					/>
					<p className="text-xs mx-44 mt-2">
						BNREL Team’s Interaction with TIDCO MD Shri Sandeep Nanduri upon
						their acceptance to participate in the companies upcoming 195KLD
						Ethanol Project in Tuticorin - The team is seen gifting the MD with
						the Proposed By-Product of Net-Zero Perfume 🌽🌹
					</p>
				</div>
			</div>

			{/* Main Content */}
			<div className="grid grid-cols-1 gap-8">
				<div className="">
					<Typography
						variant="paragraph"
						className="mb-6 text-lg"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						In the world of luxury fragrances, every bottle tells a story. From
						the carefully selected ingredients to the artisanal craftsmanship,
						premium perfumes are more than just scents - they&apos;re
						expressions of artistry and emotion.
					</Typography>

					<Typography
						variant="h3"
						className="text-2xl font-semibold mb-4"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						The Science of Scent
					</Typography>
					<Typography
						variant="paragraph"
						className="mb-6"
						placeholder=""
						onPointerEnterCapture={undefined}
						onPointerLeaveCapture={undefined}
					>
						Creating a perfume is a delicate balance of art and science. Master
						perfumers, known as &quot;noses,&quot; carefully layer different
						notes to create a harmonious blend that evolves over time.
					</Typography>

					<Card
						className="mb-6"
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
								variant="h5"
								color="blue-gray"
								className="mb-4"
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								Key Elements of Fragrance
							</Typography>
							<ul className="list-disc pl-6">
								<li className="mb-2">Top Notes: The initial impression</li>
								<li className="mb-2">
									Heart Notes: The essence of the perfume
								</li>
								<li className="mb-2">Base Notes: The lasting impression</li>
							</ul>
						</CardBody>
					</Card>
				</div>

				{/* Sidebar */}
				{/* <div className="lg:col-span-1">
					<Card
						className="mb-6"
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
								variant="h5"
								color="blue-gray"
								className="mb-4"
								placeholder=""
								onPointerEnterCapture={undefined}
								onPointerLeaveCapture={undefined}
							>
								Featured Fragrances
							</Typography>
							<div className="space-y-4">
								{[1, 2, 3].map((item) => (
									<div key={item} className="flex items-center space-x-4">
										<img
											src={`/api/placeholder/100/100`}
											alt={`Perfume ${item}`}
											className="w-20 h-20 object-cover rounded"
										/>
										<div>
											<Typography
												variant="h6"
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
											>
												Essence No. {item}
											</Typography>
											<Typography
												variant="small"
												color="gray"
												placeholder=""
												onPointerEnterCapture={undefined}
												onPointerLeaveCapture={undefined}
											>
												A blend of exotic notes
											</Typography>
										</div>
									</div>
								))}
							</div>
						</CardBody>
					</Card>
				</div> */}
			</div>
		</div>
	);
}
