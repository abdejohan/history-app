import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import { GiEgyptianPyramids } from "react-icons/gi";
import Footer from "../common/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Layout = () => {
	const location = useLocation();

	return (
		<main className='layout'>
			<GiEgyptianPyramids className='background-icon' />
			<Header />
			<TransitionGroup>
				<CSSTransition
					key={location.pathname}
					timeout={300}
					classNames='fade'
					unmountOnExit>
					<Outlet />
				</CSSTransition>
			</TransitionGroup>
			<Footer />
		</main>
	);
};

export default Layout;
