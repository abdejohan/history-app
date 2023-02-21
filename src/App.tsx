import { useState } from "react";
import { arrayOfStories } from "./utils";

function App() {
	const [selectedYear, setSelectedYear] = useState<number>();

	return (
		<div className='entry'>
			<div className='line'>
				<div className='center' />
				{arrayOfStories.map((story) => (
					<h6
						onClick={() => setSelectedYear(story.year)}
						className={`year ${selectedYear === story.year ? "selected" : ""}`}>
						{story.year}
					</h6>
				))}
			</div>
		</div>
	);
}

export default App;
