import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	Box,
	TabPanel,
	Container,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ItemProps {
	selectedYear: any;
	setSelectedYear: any;
}

const centuriesBCE = Array(51)
	.fill(null)
	.map((item, index) => index * 100)
	.reverse();

const centuriesCE = Array(21)
	.fill(null)
	.map((item, index) => (index === 0 ? 1 : index * 100));

const YearSelection: React.FC<ItemProps> = ({ selectedYear, setSelectedYear }) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const [accordionIndex, setdAccordionIndex] = useState<number | number[]>();

	useEffect(() => {
		if (typeof accordionIndex === "number") {
			if (tabIndex === 0) console.log(centuriesBCE[accordionIndex]);
			if (tabIndex === 1) console.log(centuriesCE[accordionIndex]);
		}
	}, [accordionIndex]);

	return (
		<Container>
			<Heading as='h2' size='md' noOfLines={1}>
				SELECT A TIME PERIOD
			</Heading>
			<Tabs
				onChange={(index) => {
					setdAccordionIndex(-1);
					setTabIndex(index);
				}}>
				<TabList>
					<Tab>BCE / BC</Tab>
					<Tab>CE / AC</Tab>
				</TabList>
				<TabPanels
					overflowY='scroll'
					h='50vh'
					css={{
						"&::-webkit-scrollbar": {
							width: "4px",
						},
						"&::-webkit-scrollbar-track": {
							width: "6px",
						},
						"&::-webkit-scrollbar-thumb": {
							background: "#2B6CB0",
							borderRadius: "24px",
						},
					}}>
					<TabPanel>
						<Accordion
							index={accordionIndex}
							onChange={(index) => setdAccordionIndex(index)}>
							{centuriesBCE.map((centurie, index) => {
								if (centurie !== 0) {
									return (
										<AccordionItem key={index}>
											<Heading as='h2'>
												<AccordionButton>
													<Box as='span' flex='1' textAlign='left'>
														{centurie}
													</Box>
													<AccordionIcon />
												</AccordionButton>
											</Heading>
											<AccordionPanel pb={4}>
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
							index={accordionIndex}
							onChange={(index) => setdAccordionIndex(index)}>
							{centuriesCE.map((centurie, index) => {
								return (
									<AccordionItem key={index}>
										<Heading as='h2'>
											<AccordionButton>
												<Box as='span' flex='1' textAlign='left'>
													{centurie}
												</Box>
												<AccordionIcon />
											</AccordionButton>
										</Heading>
										<AccordionPanel pb={4}>
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
		</Container>
	);
};

export default YearSelection;
