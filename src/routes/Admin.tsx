import { useState } from "react";
import { saveEventToDB } from "../database";
import { useForm, SubmitHandler } from "react-hook-form";
import { HistoryEvent } from "../types";

import { removeFalsyValues, generateUniqueSortKey, formatCentury } from "../utils";
import Button from "../common/Button";
import ContentView from "../components/ContentView";
import BasicTabs from "../components/BasicTabs";
import Switch from "../common/Switch";

const Admin = () => {
	const {
		register,
		getValues,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isValid, isDirty },
	} = useForm<HistoryEvent>({ mode: "onBlur" });
	const [errorMessage, setErrorMessage] = useState<string>();
	const [successMessage, setSuccessMessage] = useState<string>();
	const [startYear, setStartYear] = useState<string>("bce");
	const [endYear, setEndYear] = useState<string>("bce");
	const [switchValue, setSwitchValue] = useState(false);

	const onSubmit: SubmitHandler<HistoryEvent> = async (data, e) => {
		console.log("did we get here?");
		setErrorMessage(undefined); // Makes sure no old messages are being displayed
		setSuccessMessage(undefined); // Makes sure no old messages are being displayed
		const values = getValues();
		const cleanValues = removeFalsyValues(values);
		const eventObject = {
			...cleanValues,
			century: formatCentury(values.year),
			eventYearHash: generateUniqueSortKey(values.year, values.title),
		} as HistoryEvent;

		try {
			await saveEventToDB("HistoricalEvents", eventObject);
			setSuccessMessage("Succesfully saved.");
			reset(); // Clears the input fields
			console.log(eventObject);
		} catch (error) {
			console.log(error);
			setErrorMessage("Could not save, try again");
		}
	};

	return (
		<ContentView>
			<div className='form-container'>
				<h2>Add a new event</h2>
				<form onSubmit={handleSubmit(onSubmit)} className='new-event-form'>
					{/* TITLE */}
					<div className='input-container'>
						<label htmlFor='title'>
							Event title <span>*</span>
						</label>
						<input
							className='input-field'
							placeholder='Birth of Alexander the Great'
							type='text'
							{...register("title", {
								required: "The event needs a title.",
								minLength: { value: 5, message: "Minimum length of 5" },
							})}
						/>
						<div className='error-message'>{errors.title && errors.title.message}</div>
					</div>
					{/* EVENT YEAR */}
					<div className='period-container'>
						<div className='input-container period-item'>
							<label>
								Start year <span>*</span>
							</label>
							<BasicTabs tabs={["BCE", "CE"]} onChange={(value) => setStartYear(value)}>
								<input
									className='input-field'
									placeholder='356'
									type='number'
									{...register("year", {
										required: "Give the event a start year.",
										valueAsNumber: true,
										min: { value: 1, message: "Value cant be smaller than 1" },
									})}
								/>
							</BasicTabs>
							<div className='error-message'>{errors.year && errors.year.message}</div>
						</div>
						<div className='input-container period-item'>
							<div className='switch-and-label'>
								<label>End year</label>
								<Switch onChange={(checked) => setSwitchValue(checked)} />
							</div>
							<BasicTabs
								tabs={["BCE", "CE"]}
								onChange={(value) => setEndYear(value)}
								disabled={!switchValue}>
								<input
									className='input-field'
									type='number'
									{...register("year", {
										valueAsNumber: true,
										min: { value: 1, message: "Value cant be smaller than 1" },
									})}
								/>
							</BasicTabs>
							<div className='error-message'>{errors.year && errors.year.message}</div>
						</div>
					</div>

					{/* TEXT */}
					<div className='input-container'>
						<label htmlFor='text'>
							Event summary <span>*</span>
						</label>
						<textarea
							placeholder='Alexander the Great was a king of the ancient Greek kingdom of Macedon. He succeeded his father Philip II to...'
							{...register("text", {
								required: "Give a small summary of the event.",
								minLength: { value: 25, message: "Minimum of 25 characters." },
							})}
							rows={15}
						/>
						<div className='error-message'>{errors.text && errors.text.message}</div>
					</div>
					{/* LINK */}
					<div className='input-container'>
						<label htmlFor='url'>Link to more information (url)</label>
						<input
							placeholder='https://en.wikipedia.org/wiki/Alexander_the_Great'
							className='input-field'
							type='text'
							{...register("url")}
						/>
					</div>

					{/* (
						<label htmlFor='image'>Select a image</label>
						<input
						className="input-field"
						type='file'
						accept='image/*'
						{...register("image", { required: false })}
						/>
						<div className="error-message">{errors.image && errors.text.message}</div>
					) */}
					<Button
						type='submit'
						loading={isSubmitting}
						label='CREATE'
						className='submit-button'
						disabled={!isValid}
					/>

					{successMessage && !isDirty && (
						<span className='submit-status-message' style={{ color: "green" }}>
							{successMessage}
						</span>
					)}
					{errorMessage && (
						<span className='submit-status-message' style={{ color: "red" }}>
							{errorMessage}
						</span>
					)}
				</form>
			</div>
		</ContentView>
	);
};

export default Admin;
