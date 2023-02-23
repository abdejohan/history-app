import { useState } from "react";
import Event from "../components/Event";
import YearListItem from "../components/YearListItem";
import { arrayOfStories } from "../utils";

function Home() {
	const [selectedYear, setSelectedYear] = useState<number>();

	return (
		<main>
			<div className='years_container'>
				<h2 className='header'>SELECT A YEAR</h2>
				<div className='list_of_years'>
					{arrayOfStories.map((event, index) => (
						<YearListItem
							key={index}
							event={event}
							selectedYear={selectedYear}
							setSelectedYear={setSelectedYear}
						/>
					))}
				</div>
			</div>
			<div className='stories_container'>
				<h2 className='header'>EVENTS THE YEAR {selectedYear}</h2>
				<div className='list_of_stories'>
					{arrayOfStories.map((event, index) => {
						if (selectedYear === event.year) {
							return <Event key={index} event={event} />;
						}
					})}
				</div>
			</div>
		</main>
	);
}

export default Home;
