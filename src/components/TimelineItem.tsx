import { Heading, Text } from "@chakra-ui/react";
import { FC } from "react";
import { HistoryEvent } from "../types";

interface TimelineProps {
	event: HistoryEvent;
}

const TimelineItem: FC<TimelineProps> = ({ event: { title, year, text, link } }) => {
	return (
		<li className='timeline-item'>
			<div className='timeline-item-content'>
				<span>{year}</span>
				<h3>{title}</h3>
				<p>{text}</p>
				{link && (
					<a href={link.url} target='_blank' rel='noopener noreferrer'>
						{link.label}
					</a>
				)}
				<span className='circle' />
			</div>
		</li>
	);
};

export default TimelineItem;
