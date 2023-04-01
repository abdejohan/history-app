import { FC, useContext } from "react";
import GlobalContext from "../context/Globals";
import { getCenturies } from "../utils";
const centuries = getCenturies();

interface SelectedCenturyProps {
	onSelected: (year: string) => void;
}

const SelectCentury: FC<SelectedCenturyProps> = ({ onSelected }): JSX.Element => {
	const { selectedCentury } = useContext(GlobalContext);
	return (
		<section className='select-century-section'>
			<h2>Select a century</h2>
			<select
				value={selectedCentury}
				onChange={(event) => onSelected(event.currentTarget.value)}>
				<option value='' />;
				{centuries.map((century) => (
					<option key={century} value={century}>
						{century}
					</option>
				))}
			</select>
		</section>
	);
};

export default SelectCentury;
