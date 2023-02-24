import { Box, Flex, Heading, Container, Text, Stack } from "@chakra-ui/react";
import { useState } from "react";
import Event from "../components/Event";
import YearSelection from "../components/YearSelection";
import { HistoryEvent } from "../types";

function Home() {
	const [selectedYear, setSelectedYear] = useState<number>();

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
			<YearSelection selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
		</Flex>
	);
}

export default Home;
