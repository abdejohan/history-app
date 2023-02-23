import { FormEvent } from "react";
import { fetchData, putData } from "../database";

function Admin() {
	const fetchDataFormDynamoDb = async () => {
		await fetchData("Stories");
	};

	const addDataToDynamoDB = async () => {
		const userData = {
			name: "Faisal",
			age: "170",
		};

		await putData("Stories", userData);
	};

	const handleSubmit = (event: any) => {
		event.preventDefault();
		for (let i = 0; i < event.target.length; i++) {
			console.log(event.target[i].value);
		}
	};

	return (
		<main>
			<div>
				<h1>Welcome Boss</h1>
				<form onSubmit={handleSubmit} className='event_form'>
					<div className='input_wrapper'>
						<label htmlFor='fname'>Title:</label>
						<input type='text'></input>
					</div>
					<div className='input_wrapper'>
						<label htmlFor='fname'>year:</label>
						<input type='text'></input>
					</div>
					<div className='input_wrapper'>
						<label htmlFor='fname'>text:</label>
						<input type='text'></input>
					</div>
					<div className='input_wrapper'>
						<label htmlFor='img'>Select image:</label>
						<input type='file' id='img' name='img' accept='image/*'></input>
					</div>
					<div className='input_wrapper'>
						<input type='submit'></input>
					</div>
				</form>
				<button onClick={() => fetchDataFormDynamoDb()}> Fetch </button>
				<button onClick={() => addDataToDynamoDB()}> Put </button>
			</div>
		</main>
	);
}

export default Admin;
