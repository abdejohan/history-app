import DisplayEvents from "../components/DisplayEvents";
import WelcomeInfo from "../components/WelcomeInfo";
import YearSelection from "../components/YearSelection";

function Home() {
	return (
		<section className='home-container'>
			<section className='left-column-container'>
				<WelcomeInfo />
				<YearSelection />
			</section>
			<DisplayEvents />
		</section>
	);
}

export default Home;
