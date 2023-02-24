import { Box, Flex, Heading, Container } from "@chakra-ui/react";
import { useState } from "react";
import Event from "../components/Event";
import YearSelection from "../components/YearSelection";
import { HistoryEvent } from "../types";
import { arrayOfStories } from "../utils";

function Home() {
	const [selectedYear, setSelectedYear] = useState<number>();
	const [events, setEvents] = useState<Array<HistoryEvent>>([]);

	return (
		<Flex direction='row' justifyContent='center' w='1000px'>
			<YearSelection selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
			<Container>
				<Heading as='h2' size='md' noOfLines={1}>
					EVENTS THE YEAR
					{selectedYear}
				</Heading>
				<Box className='list_of_stories'>
					{events.map((event: HistoryEvent, index) => {
						if (selectedYear === event.year) {
							return <Event key={index} event={event} />;
						}
					})}
				</Box>
			</Container>
		</Flex>
	);
}

export default Home;
