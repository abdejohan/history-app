import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	Box,
	Text,
	TabPanel,
	Container,
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

interface ItemProps {
	selectedYear: any;
	setSelectedYear: any;
}

const terminologyHelp = (
	<>
		<Heading size='xs'>BC and AD</Heading>
		<Text fontSize='sm'>
			The idea to count years from the birth of Jesus Christ was first proposed in the
			year 525 by Dionysius Exiguus, a Christian monk. Standardized under the Julian and
			Gregorian calendars, the system spread throughout Europe and the Christian world
			during the centuries that followed. AD stands for Anno Domini, Latin for “in the
			year of the Lord”, while BC stands for “before Christ”.
		</Text>
		<Heading size='xs' mt='4'>
			BCE and CE
		</Heading>
		<Text fontSize='sm'>
			CE stands for “common (or current) era”, while BCE stands for “before the common (or
			current) era”. These abbreviations have a shorter history than BC and AD, although
			they still date from at least the early 1700s. They have been in frequent use by
			Jewish academics for more than 100 years, but became more widespread in the later
			part of the 20th century, replacing BC/AD in a number of fields, notably science and
			academia.
		</Text>
	</>
);
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
		<Container>
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
		</Container>
	);
};

export default YearSelection;
