import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => (
	<main className='layout'>
		<Header />
		<Outlet />
	</main>
);

export default Layout;
