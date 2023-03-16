import { ReactNode, FC } from "react";

interface ContentViewProps {
	children: ReactNode;
}

const ContentView: FC<ContentViewProps> = ({ children }) => {
	const header = document.querySelector("header");
	return <section className='full-page-container'>{children}</section>;
};

export default ContentView;
