import { Link } from "react-router-dom";
import { BsGithub, BsPlaystation } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
	return (
		<footer>
			<div className='list-container'>
				<h5 className='list-title'>Learn more</h5>
				<ul>
					<li>
						<Link to='https://www.historyextra.com/podcast/' target='_blank'>
							BBC History Extra (Podcast)
						</Link>
					</li>
					<li>
						<Link to='https://www.bbc.co.uk/sounds/brand/p0d0mj5v' target='_blank'>
							The Rest Is History (Podcast)
						</Link>
					</li>
					<li>
						<Link to='https://www.dancarlin.com/hardcore-history-series/' target='_blank'>
							Hardcore History with Dan Carlin (Podcast)
						</Link>
					</li>
					<li>
						<Link to='https://historyhub.history.gov/' target='_blank'>
							HistoryHub (Community)
						</Link>
					</li>
					<li>
						<Link to='https://www.reddit.com/r/AskHistorians/' target='_blank'>
							AskHistorians (Community)
						</Link>
					</li>
				</ul>
			</div>
			<div className='list-container'>
				<h5 className='list-title'>Get in touch</h5>
				<ul>
					<li>
						<BsGithub className='list-icon' />
						<Link to='https://www.github.com/abdejohan' target='_blank'>
							github.com/abdejohan
						</Link>
					</li>
					<li>
						<FiMail className='list-icon' />
						<Link to='mailto:abdejohan@gmail.com' target='_blank'>
							abdejohan@gmail.com
						</Link>
					</li>
					<li>
						<BsPlaystation className='list-icon' />
						<Link to='https://www.playstation.com/' target='_blank'>
							libbegrabb
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
