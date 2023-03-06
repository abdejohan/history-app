import { Tabs, TabList, TabPanels, Tab, TabPanel, Select } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import InfoModal from "./InfoModal";
import { centuriesBCE, centuriesCE, terminologyHelp, yearToCentury } from "../utils";

const SelectCentury: FC = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const [selectedYear, setSelectedYear] = useState<number>();

	return (
		<section className='select-century-container'>
			<h3>SELECT A TIME PERIOD</h3>
			<Tabs onChange={(index) => setTabIndex(index)} variant='enclosed' size='lg'>
				<TabList className='tab-container'>
					<Tab
						className='tab-button'
						_selected={{ borderColor: "#eb455f", borderBottomColor: "#2b3467" }}>
						BCE / BC
					</Tab>
					<Tab
						className='tab-button'
						_selected={{ borderColor: "#eb455f", borderBottomColor: "#2b3467" }}>
						CE / AD
					</Tab>
					<InfoModal infoText={terminologyHelp} />
				</TabList>
				<Select placeholder=' ' size='lg'>
					{tabIndex === 0
						? centuriesBCE.map((century, index) => {
								if (century !== 0)
									return <option value={century}>{yearToCentury(century)}</option>;
						  })
						: centuriesCE.map((century, index) => (
								<option value={century}>{yearToCentury(century)}</option>
						  ))}
				</Select>
			</Tabs>
		</section>
	);
};

export default SelectCentury;
