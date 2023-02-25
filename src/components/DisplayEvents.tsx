import { FC } from "react";
import { timelineData } from "../utils";
import TimelineItem from "./TimelineItem";

const DisplayEvents: FC = () => {
	return (
		<section className='timeline-container'>
			<h2>4th century BCE</h2>
			<div className='scroll-container scroll-panel'>
				<ul className='timeline-items-container'>
					{timelineData.length > 0 &&
						timelineData.map((event, index) => (
							<TimelineItem event={event} key={index} />
						))}
				</ul>
			</div>
		</section>
	);
};

export default DisplayEvents;
