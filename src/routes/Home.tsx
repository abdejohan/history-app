import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import ContentView from "../components/ContentView";

function Home() {
	return (
		<main>
			<ContentView>
				<WelcomeInfo />
				<SelectCentury />
			</ContentView>
		</main>
	);
}

export default Home;
