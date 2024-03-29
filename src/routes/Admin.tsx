import { useState } from "react";
import { saveEventToDB } from "../database";
import { useForm, SubmitHandler } from "react-hook-form";
import { HistoryEvent } from "../types";
import { removeFalsyValues, generateUniqueSortKey, formatCentury } from "../utils";
import Button from "../common/Button";
import ContentView from "../components/ContentView";
import BasicTabs from "../components/BasicTabs";
import Switch from "../common/Switch";
const submitPassword = import.meta.env.VITE_SUBMIT_PASSWORD;

const Admin = () => {
	const {
		register,
		trigger,
		getValues,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isValid, isDirty },
	} = useForm<HistoryEvent & { password: string }>({ mode: "onBlur" });
	const [errorMessage, setErrorMessage] = useState<string>();
	const [successMessage, setSuccessMessage] = useState<string>();
	const [startEra, setStartEra] = useState<string>("BCE");
	const [endEra, setEndEra] = useState<string>("BCE");
	const [switchValue, setSwitchValue] = useState(false);

	const onSubmit: SubmitHandler<HistoryEvent> = async () => {
		setErrorMessage(undefined); // Makes sure no old messages are being displayed
		setSuccessMessage(undefined); // Makes sure no old messages are being displayed
		const values = getValues();
		const eventObject: HistoryEvent = {
			...values,
			century:
				// this turnery will convert the year into a negative number if it took place before year 1
				startEra === "BCE"
					? formatCentury(-parseInt(values.startYear))
					: formatCentury(parseInt(values.startYear)),
			eventYearHash: generateUniqueSortKey(parseInt(values.startYear), values.title),
			startYear: `${values.startYear}-${startEra}`,
			endYear: values.endYear ? `${values.endYear}-${endEra}` : undefined,
		};
		const cleanEventObject = removeFalsyValues(eventObject) as HistoryEvent;

		try {
			await saveEventToDB("HistoricalEvents", cleanEventObject);
			setSuccessMessage("Succesfully saved.");
			setSwitchValue(false);
			reset(); // Clears the input fields
		} catch (error) {
			console.log(error);
			setErrorMessage("Could not save, try again");
		}
	};

	return (
		<ContentView>
			<div className='form-container'>
				<h2>Add new event</h2>
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
							<BasicTabs tabs={["BCE", "CE"]} onChange={(value) => setStartEra(value)}>
								<input
									className='input-field'
									placeholder='356'
									type='number'
									{...register("startYear", {
										required: "Give the event a start year.",
										valueAsNumber: true,
										min: { value: 1, message: "Value cant be smaller than 1" },
									})}
								/>
							</BasicTabs>
							<div className='error-message'>
								{errors.startYear && errors.startYear.message}
							</div>
						</div>
						<div className='input-container period-item'>
							<label>End year</label>
							<div className='switch-container'>
								<Switch
									onChange={(checked) => {
										trigger("url");
										setSwitchValue(checked);
									}}
								/>
							</div>
							<BasicTabs
								tabs={["BCE", "CE"]}
								onChange={(value) => setEndEra(value)}
								disabled={!switchValue}>
								<input
									className='input-field'
									type='number'
									{...register("endYear", {
										required: {
											value: switchValue,
											message: "Enter a value or disable 'End year'",
										},
										valueAsNumber: true,
										min: { value: 1, message: "Value cant be smaller than 1" },
									})}
								/>
							</BasicTabs>
							<div className='error-message'>
								{errors.endYear && errors.endYear.message}
							</div>
						</div>
					</div>

					{/* TEXT */}
					<div className='input-container'>
						<label htmlFor='text'>
							Event summary <span>*</span>
						</label>
						<textarea
							placeholder='Alexander the Great was a king of the ancient Greek kingdom of Macedon. He succeeded his father Philip II to...'
							{...register("summary", {
								required: "Give a small summary of the event.",
								minLength: { value: 25, message: "Minimum of 25 characters." },
							})}
							rows={5}
						/>
						<div className='error-message'>
							{errors.summary && errors.summary.message}
						</div>
					</div>
					{/* LINK */}
					<div className='input-container'>
						<label htmlFor='url'>"Read more" URL</label>
						<input
							placeholder='https://en.wikipedia.org/wiki/Alexander_the_Great'
							className='input-field'
							type='text'
							{...register("url")}
						/>
					</div>
					{/* PASSWORD */}
					<div className='input-container'>
						<label htmlFor='url'>Password</label>
						<input
							placeholder='******'
							className='input-field'
							type='password'
							{...register("password", {
								validate: (value) => value !== submitPassword && "Incorrect password",
							})}
						/>
						<div className='error-message'>
							{errors.password && errors.password.message}
						</div>
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
