import { ButtonHTMLAttributes, FC } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	loading: boolean;
}

const Button: FC<ButtonProps> = ({
	label,
	disabled,
	loading = false,
	onClick,
	...props
}) => {
	return (
		<button
			{...props}
			className={disabled ? "disabled" : undefined}
			onClick={disabled ? undefined : onClick}>
			{!loading ? label : <Spinner />}
		</button>
	);
};

export default Button;
