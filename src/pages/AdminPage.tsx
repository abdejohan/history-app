import ContentView from "../common/ContentView";
import StoryForm from "../components/StoryForm";

const AdminPage = () => {
	return (
		<ContentView>
			<h2>Add new story</h2>
			<StoryForm />
		</ContentView>
	);
};

export default AdminPage;
