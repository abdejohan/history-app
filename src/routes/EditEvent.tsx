import { FC } from "react";
import { useLocation } from "react-router-dom";
import ContentView from "../components/ContentView";
import EditStoryForm from "../components/EditStoryForm";

const EditEvent: FC = () => {
	const {
		state: { event },
	} = useLocation();
	console.log("Selected: ", event);

	return (
		<ContentView>
			<EditStoryForm story={event} submitText='update' />
		</ContentView>
	);
};

export default EditEvent;
