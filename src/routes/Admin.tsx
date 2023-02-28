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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Admin() {
	const [errorMessage, setErrorMessage] = useState<string>();
	const [successMessage, setSuccessMessage] = useState<string>();
	const {
		register,
		getValues,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting, isSubmitSuccessful, isValid, isDirty },
	} = useForm<HistoryEvent>({ mode: "onBlur" });

	const onSubmit: SubmitHandler<HistoryEvent> = async () => {
		const values = getValues();
		setErrorMessage(undefined);
		setSuccessMessage(undefined);

		try {
			await saveDataToDB("Events", values);
			reset();
			setSuccessMessage("Succesfully saved.");
		} catch (error) {
			console.log(error);
			setErrorMessage("Could not save, try again");
		}
	};

	useEffect(() => console.log(isSubmitSuccessful), [isSubmitSuccessful]);

	return (
		<section className='admin-container'>
			<h1>admin Dashboard</h1>
			<h2>Create new event</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='new-event-form'>
				{/* TITLE */}
				<FormControl isInvalid={errors.title}>
					<FormLabel htmlFor='title'>Title</FormLabel>
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
				{/* YEAR */}
				<FormControl isInvalid={errors.year}>
					<FormLabel htmlFor='year'>Year</FormLabel>
					<Input
						type='number'
						{...register("year", {
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
					<FormErrorMessage className='error-message'>
						{errors.year && errors.year.message}
					</FormErrorMessage>
				</FormControl>
				{/* TEXT */}
				<FormControl isInvalid={errors.text}>
					<FormLabel htmlFor='text'>Text</FormLabel>
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
		</section>
	);
}

export default Admin;
