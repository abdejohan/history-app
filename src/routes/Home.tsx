import DisplayEvents from "../components/DisplayEvents";
import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import Button from "../common/Button";

function Home() {
	return (
		<section className='home-container'>
			<WelcomeInfo />
			<Button label='Explore' onClick={() => console.log("EXPLORE")} />
			{false && <SelectCentury />}
		</section>
	);
}

export default Home;
