import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<Link to='/'>Home</Link>
				<Link to='/admin'>Add Event</Link>
				<Link to='/admin'>Contact</Link>
			</nav>
		</header>
	);
};

export default Header;
