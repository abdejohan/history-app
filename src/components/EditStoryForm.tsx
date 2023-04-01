import { useState, FC } from "react";
import { deleteStory, saveEventToDB } from "../database";
import { useForm, SubmitHandler } from "react-hook-form";
import { HistoryEvent } from "../types";
import { removeFalsyValues, generateUniqueSortKey, formatCentury } from "../utils";
import Button from "../common/Button";
import BasicTabs from "../components/BasicTabs";
import Switch from "../common/Switch";
import { useNavigate } from "react-router-dom";
import { accentColor, errorColor, successColor } from "../utils/colors";
const submitPassword = import.meta.env.VITE_SUBMIT_PASSWORD;

interface StoryProps {
	story: HistoryEvent;
}

const EditStoryForm: FC<StoryProps> = ({ story }) => {
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
	const [startEra, setStartEra] = useState<string>(
		story?.century.includes("CE") ? "CE" : "CE"
	);
	const [endEra, setEndEra] = useState<string>(
		story?.century.includes("CE") ? "CE" : "CE"
	);
	const [switchValue, setSwitchValue] = useState(false);
	const navigate = useNavigate();

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
			if (story) {
				await deleteStory(story.century, story.eventYearHash);
				await saveEventToDB(cleanEventObject);
			}
			if (!story) await saveEventToDB(cleanEventObject);
			setSuccessMessage("Succesfully saved.");
			setSwitchValue(false);
			reset(); // Clears the input fields
		} catch (error) {
			console.log(error);
			setErrorMessage("Could not save, try again");
		}
	};

	const handleDelete = async () => {
		try {
			await deleteStory(story?.century, story?.eventYearHash);
			navigate("/");
		} catch (error) {}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='story-form'>
			{/* TITLE */}
			<div className='input-container'>
				<label htmlFor='title'>
					Event title <span>*</span>
				</label>
				<input
					className='input-field'
					placeholder={story ? undefined : "Birth of Alexander the Great"}
					defaultValue={story?.title}
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
					<BasicTabs
						startIndex={story?.century.includes("BCE") ? 0 : 1}
						tabs={["BCE", "CE"]}
						onChange={(value) => setStartEra(value)}>
						<input
							className='input-field'
							placeholder={story ? undefined : "356"}
							defaultValue={story?.startYear.split("-")[0]}
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
						startIndex={story?.endYear?.includes("BCE") ? 0 : 1}
						tabs={["BCE", "CE"]}
						onChange={(value) => setEndEra(value)}
						disabled={!switchValue}>
						<input
							className='input-field'
							defaultValue={story?.endYear}
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
					<div className='error-message'>{errors.endYear && errors.endYear.message}</div>
				</div>
			</div>

			{/* TEXT */}
			<div className='input-container'>
				<label htmlFor='text'>
					Event summary <span>*</span>
				</label>
				<textarea
					placeholder={
						story
							? undefined
							: "Alexander the Great was a king of the ancient Greek kingdom of Macedon. He succeeded his father Philip II to..."
					}
					defaultValue={story?.summary}
					{...register("summary", {
						required: "Give a small summary of the event.",
						minLength: { value: 25, message: "Minimum of 25 characters." },
					})}
					rows={5}
				/>
				<div className='error-message'>{errors.summary && errors.summary.message}</div>
			</div>
			{/* LINK */}
			<div className='input-container'>
				<label htmlFor='url'>"Read more" URL</label>
				<input
					placeholder={
						story ? undefined : "https://en.wikipedia.org/wiki/Alexander_the_Great"
					}
					defaultValue={story?.url}
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
					{...register("password", { validate: (value) => value === submitPassword })}
				/>
				<div className='error-message'>{errors.password && errors.password.message}</div>
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
				label='SAVE CHANGES'
				disabled={!isValid}
				color={successColor}
			/>
			<Button
				type='button'
				label='DELETE STORY'
				onClick={handleDelete}
				color={errorColor}
			/>
			<Button type='button' label='RETURN' onClick={() => navigate("/")} variant='text' />

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
	);
};

export default EditStoryForm;
