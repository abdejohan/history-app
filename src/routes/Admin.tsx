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

function Admin() {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<HistoryEvent>();

	const onSubmit: SubmitHandler<HistoryEvent> = async () => {
		const values = getValues();
		console.log(values);
		await saveDataToDB("Events", values);
	};

	return (
		<main>
			<div>
				<h1 style={{ textDecoration: "underline" }}>Welcome Boss</h1>
				<h2>Upload new event</h2>
				<form onSubmit={handleSubmit(onSubmit)} className='event_form'>
					{/* TITLE */}
					<FormControl isInvalid={errors.title}></FormControl>
					<FormLabel htmlFor='title'>Title</FormLabel>
					<Input
						type='text'
						{...register("title", {
							required: "This field is required",
							minLength: { value: 5, message: "Minimum length should be 4" },
						})}
					/>
					<FormErrorMessage>{errors.title && errors.title.message}</FormErrorMessage>
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
							})}
						/>
						<FormErrorMessage>{errors.year && errors.year.message}</FormErrorMessage>
						{/* TEXT */}
					</FormControl>
					<FormControl isInvalid={errors.text}>
						<FormLabel htmlFor='text'>Text</FormLabel>
						<Textarea
							{...register("text", { required: "This field is required" })}
							rows={15}
							minLength={50}
						/>
						<FormErrorMessage>{errors.text && errors.text.message}</FormErrorMessage>
					</FormControl>
					{/* (
					<FormControl isInvalid={errors.image}>
						<FormLabel htmlFor='image'>Select a image</FormLabel>
						<Input
						type='file'
						accept='image/*'
						{...register("image", { required: false })}
						/>
						<FormErrorMessage>{errors.image && errors.text.message}</FormErrorMessage>
					</FormControll>
					) */}
					<Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
						Submit
					</Button>
				</form>
			</div>
		</main>
	);
}

export default Admin;
