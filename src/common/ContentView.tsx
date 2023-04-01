import { ReactNode, FC } from "react";

interface ContentViewProps {
	children: ReactNode;
	id?: string;
}

const ContentView: FC<ContentViewProps> = ({ children, id }) => {
	const header = document.querySelector("header");
	return (
		<section id={id} className='full-page-container'>
			{children}
		</section>
	);
};

export default ContentView;
