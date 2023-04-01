import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import ContentView from "../common/ContentView";
import { useState, useContext } from "react";
import { fetchCenturyStories } from "../database";
import { Story } from "../types";
import DisplayStories from "../components/DisplayStories";
import { scrollToElement } from "../utils";
import Spinner from "../common/Spinner";
import GlobalContext from "../context/Globals";

function HomePage() {
	const [loading, setLoading] = useState<boolean>(false);
	const { setStories, setSelectedCentury } = useContext(GlobalContext);

	const fetchStories = async (searchCentury: string) => {
		try {
			setLoading(true);
			const fetchedEvents = await fetchCenturyStories(searchCentury);
			if ("Items" in fetchedEvents) {
				console.log(fetchedEvents);
				setStories(fetchedEvents.Items as Story[]);
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
				<SelectCentury onSelected={(century) => fetchStories(century)} />
				<Spinner visible={loading} style={{ margin: "20px" }} />
			</ContentView>
			<DisplayStories />
		</main>
	);
}

export default HomePage;
