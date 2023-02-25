import { Link as ReactRouterLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";

const Header = () => {
	return (
		<Flex as='header'>
			<nav>
				<Link as={ReactRouterLink} to='/'>
					Home
				</Link>
				<Link as={ReactRouterLink} to='/admin'>
					Add Event
				</Link>
				<Link as={ReactRouterLink} to='/admin'>
					Contact
				</Link>
			</nav>
		</Flex>
	);
};

export default Header;
