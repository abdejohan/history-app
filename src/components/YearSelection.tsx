import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	Box,
	Text,
	TabPanel,
	Flex,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
	Heading,
	useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import InfoModal from "./InfoModal";
import { terminologyHelp } from "../utils";

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
	const { onOpen } = useDisclosure();

	useEffect(() => {
		if (typeof accordionIndex === "number") {
			if (tabIndex === 0) console.log(centuriesBCE[accordionIndex]);
			if (tabIndex === 1) console.log(centuriesCE[accordionIndex]);
		}
	}, [accordionIndex]);

	return (
		<Flex borderWidth={1}>
			<Heading as='h2' size='md' noOfLines={1}>
				SELECT A TIME PERIOD
			</Heading>
			<Tabs
				onChange={(index) => {
					setdAccordionIndex(-1);
					setTabIndex(index);
				}}>
				<TabList
					display='flex'
					justifyContent='space-between'
					alignItems='center'
					paddingRight={10}>
					<Box display='flex'>
						<Tab>BCE / BC</Tab>
						<Tab>CE / AC</Tab>
					</Box>
					<InfoModal title='What is what?' infoText={terminologyHelp} />
				</TabList>
				<TabPanels overflowY='scroll' h='50vh' className='scroll_panel'>
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
		</Flex>
	);
};

export default YearSelection;
