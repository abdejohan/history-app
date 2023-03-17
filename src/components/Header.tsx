import { GiAncientColumns } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<nav>
				<div style={{ display: "flex" }}>
					<GiAncientColumns className='header-logo' />
					<Link to='/'>Home</Link>
					<Link to='/admin'>Add Event</Link>
					<Link to='/learn-more'>Learn more</Link>
				</div>
				<Link to='https://github.com/abdejohan' target='_blank'>
					<BsGithub className='github' color='white' />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
