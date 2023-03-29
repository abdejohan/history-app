import { ButtonHTMLAttributes, FC } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	loading?: boolean;
	color?: string;
	variant?: "text" | "outline";
}

const Button: FC<ButtonProps> = ({
	label,
	disabled,
	loading = false,
	onClick,
	color,
	variant,
	...props
}) => {
	// Get the CSS custom property value
	return (
		<button
			{...props}
			style={{ backgroundColor: color }}
			className={`${disabled ? "disabled" : undefined} ${variant}`}
			onClick={disabled ? undefined : onClick}>
			{!loading ? label : <Spinner />}
		</button>
	);
};

export default Button;
