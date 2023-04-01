import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import ContentView from "../components/ContentView";
import { useState, useContext } from "react";
import { fetchCenturyEvents } from "../database";
import { HistoryEvent } from "../types";
import DisplayEvents from "../components/DisplayEvents";
import { scrollToElement } from "../utils";
import Spinner from "../common/Spinner";
import GlobalContext from "../context/Globals";

function Home() {
	const [loading, setLoading] = useState<boolean>(false);
	const { setHistoryEvents, historyEvents, setSelectedCentury, selectedCentury } =
		useContext(GlobalContext);

	const fetchEvents = async (searchCentury: string) => {
		try {
			setLoading(true);
			const fetchedEvents = await fetchCenturyEvents(searchCentury);
			if ("Items" in fetchedEvents) {
				console.log(fetchedEvents);
				setHistoryEvents(fetchedEvents.Items as HistoryEvent[]);
				setSelectedCentury(searchCentury);
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
				<SelectCentury onSelected={(century) => fetchEvents(century)} />
				<Spinner visible={loading} style={{ margin: "20px" }} />
			</ContentView>
			{historyEvents && (
				<DisplayEvents events={historyEvents} century={selectedCentury} />
			)}
		</main>
	);
}

export default Home;
