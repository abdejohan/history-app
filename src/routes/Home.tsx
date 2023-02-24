import { Flex, Heading, Text } from "@chakra-ui/react";
import DisplayEvents from "../components/DisplayEvents";
import YearSelection from "../components/YearSelection";

function Home() {
	return (
		<Flex direction='column' p={10}>
			<Flex direction='column' borderWidth={2} borderRadius={10}>
				<Heading as='h1'>Do you also find it hard to place historical events?</Heading>
				<Text mb={4}>
					I love history! But sometimes i can have a hard time rememebering what happend
					before or after someting. Did Julius Cesar march into gaul before The birth of
					jesus? Was Darius The Great the current King of Perisa when the battle of
					merathon took place? And What year did Gengis Khan Sack the city of babylonia?
				</Text>
				<Text>
					If you just like me, could need a quick reminder of who was where and when, you
					might find this site useful. Enjoy!
				</Text>
			</Flex>
			<Flex>
				<YearSelection />
				<DisplayEvents />
			</Flex>
		</Flex>
	);
}

export default Home;
