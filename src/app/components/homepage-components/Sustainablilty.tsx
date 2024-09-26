"use client";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { Modal } from "../Modal";
export function Sustainablilty() {
	return (
		<div className="mt-10 p-4 lg:p-0">
			<div className="flex justify-start border-b border-black">
				<h1 className="text-base uppercase font-semibold text-center">
					Sustainability and Us
				</h1>
			</div>
			<div className="p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
				<Card
					className="pt-6 w-96 shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
					placeholder=""
					onPointerEnterCapture={() => {}}
					onPointerLeaveCapture={() => {}}
				>
					<CardHeader
						color="blue-gray"
						className="relative top-2 h-56"
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Image
							src="/sustainibility-1.png"
							alt="card-image"
							layout="fill" // This makes the image responsive
							objectFit="cover" // Makes the image cover the container
							className="rounded shadow-lg"
						/>
					</CardHeader>
					<CardBody
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Typography
							variant="h5"
							color="blue-gray"
							className="mb-2"
							placeholder=""
							onPointerEnterCapture={() => {}}
							onPointerLeaveCapture={() => {}}
						>
							Sustainability Report
						</Typography>
						<Typography
							placeholder=""
							onPointerEnterCapture={() => {}}
							onPointerLeaveCapture={() => {}}
						>
							Leading to our future growth powered by renewable energy. Our
							efforts Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Est inventore ullam at!
						</Typography>
					</CardBody>
					<CardFooter
						className="pt-0"
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Modal buttonText={"Read More"} />
					</CardFooter>
				</Card>
				<Card
					className="pt-6 w-96 shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
					placeholder=""
					onPointerEnterCapture={() => {}}
					onPointerLeaveCapture={() => {}}
				>
					<CardHeader
						color="blue-gray"
						className="relative top-2 h-56"
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Image
							src="/sustainibility-3.png"
							alt="card-image"
							layout="fill" // This makes the image responsive
							objectFit="cover" // Makes the image cover the container
							className="rounded shadow-lg"
						/>
					</CardHeader>
					<CardBody
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Typography
							variant="h5"
							color="blue-gray"
							className="mb-2"
							placeholder=""
							onPointerEnterCapture={() => {}}
							onPointerLeaveCapture={() => {}}
						>
							Sustainability Report
						</Typography>
						<Typography
							placeholder=""
							onPointerEnterCapture={() => {}}
							onPointerLeaveCapture={() => {}}
						>
							Leading to our future growth powered by renewable energy. Our
							efforts Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Est inventore ullam at!
						</Typography>
					</CardBody>
					<CardFooter
						className="pt-0"
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Modal buttonText={"Read More"} />
					</CardFooter>
				</Card>
				<Card
					className="pt-6 w-96 shadow-2xl hover:scale-105 transition duration-300 ease-in-out"
					placeholder=""
					onPointerEnterCapture={() => {}}
					onPointerLeaveCapture={() => {}}
				>
					<CardHeader
						color="blue-gray"
						className="relative top-2 h-56"
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Image
							src="/sustainibility-2.png"
							alt="card-image"
							layout="fill" // This makes the image responsive
							objectFit="cover" // Makes the image cover the container
							className="rounded shadow-lg"
						/>
					</CardHeader>
					<CardBody
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Typography
							variant="h5"
							color="blue-gray"
							className="mb-2"
							placeholder=""
							onPointerEnterCapture={() => {}}
							onPointerLeaveCapture={() => {}}
						>
							Sustainability Report
						</Typography>
						<Typography
							placeholder=""
							onPointerEnterCapture={() => {}}
							onPointerLeaveCapture={() => {}}
						>
							Leading to our future growth powered by renewable energy. Our
							efforts Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Est inventore ullam at!
						</Typography>
					</CardBody>
					<CardFooter
						className="pt-0"
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Modal buttonText={"Read More"} />
					</CardFooter>
				</Card>
			</div>
		</div>
	);
}
