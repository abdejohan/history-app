import DisplayEvents from "../components/DisplayEvents";
import WelcomeInfo from "../components/WelcomeInfo";
import SelectCentury from "../components/SelectCentury";

function Home() {
	return (
		<section className='home-container'>
			<div className='home-welcome'>
				<h1>
					Timeline: <span>ancient history</span>
				</h1>
				<h3>A collection of written historical events </h3>
			</div>
			<div className='home-content'>
				<WelcomeInfo />
				<SelectCentury />
			</div>
			<DisplayEvents />
		</section>
	);
}

export default Home;
