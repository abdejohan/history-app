import DisplayEvents from "../components/DisplayEvents";
import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";

function Home() {
	return (
		<section className='home-container'>
			<WelcomeInfo />
			{false && <SelectCentury />}
		</section>
	);
}

export default Home;
