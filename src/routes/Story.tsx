import { FC } from "react";
import { useLocation } from "react-router-dom";
import ContentView from "../components/ContentView";
import EditStoryForm from "../components/EditStoryForm";

const EditEvent: FC = () => {
	const { state } = useLocation();
	const { event } = state;

	return (
		<ContentView>
			<EditStoryForm story={event} />
		</ContentView>
	);
};

export default EditEvent;
