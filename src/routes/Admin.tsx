import ContentView from "../components/ContentView";
import StoryForm from "../components/StoryForm";

const Admin = () => {
	return (
		<ContentView>
			<div className='form-container'>
				<h2>Add new event</h2>
				<StoryForm />
			</div>
		</ContentView>
	);
};

export default Admin;
