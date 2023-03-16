import { ButtonHTMLAttributes, FC } from "react";
import Spinner from "./Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	loading: boolean;
}

const Button: FC<ButtonProps> = ({ label, disabled, loading = false, ...props }) => {
	return (
		<button {...props} className={disabled ? "disabled" : undefined}>
			{!loading ? label : <Spinner />}
		</button>
	);
};

export default Button;
