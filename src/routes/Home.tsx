import DisplayEvents from "../components/DisplayEvents";
import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";
import Button from "../common/Button";
import { scrollToElement } from "../utils";

function Home() {
	return (
		<section className='home-container'>
			<section className='full-page-container'>
				<WelcomeInfo />
				<div>
					<Button label='Explore' onClick={() => scrollToElement("select-century")} />
					<Button label='Add Event' onClick={() => console.log("EXPLORE")} />
				</div>
			</section>
			<section className='full-page-container' id='select-century'>
				<SelectCentury />
			</section>
		</section>
	);
}

export default Home;
