import { FC } from "react";
import { HistoryEvent } from "../types";

interface TimelineProps {
	event: HistoryEvent;
}

const TimelineItem: FC<TimelineProps> = ({
	event: { title, startYear, summary, url },
}) => {
	return (
		<li className='timeline-item'>
			<div className='timeline-item-content'>
				<span>Year: {parseInt(startYear)}</span>
				<h4>{title}</h4>
				<p>{summary}</p>
				{url && (
					<a href={url} target='_blank' rel='noopener noreferrer'>
						Read more
					</a>
				)}
				<span className='circle' />
			</div>
		</li>
	);
};

export default TimelineItem;
