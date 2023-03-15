import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import ContentView from "../components/ContentView";
import { useState } from "react";
import { fetchCenturyEvents } from "../database";
import { HistoryEvent } from "../types";
import DisplayEvents from "../components/DisplayEvents";
import { scrollToElement } from "../utils";

function Home() {
	const [historyEvents, setHistoryEvents] = useState<HistoryEvent[]>();
	const [century, setCentury] = useState<string>("");

	const fetchEvents = async (searchCentury: string) => {
		try {
			const fetchedEvents = await fetchCenturyEvents(searchCentury);
			if ("Items" in fetchedEvents) {
				console.log(fetchedEvents);
				setHistoryEvents(fetchedEvents.Items as HistoryEvent[]);
				setCentury(searchCentury);
				setTimeout(() => {
					scrollToElement("events");
				}, 500);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main>
			<ContentView>
				<WelcomeInfo />
				<SelectCentury selected={(searchCentury) => fetchEvents(searchCentury)} />
			</ContentView>
			{historyEvents && <DisplayEvents events={historyEvents} century={century} />}
		</main>
	);
}

export default Home;
