import DisplayEvents from "../components/DisplayEvents";
import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";

function Home() {
	return (
		<section className='home-container'>
			<section className='left-column-container'>
				<WelcomeInfo />
				<SelectCentury />
			</section>
			<DisplayEvents />
		</section>
	);
}

export default Home;
