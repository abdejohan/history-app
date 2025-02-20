import { FC } from "react";
import { getCenturies } from "../utils";
const centuries = getCenturies();

interface SelectedCenturyProps {
	selected: (year: string) => void;
}

const SelectCentury: FC<SelectedCenturyProps> = ({ selected }) => {
	return (
		<section className='select-century-section'>
			<h2>Select a century</h2>
			<select onChange={(event) => selected(event.currentTarget.value)}>
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
