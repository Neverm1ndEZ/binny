import { MoveUpRight } from "lucide-react";

export default function Energy() {
	return (
		<div className="mt-10 px-4 lg:px-0">
			<div className="flex justify-start border-b border-green-700">
				<h1 className=" text-base uppercase font-semibold text-center text-green-600">
					Energy
				</h1>
			</div>
			<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start py-8 gap-y-6">
				<div className="flex flex-col items-start w-full lg:w-1/2">
					<h1 className="text-4xl font-semibold text-green-700">Clean Power</h1>
					<p className="text-sm max-w-full lg:max-w-[350px] mt-4 font-light">
						Powering the future with clean, renewable solar energy. Join us for
						a brighter, sustainable tomorrow.
					</p>
				</div>
				<div className="flex flex-col items-start w-full lg:w-1/2 gap-y-6">
					<div className="font-light">
						Join <span className="font-semibold text-green-800">Binny</span> to
						lead the future of renewable energy with innovative solar solutions.
						Contribute to sustainability and professional growth
					</div>
					<div className="flex items-center justify-between w-full">
						<div className="flex flex-col items-start justify-start gap-y-8">
							<div>
								<h1 className="text-3xl font-light border-b border-black pb-2 w-full">
									85%
								</h1>
								<p className="font-light uppercase text-[10px] pt-2">
									Financial Returns
								</p>
							</div>
							<div>
								<h1 className="text-3xl font-light border-b border-black pb-2 w-full">
									75%
								</h1>
								<p className="font-light uppercase text-[10px] pt-2">
									Adoption Rates
								</p>
							</div>
						</div>
						<div className="flex flex-col items-start justify-start gap-y-8">
							<div>
								<h1 className="text-3xl font-light border-b border-black pb-2 w-full">
									95%
								</h1>
								<p className="font-light uppercase text-[10px] pt-2">
									System Performance
								</p>
							</div>
							<div>
								<h1 className="text-3xl font-light border-b border-black pb-2 w-full">
									65%
								</h1>
								<p className="font-light uppercase text-[10px] pt-2">
									Customer Growth
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-start">
						<button className="flex flex-row-reverse items-center gap-3 rounded-full px-8 py-4 transition duration-300 ease-in-out group relative">
							<span className="absolute inset-0 rounded-full border-2 border-black group-hover:border-transparent"></span>
							<span className="absolute inset-0 rounded-full bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
							<MoveUpRight className="w-5 h-5 relative z-10 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300" />
							<span className="relative z-10 group-hover:text-white transition-colors duration-300">
								Get in Touch
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
