import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";

const closeMenu = () => {
	const element = document.querySelector(".menu-container");
	if (element) element.classList.remove("open");
};

const MobileMenu = () => {
	return (
		<div className='menu-container'>
			<ImCross className='close-icon' onClick={() => closeMenu()} />
			<div className='menu-items-container'>
				<Link onClick={() => closeMenu()} to='/'>
					Home
				</Link>
				<Link onClick={() => closeMenu()} to='/admin'>
					Add event
				</Link>
				<Link onClick={() => closeMenu()} to='/'>
					Learn more
				</Link>
			</div>
		</div>
	);
};

export default MobileMenu;
