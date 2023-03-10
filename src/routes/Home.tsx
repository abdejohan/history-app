import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import ContentView from "../components/ContentView";
import { useState } from "react";
import { fetchCenturyEvents } from "../database";

function Home() {
	const fetchEvents = async (century: string) => {
		console.log("inside");

		try {
			const data = await fetchCenturyEvents(century);
			console.log(data);
		} catch (error) {
			console.log("error");
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
