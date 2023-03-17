import { FC, HTMLAttributes } from "react";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
	visible?: boolean;
}

const Spinner: FC<SpinnerProps> = ({ visible = true, ...props }) => {
	return (
		<div
			className='lds-ring'
			{...props}
			style={{ visibility: visible ? "visible" : "hidden", ...props.style }}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Spinner;
