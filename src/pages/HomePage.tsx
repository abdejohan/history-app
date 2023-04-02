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
import { mockupStories } from "../mockups/mockupDB";

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
					scrollToElement("stories");
					setLoading(false);
				}, 500);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const fetchMockupStories = (century: string) => {
		setLoading(true);
		setSelectedCentury("1st century CE");
		setStories(mockupStories);
		setTimeout(() => {
			scrollToElement("stories");
			setLoading(false);
		}, 500);
	};

	return (
		<main>
			<ContentView>
				<WelcomeInfo />
				<SelectCentury onSelected={(century) => fetchMockupStories(century)} />
				<Spinner visible={loading} style={{ margin: "20px" }} />
			</ContentView>
			<DisplayStories />
		</main>
	);
}

export default HomePage;
