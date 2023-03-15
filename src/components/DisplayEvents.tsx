import { FC } from "react";
import { HistoryEvent } from "../types";
import ContentView from "./ContentView";
import TimelineItem from "./TimelineItem";

// historyEvents.map((event) => <TimelineItem event={event} key={event.title} />)
interface DisplayEventsProps {
	century: string;
	events: Array<HistoryEvent>;
}

const DisplayEvents: FC<DisplayEventsProps> = ({ events, century }) => {
	return (
		<ContentView>
			<h2 id='events' className='century-title'>
				{century}
			</h2>
			<ul className='timeline-items-container'>
				{events &&
					events.map((event, index) => <TimelineItem event={event} key={index} />)}
			</ul>
		</ContentView>
	);
};

export default DisplayEvents;
