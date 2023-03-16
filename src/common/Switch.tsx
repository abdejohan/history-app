import { FC } from "react";

interface SwitchProps {
	onChange: (value: boolean) => void;
}

const Switch: FC<SwitchProps> = ({ onChange }) => {
	return (
		<label className='switch'>
			<input type='checkbox' onChange={(e) => onChange(Boolean(e.target.checked))} />
			<span className='slider round'></span>
		</label>
	);
};

export default Switch;
