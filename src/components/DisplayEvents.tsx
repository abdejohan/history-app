import { Container, Heading, Text, Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { timelineData } from "../utils";
import TimelineItem from "./TimelineItem";

const DisplayEvents: FC = () => {
	return (
		<Flex direction='column' grow='1'>
			<Heading as='h2' size='md' pb='10' alignSelf='center'>
				4th century BCE
			</Heading>
			<Flex overflowY='scroll' direction='column' className='scroll_panel'>
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
