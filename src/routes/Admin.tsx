import { FormEvent } from "react";
import { fetchData, putData } from "../database";
import { useForm, SubmitHandler } from "react-hook-form";
import { HistoryEvent } from "../types";

function Admin() {
	const {
		register,
		getValues,
		handleSubmit,
		formState: { errors },
	} = useForm<HistoryEvent>();

	const onSubmit: SubmitHandler<HistoryEvent> = async () => {
		const values = getValues();
		console.log(values);
		putData("Events", values);
	};

	return (
		<main>
			<div>
				<h1 style={{ textDecoration: "underline" }}>Welcome Boss</h1>
				<h2>Upload new event</h2>
				<form onSubmit={handleSubmit(onSubmit)} className='event_form'>
					{/* TITLE */}
					<div className='input_wrapper'>
						<label htmlFor='title'>Title</label>
						<input type='text' {...register("title", { required: true })} />
						{errors.title && <span>This field is required</span>}
					</div>
					{/* YEAR */}
					<div className='input_wrapper'>
						<label htmlFor='year'>Year</label>
						<input
							type='number'
							{...register("year", { required: true, valueAsNumber: true })}
						/>
						{errors.year && <span>This field is required</span>}
					</div>
					{/* TEXT */}
					<div className='input_wrapper'>
						<label htmlFor='text'>Text</label>
						<textarea
							{...register("text", { required: true })}
							rows={15}
							minLength={50}
						/>
						{errors.text && <span>This field is required</span>}
					</div>
					{/* (
						<div className='input_wrapper'>
							<label htmlFor='image'>Select a image</label>
							<input
								type='file'
								accept='image/*'
								{...register("image", { required: false })}
							/>
							{errors.image && <span>This field is required</span>}
						</div>
					) */}
					<div className='input_wrapper'>
						<input type='submit' />
					</div>
				</form>
			</div>
		</main>
	);
}

export default Admin;
