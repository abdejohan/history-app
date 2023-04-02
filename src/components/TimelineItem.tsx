import { FC } from "react";
import { Story } from "../types";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface TimelineProps {
	story: Story;
}

const TimelineItem: FC<TimelineProps> = ({ story }) => {
	const navigate = useNavigate();

	return (
		<li className='timeline-item'>
			<div className='timeline-item-content'>
				<FiEdit
					className='edit-button'
					size={20}
					onClick={() => navigate(`/story/${story?.storyYearHash}`, { state: { story } })}
				/>
				<span>Year: {parseInt(story?.startYear)}</span>
				<h4>{story?.title}</h4>
				<p>{story?.summary}</p>
				{story?.url && (
					<a href={story?.url} target='_blank' rel='noopener noreferrer'>
						Read more
					</a>
				)}
				<span className='circle' />
			</div>
		</li>
	);
};

export default TimelineItem;
