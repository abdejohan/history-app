import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import ContentView from "../common/ContentView";
import TimelineItem from "./TimelineItem";
import { TfiFaceSad } from "react-icons/tfi";
import GlobalContext from "../context/Globals";

const DisplayStories: FC = () => {
	const { selectedCentury, stories } = useContext(GlobalContext);
	if (!stories) return null;
	return (
		<ContentView id='stories'>
			<h2 className='century-title'>{selectedCentury}</h2>
			<ul className='timeline-items-container'>
				{stories?.map((event, index) => (
					<TimelineItem event={event} key={index} />
				))}
			</ul>
			{!stories?.length && (
				<div className='no-stories-found-container'>
					<TfiFaceSad size={50} />
					<p>Looks like there are no added stories for this century..</p>
					<Link to='/admin'>Add event? </Link>
				</div>
			)}
		</ContentView>
	);
};

export default DisplayStories;
