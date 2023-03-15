import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import ContentView from "../components/ContentView";
import { useState } from "react";
import { fetchCenturyEvents } from "../database";
import { HistoryEvent } from "../types";

function Home() {
	const [historyEvents, setHistoryEvents] = useState<HistoryEvent[]>();

	const fetchEvents = async (century: string) => {
		try {
			const fetchedEvents = await fetchCenturyEvents(century);
			if ("Items" in fetchedEvents) {
				setHistoryEvents(fetchedEvents.Items as HistoryEvent[]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<ContentView>
				<WelcomeInfo />
				<SelectCentury selected={(century) => fetchEvents(century)} />
			</ContentView>
		</main>
	);
}

export default Home;
