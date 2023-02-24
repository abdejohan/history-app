import { Heading, Text } from "@chakra-ui/react";

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

const timelineData = [
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "HELLO FROM THE OTHER SIDE",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "HELLO FROM THE OTHER SIDE",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "HELLO FROM THE OTHER SIDE",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "HELLO FROM THE OTHER SIDE",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
];

export { terminologyHelp, timelineData };
