import { useState } from "react";
import { arrayOfStories } from "./utils";

function App() {
	const [selectedYear, setSelectedYear] = useState<number>();

	return (
		<main>
			<div className='years_container'>
				<h2 className='header'>SELECT A YEAR</h2>
				<div className='list_of_years'>
					{arrayOfStories.map((story) => (
						<h2
							onClick={() => setSelectedYear(story.year)}
							className={`year ${selectedYear === story.year ? "selected" : ""}`}>
							{story.year}
						</h2>
					))}
				</div>
			</div>
			<div className='stories_container'>
				<h2 className='header'>EVENTS THAT YEAR</h2>
				<div className='list_of_stories'>
					{arrayOfStories.map((story) => {
						if (selectedYear === story.year) {
							return (
								<div className='story'>
									<h3>{story.title}</h3>
									<img src={story.image} alt='image of event' height='300' width='300' />
									<p>{story.text}</p>
								</div>
							);
						}
					})}
				</div>
			</div>
		</main>
	);
}

export default App;
