import { Outlet } from "react-router-dom";
import Header from "./Header";
import { GiEgyptianPyramids } from "react-icons/gi";
import Footer from "../common/Footer";

const Layout = () => (
	<main className='layout'>
		<GiEgyptianPyramids className='timeline-corner-icon dd' />
		<Header />
		<Outlet />
		<Footer />
	</main>
);

export default Layout;
