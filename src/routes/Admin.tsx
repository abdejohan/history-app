import ContentView from "../components/ContentView";
import StoryForm from "../components/StoryForm";

const Admin = () => {
	return (
		<ContentView>
			<h2>Add new story</h2>
			<StoryForm />
		</ContentView>
	);
};

export default Admin;
