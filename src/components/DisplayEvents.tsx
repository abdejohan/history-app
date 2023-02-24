import { Container, Heading, Text, Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { timelineData } from "../utils";
import TimelineItem from "./TimelineItem";

const DisplayEvents: FC = () => {
	return (
		<Flex borderWidth={1} h='70vh' direction='column' grow='1'>
			<Heading as='h2' size='md' mb='10'>
				Historical events 400th centurie BCE
			</Heading>
			<Flex h='70vh' overflowY='scroll' direction='column'>
				<Box className='timeline-container'>
					{timelineData.length > 0 &&
						timelineData.map((event, index) => (
							<TimelineItem event={event} key={index} />
						))}
				</Box>
			</Flex>
		</Flex>
	);
};

export default DisplayEvents;
