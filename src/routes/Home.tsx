import { Flex, Heading, Text } from "@chakra-ui/react";
import DisplayEvents from "../components/DisplayEvents";
import YearSelection from "../components/YearSelection";

function Home() {
	return (
		<section>
			<div className='welcome-info'>
				<h1>
					Timeline: <span>Written History </span>
				</h1>
				<h2>History is fun! But sometimes confusing...</h2>
				<div className='welcome-paragraph-wrapper'>
					<p>I love history but I find myself having a hard time remembering it all.</p>
					<p>
						Did Julius Cesar march against Gaule before The birth of Christ? Was Darius
						The Great King of Persia when the battle of marathon took place? And What year
						did Genghis Khan sack Baghdad?
					</p>
					<p>
						If you just like me, could need a quick reminder of who was where and when,
						you might find this site useful. Enjoy!
					</p>
				</div>
				<YearSelection />
			</div>
			<DisplayEvents />
		</section>
	);
}

export default Home;
