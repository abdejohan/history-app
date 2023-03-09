import { FC } from "react";
import { getCenturies, formatCentury } from "../utils";
const centuriesAsNumbers = getCenturies();

const SelectCentury: FC = (): JSX.Element => {
	return (
		<section className='select-century-section'>
			<h2>Select a century</h2>
			<select>
				<option value={0} />;
				{centuriesAsNumbers.map((century) => (
					<option key={century} value={century}>
						{formatCentury(century)}
					</option>
				))}
			</select>
		</section>
	);
};

export default SelectCentury;
