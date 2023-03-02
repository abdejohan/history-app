import { useEffect, useState } from "react";
import { saveDataToDB } from "../database";
import { useForm, SubmitHandler } from "react-hook-form";
import { HistoryEvent } from "../types";
import BasicTabs from "../components/BasicTabs";
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
	Switch,
	NumberIncrementStepper,
	NumberDecrementStepper,
} from "@chakra-ui/react";

function calculateCentury(era: string, year: string): string {
	if (year.length > 3) return year.slice(0, 2) + "00" + era;
	if (year.length === 3) return year.slice(0, 1) + "00" + era;
	return "1" + era;
}

function Admin() {
	const [errorMessage, setErrorMessage] = useState<string>();
	const [successMessage, setSuccessMessage] = useState<string>();
	const [selectedEra, setSelectedEra] = useState<string>("BCE");
	const [checked, setChecked] = useState<boolean>(false);
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

		checked && values.endYear !== 0 ? null : delete values.endYear;
		const valuesToSubmit = {
			...values,
			century: calculateCentury(selectedEra, values.startYear.toString()),
		};

		try {
			console.log(valuesToSubmit);
			await saveDataToDB("Events", valuesToSubmit);
			setSuccessMessage("Succesfully saved.");
			setChecked(false);
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
					{/* CENTURY */}
					<div>
						<FormLabel htmlFor='century'>
							Time of event <span>*</span>
						</FormLabel>
						<div style={{ borderWidth: 1, borderRadius: 5, padding: "10px" }}>
							<div className='century-container'>
								<BasicTabs onChange={(value) => setSelectedEra(value)} />
								{/* START YEAR */}
								<FormControl>
									<div className='year-title'>
										<label htmlFor='year'>Year</label>
										<div className='interval-container'>
											<span>Interval</span>
											<Switch id='isChecked' onChange={() => setChecked(!checked)} />
										</div>
									</div>
									<FormControl isInvalid={errors.startYear}>
										<NumberInput clampValueOnBlur={false} step={1}>
											<NumberInputField
												{...register("startYear", {
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
											{errors.startYear && errors.startYear.message}
										</FormErrorMessage>
									</FormControl>
								</FormControl>

								{/* END YEAR */}
								<FormControl isInvalid={errors.endYear}>
									{checked && (
										<>
											<label htmlFor='year'>End year</label>
											<NumberInput defaultValue={0} clampValueOnBlur={false} step={1}>
												<NumberInputField
													{...register("endYear", {
														required: "This field is required",
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
												{errors.endYear && errors.endYear.message}
											</FormErrorMessage>
										</>
									)}
								</FormControl>
							</div>
						</div>
					</div>
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
}

export default Admin;
