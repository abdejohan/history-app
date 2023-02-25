import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	Box,
	TabPanel,
	Flex,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Heading,
} from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import InfoModal from "./InfoModal";
import { centuriesBCE, centuriesCE, terminologyHelp } from "../utils";

const SelectCentury: FC = () => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const [selectedYear, setSelectedYear] = useState<number>();
	const [accordionIndex, setdAccordionIndex] = useState<number | number[]>();

	useEffect(() => {
		if (typeof accordionIndex === "number") {
			if (tabIndex === 0) console.log(centuriesBCE[accordionIndex]);
			if (tabIndex === 1) console.log(centuriesCE[accordionIndex]);
		}
	}, [accordionIndex]);

	return (
		<section className='select-century-container'>
			<h3>SELECT A TIME PERIOD</h3>
			<Tabs
				onChange={(index) => {
					setdAccordionIndex(-1);
					setTabIndex(index);
				}}>
				<TabList className='tab-container'>
					<div className='tab-buttons-container'>
						<Tab _selected={{ color: "#eb455f" }} className='tab-button'>
							BCE / BC
						</Tab>
						<Tab _selected={{ color: "#eb455f" }} className='tab-button'>
							CE / AD
						</Tab>
					</div>
					<InfoModal title='Abbreviations' infoText={terminologyHelp} />
				</TabList>
				<TabPanels className='scroll-tab-panel scroll-panel'>
					<TabPanel>
						<Accordion
							as='ul'
							index={accordionIndex}
							onChange={(index) => setdAccordionIndex(index)}>
							{centuriesBCE.map((centurie, index) => {
								if (centurie !== 0) {
									return (
										<AccordionItem key={index} as='li'>
											<h4>
												<AccordionButton>
													<span>{centurie}</span>
													<AccordionIcon className='chevron-down' />
												</AccordionButton>
											</h4>
											<AccordionPanel className='accordion-content'>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
												enim ad minim veniam, quis nostrud exercitation ullamco laboris
												nisi ut aliquip ex ea commodo consequat.
											</AccordionPanel>
										</AccordionItem>
									);
								}
							})}
						</Accordion>
					</TabPanel>
					<TabPanel>
						<Accordion
							as='ul'
							index={accordionIndex}
							onChange={(index) => setdAccordionIndex(index)}>
							{centuriesCE.map((centurie, index) => {
								return (
									<AccordionItem key={index} as='li'>
										<h4>
											<AccordionButton>
												<span>{centurie}</span>
												<AccordionIcon className='chevron-down' />
											</AccordionButton>
										</h4>
										<AccordionPanel className='accordion-content'>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
											eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
											ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
											aliquip ex ea commodo consequat.
										</AccordionPanel>
									</AccordionItem>
								);
							})}
						</Accordion>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</section>
	);
};

export default SelectCentury;
