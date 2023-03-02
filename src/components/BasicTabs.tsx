import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { centuriesBCE, centuriesCE } from "../utils";

interface BasicTabsProps {
	onChange: (era: string) => void;
}

const BasicTabs: FC<BasicTabsProps> = ({ onChange }) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const [selectedYear, setSelectedYear] = useState<number>();
	const [accordionIndex, setdAccordionIndex] = useState<number | number[]>();

	const handleTabIndex = (index: number) => {
		if (index === 0) return onChange("BCE");
		if (index === 1) return onChange("CE");
	};

	return (
		<section className='basic-tabs-container'>
			<Tabs onChange={(index) => handleTabIndex(index)}>
				<TabList className='tab-container'>
					<label style={{ whiteSpace: "nowrap" }}>Calendar era</label>
					<div className='tab-buttons-container'>
						<Tab _selected={{ color: "#eb455f" }} className='tab-button'>
							BCE/BC
						</Tab>
						<Tab _selected={{ color: "#eb455f" }} className='tab-button'>
							CE/AD
						</Tab>
					</div>
				</TabList>
			</Tabs>
		</section>
	);
};

export default BasicTabs;
