import { FC } from "react";
import { Link } from "react-router-dom";
import { HistoryEvent } from "../types";
import ContentView from "./ContentView";
import TimelineItem from "./TimelineItem";
import { TfiFaceSad } from "react-icons/tfi";

// historyEvents.map((event) => <TimelineItem event={event} key={event.title} />)
interface DisplayEventsProps {
	century: string;
	events: Array<HistoryEvent>;
}

const DisplayEvents: FC<DisplayEventsProps> = ({ events, century }) => {
	return (
		<ContentView id='events'>
			<h2 className='century-title'>{century}</h2>
			<ul className='timeline-items-container'>
				{events &&
					events.map((event, index) => <TimelineItem event={event} key={index} />)}
			</ul>
			{!events.length && (
				<div className='no-events-found-container'>
					<TfiFaceSad size={50} />
					<p>Looks like there are no added events for this century..</p>
					<Link to='/admin'>Add event? </Link>
				</div>
			)}
		</ContentView>
	);
};

export default DisplayEvents;
