import { useState } from "react";
import { saveEventToDB } from "../database";
import { useForm, SubmitHandler } from "react-hook-form";
import { HistoryEvent } from "../types";
import {
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
	Textarea,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";
import { removeFalsyValues, generateUniqueSortKey, formatCentury } from "../utils";

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

	const onSubmit: SubmitHandler<HistoryEvent> = async () => {
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
		<section className='admin-container'>
			<h1>admin Dashboard</h1>
			<div className='form-container'>
				<h2>Create new event</h2>
				<form onSubmit={handleSubmit(onSubmit)} className='new-event-form'>
					{/* TITLE */}
					<FormControl isInvalid={errors.title}>
						<FormLabel htmlFor='title'>
							Title <span>*</span>
						</FormLabel>
						<Input
							type='text'
							{...register("title", {
								required: "This field is required",
								minLength: { value: 5, message: "Minimum length of 5" },
							})}
						/>
						<FormErrorMessage className='error-message'>
							{errors.title && errors.title.message}
						</FormErrorMessage>
					</FormControl>
					{/* START YEAR */}
					<FormControl isInvalid={errors.year}>
						<FormLabel>
							Event year <span>*</span>
							<p>
								If the event took place before year 1, write the year as a negative number
							</p>
							<p style={{ marginBottom: "20px" }}>Example: Year 350 BCE = -350</p>
						</FormLabel>
						<NumberInput clampValueOnBlur={false} step={1}>
							<NumberInputField
								{...register("year", {
									required: "This field is required",
									valueAsNumber: true,
									min: { value: 1, message: "Value cant be smaller than 1" },
								})}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper className='increment' />
								<NumberDecrementStepper className='increment' />
							</NumberInputStepper>
						</NumberInput>
						<FormErrorMessage className='error-message'>
							{errors.year && errors.year.message}
						</FormErrorMessage>
					</FormControl>
					{/* EVENT DURATION */}
					<FormControl isInvalid={errors.duration}>
						<FormLabel htmlFor='duration'>
							Event duration
							<p>If the event was ongoing for more than 1 year</p>
						</FormLabel>
						<NumberInput clampValueOnBlur={false} step={1}>
							<NumberInputField
								{...register("duration", {
									valueAsNumber: true,
									min: { value: 1, message: "Value cant be smaller than 1." },
								})}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper className='increment' />
								<NumberDecrementStepper className='increment' />
							</NumberInputStepper>
						</NumberInput>
						<FormErrorMessage className='error-message'>
							{errors.duration && errors.duration.message}
						</FormErrorMessage>
					</FormControl>
					{/* TEXT */}
					<FormControl isInvalid={errors.text}>
						<FormLabel htmlFor='text'>
							Text <span>*</span>
						</FormLabel>
						<Textarea
							{...register("text", {
								required: "This field is required",
								minLength: { value: 25, message: "Minimum of 25 characters." },
							})}
							rows={15}
						/>
						<FormErrorMessage className='error-message'>
							{errors.text && errors.text.message}
						</FormErrorMessage>
					</FormControl>
					{/* LINK */}
					<FormControl isInvalid={errors.url}>
						<FormLabel htmlFor='url'>Read more (url)</FormLabel>
						<Input type='text' {...register("url")} />
					</FormControl>
					{/* (
					<FormControl isInvalid={errors.image}>
						<FormLabel htmlFor='image'>Select a image</FormLabel>
						<Input
						type='file'
						accept='image/*'
						{...register("image", { required: false })}
						/>
						<FormErrorMessage className="error-message">{errors.image && errors.text.message}</FormErrorMessage>
					</FormControll>
					) */}
					<Button
						mt={4}
						colorScheme='teal'
						isLoading={isSubmitting}
						loadingText='Saving'
						isDisabled={!isValid}
						_disabled={{ bg: "grey", _hover: { bg: "grey" } }}
						type='submit'
						className='submit-button'>
						CREATE
					</Button>
					{successMessage && !isDirty && (
						<span className='error-message' style={{ color: "green" }}>
							{successMessage}
						</span>
					)}
					{errorMessage && (
						<span className='error-message' style={{ color: "red" }}>
							{errorMessage}
						</span>
					)}
				</form>
			</div>
		</section>
	);
};

export default Admin;
