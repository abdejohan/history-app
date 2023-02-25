import { Link as ReactRouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const Header = () => {
	return (
		<header>
			<nav>
				<Link as={ReactRouterLink} to='/' px='4'>
					Home
				</Link>
				<Link as={ReactRouterLink} to='/admin' px='4'>
					Add Event
				</Link>
			</nav>
		</header>
	);
};

export default Header;
