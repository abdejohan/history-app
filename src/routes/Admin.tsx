import { useState } from "react";
import { saveDataToDB } from "../database";
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

function Admin() {
	const [errorMessage, setErrorMessage] = useState<string>();
	const [successMessage, setSuccessMessage] = useState<string>();
	const {
		register,
		getValues,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isValid, isDirty },
	} = useForm<HistoryEvent>({ mode: "onBlur" });

	const onSubmit: SubmitHandler<HistoryEvent> = async () => {
		const values = getValues();

		setErrorMessage(undefined);
		setSuccessMessage(undefined);

		try {
			await saveDataToDB("Events", values);
			setSuccessMessage("Succesfully saved.");
			reset(); // Clears the input fields
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
					<FormControl isInvalid={errors.eventTitle}>
						<FormLabel htmlFor='title'>
							Title <span>*</span>
						</FormLabel>
						<Input
							type='text'
							{...register("eventTitle", {
								required: "This field is required",
								minLength: { value: 5, message: "Minimum length of 5" },
							})}
						/>
						<FormErrorMessage className='error-message'>
							{errors.eventTitle && errors.eventTitle.message}
						</FormErrorMessage>
					</FormControl>
					{/* YEAR */}
					<FormControl isInvalid={errors.eventYear}>
						<FormLabel htmlFor='year'>
							Year <span>*</span>
						</FormLabel>
						<NumberInput
							clampValueOnBlur={false}
							step={1}
							min={-5000}
							max={Number(new Date().getFullYear())}>
							<NumberInputField
								{...register("eventYear", {
									required: "This field is required",
									valueAsNumber: true,
									max: {
										value: Number(new Date().getFullYear()),
										message: "Wow! We are not here yet :/",
									},
									min: {
										value: -5000,
										message: "Too far back, max -5000 years",
									},
								})}
							/>
							<NumberInputStepper>
								<NumberIncrementStepper className='increment' />
								<NumberDecrementStepper className='increment' />
							</NumberInputStepper>
						</NumberInput>
						<FormErrorMessage className='error-message'>
							{errors.eventYear && errors.eventYear.message}
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
								minLength: {
									value: 25,
									message: "Minimum of 25 characters.",
								},
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
						<p>Read more (url)</p>
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
}

export default Admin;
