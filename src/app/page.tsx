import Contact from "./components/homepage-components/Contact";
import Energy from "./components/homepage-components/Energy";
import Hero from "./components/homepage-components/Hero";
import Leadership from "./components/homepage-components/Leadership";
import LongCard from "./components/homepage-components/LongCard";
import { Sustainability } from "./components/homepage-components/Sustainablilty";

export default function Home() {
	return (
		<main className="w-full sm:px-6 lg:px-0">
			<Hero />
			<div className="max-w-7xl mx-auto lg:px-8">
				<Energy />
				<LongCard />
				<Leadership />
				<Sustainability />
				<Contact />
			</div>
		</main>
	);
}
