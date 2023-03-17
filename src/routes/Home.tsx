import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import ContentView from "../components/ContentView";
import { useState } from "react";
import { fetchCenturyEvents } from "../database";
import { HistoryEvent } from "../types";
import DisplayEvents from "../components/DisplayEvents";
import { scrollToElement } from "../utils";
import Spinner from "../common/Spinner";

function Home() {
	const [historyEvents, setHistoryEvents] = useState<HistoryEvent[]>();
	const [century, setCentury] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const fetchEvents = async (searchCentury: string) => {
		try {
			setLoading(true);
			const fetchedEvents = await fetchCenturyEvents(searchCentury);
			if ("Items" in fetchedEvents) {
				console.log(fetchedEvents);
				setHistoryEvents(fetchedEvents.Items as HistoryEvent[]);
				setCentury(searchCentury);
				setTimeout(() => {
					scrollToElement("events");
					setLoading(false);
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
				<Spinner visible={loading} style={{ margin: "20px" }} />
			</ContentView>
			{historyEvents && <DisplayEvents events={historyEvents} century={century} />}
		</main>
	);
}

export default Home;
