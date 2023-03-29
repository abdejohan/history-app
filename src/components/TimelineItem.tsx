import { FC } from "react";
import { HistoryEvent } from "../types";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
interface TimelineProps {
	event: HistoryEvent;
}

const TimelineItem: FC<TimelineProps> = ({
	event: { title, startYear, summary, url },
	event,
}) => {
	const navigate = useNavigate();

	return (
		<li className='timeline-item'>
			<div className='timeline-item-content'>
				<FiEdit
					className='edit-button'
					size={20}
					onClick={() => navigate(`/event/${event.eventYearHash}`, { state: { event } })}
				/>
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
