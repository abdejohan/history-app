import { GiAncientColumns } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";

const openMenu = () => {
	const element = document.querySelector(".menu-container");
	if (element) element.classList.add("open");
};

const Header = () => {
	return (
		<header>
			<nav>
				<MobileMenu />
				<FaHamburger className='mobile-navigation' onClick={() => openMenu()} />
				<div className='web-navigation'>
					<GiAncientColumns className='header-logo' />
					<Link to='/'>Home</Link>
					<Link to='/admin'>Add Story</Link>
					{false && <Link to='/learn-more'>Learn more</Link>}
				</div>
				<Link to='https://github.com/abdejohan' target='_blank'>
					<BsGithub className='github' color='white' />
				</Link>
			</nav>
		</header>
	);
};

export default Header;
