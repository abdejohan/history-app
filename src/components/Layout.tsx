import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "../components/Footer";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ScrollToTop } from "../utils";

const Layout = () => {
	const location = useLocation();

	return (
		<main className='layout'>
			<ScrollToTop />
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
