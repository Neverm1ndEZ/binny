"use client";
import {
	Button,
	Dialog,
	DialogBody,
	DialogHeader,
	Typography,
} from "@material-tailwind/react";
import React from "react";

export function Modal({ buttonText }: { buttonText: string }) {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);

	return (
		<>
			<Button
				onClick={handleOpen}
				placeholder=""
				onPointerEnterCapture={() => {}}
				onPointerLeaveCapture={() => {}}
			>
				{buttonText}
			</Button>
			<Dialog
				open={open}
				handler={handleOpen}
				placeholder=""
				onPointerEnterCapture={() => {}}
				onPointerLeaveCapture={() => {}}
			>
				<div className="flex items-center justify-between">
					<DialogHeader
						className="flex flex-col items-start"
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						<Typography
							className="mb-1"
							variant="h4"
							placeholder=""
							onPointerEnterCapture={() => {}}
							onPointerLeaveCapture={() => {}}
						>
							Long Modal
						</Typography>
					</DialogHeader>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="mr-3 h-5 w-5"
						onClick={handleOpen}
					>
						<path
							fillRule="evenodd"
							d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
				<DialogBody
					className="h-[42rem] overflow-scroll"
					placeholder=""
					onPointerEnterCapture={() => {}}
					onPointerLeaveCapture={() => {}}
				>
					<Typography
						className="font-normal"
						placeholder=""
						onPointerEnterCapture={() => {}}
						onPointerLeaveCapture={() => {}}
					>
						I&apos;ve always had unwavering confidence in my abilities, and I
						believe our thoughts and self-perception are the primary forces that
						shape us. Many people limit themselves by their own self-doubt,
						slowing their progress. Fortunately, I was raised with the belief
						that I could achieve anything.
						<br />
						<br />
						As we journey through life, we often encounter challenges that
						harden our hearts. Pain, insults, broken trust, and betrayal can
						make us hesitant to help others. Love can lead to heartbreak, and
						time can distance us from family. These experiences can gradually
						erode our optimism.
						<br /> <br />
						Life doesn&apos;t always place us where we want to be. We grow, make
						mistakes, and strive to express ourselves and fulfill our dreams. If
						we&apos;re fortunate enough to participate in life&apos;s journey,
						we should cherish every moment. Regrettably, some only recognize the
						value of a moment after it&apos;s passed.
						<br /> <br />
						One thing I&apos;ve learned is that I can excel at anything I set my
						mind to. My skill is my ability to learn. I&apos;m here to learn, to
						grow, and to inspire others to do the same. Don&apos;t fear making
						mistakes; they teach us far more than compliments ever will.
						Ultimately, what truly matters is how our actions inspire and
						motivate others. Some will be ignited by our endeavors, while others
						may be offended—it&apos;s all part of the process. I&apos;m here to
						pursue my dreams and encourage others to do the same.
						<br /> <br />
						Now is the time to embrace greatness without fear of judgment. Some
						may resent those who shine brightly or stand out, but it&apos;s time
						to be the best version of ourselves. Do you have faith in your
						beliefs, even if you&apos;re the only one who does?
					</Typography>
				</DialogBody>
			</Dialog>
		</>
	);
}
