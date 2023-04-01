import { FC } from "react";
import { useLocation } from "react-router-dom";
import ContentView from "../common/ContentView";
import EditStoryForm from "../components/EditStoryForm";

const StoryPage: FC = () => {
	const { state } = useLocation();
	const { event } = state;

	return (
		<ContentView>
			<EditStoryForm story={event} />
		</ContentView>
	);
};

export default StoryPage;
