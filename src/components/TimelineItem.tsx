import { Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { HistoryEvent } from "../types";

interface TimelineProps {
	event: HistoryEvent;
}

const TimelineItem: FC<TimelineProps> = ({ event: { title, year, text, link } }) => {
	return (
		<div className='timeline-item'>
			<div className='timeline-item-content'>
				<Heading>{title}</Heading>
				<Text>{year}</Text>
				<Text>{text}</Text>
				{link && (
					<a href={link.url} target='_blank' rel='noopener noreferrer'>
						{link.label}
					</a>
				)}
				<span className='circle' />
			</div>
		</div>
	);
};

export default TimelineItem;
