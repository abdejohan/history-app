import { Heading, Text } from "@chakra-ui/react";
import sha256 from "crypto-js/sha256";

const terminologyHelp = (
	<div className='modal-text-wrapper'>
		<h4>BC and AD</h4>
		<p>
			The idea to count years from the birth of Jesus Christ was first proposed in the
			year 525 by Dionysius Exiguus, a Christian monk. Standardized under the Julian and
			Gregorian calendars, the system spread throughout Europe and the Christian world
			during the centuries that followed. AD stands for Anno Domini, Latin for “in the
			year of the Lord”, while BC stands for “before Christ”.
		</p>
		<h4>BCE and CE</h4>
		<p>
			CE stands for “common (or current) era”, while BCE stands for “before the common (or
			current) era”. These abbreviations have a shorter history than BC and AD, although
			they still date from at least the early 1700s. They have been in frequent use by
			Jewish academics for more than 100 years, but became more widespread in the later
			part of the 20th century, replacing BC/AD in a number of fields, notably science and
			academia.
		</p>
	</div>
);

// Removes falsy values (null, undefined, 0, "") from an object.
// 1. Convert the input object into an array of key-value pairs using Object.entries.
// 2. Use the reduce method to iterate over the array and accumulate a new object with only the truthy key-value pairs.
// 3. If the value is truthy, add the key-value pair to the accumulator and then return the object.
function removeFalsyValues(obj: Record<string, unknown>): Record<string, unknown> {
	const entriesAsArrays = Object.entries(obj);
	const clearedObject = entriesAsArrays.reduce(
		(accumulator: Record<string, unknown>, [key, value]) => {
			if (value) {
				accumulator[key] = value;
			}
			return accumulator;
		},
		{}
	);
	return clearedObject;
}

// We need to have multiple items in the database with the same partition key (century)
// but with unique sort keys, while still being able to sort items based on the year.
// 1. Generates a unique sort key based on the event year and title.
// 2. Takes the first 5 characters of the resulting hash and combines with the event year. (just so that the string is not too long)
// 3. Return value starts with the year so that db queries can be sorted.
function generateUniqueSortKey(year: number, title: string): string {
	const hash = sha256(year + title)
		.toString()
		.substring(0, 5);
	return `${year}-${hash}`;
}

// Takes a year as input and returns the century and era that the year falls in.
// Input for year before the year 1 is given as negative number. Example: Year 250 BCE is passed to function as -250
function yearToCentury(year: number): string {
	const century = Math.floor(Math.abs(year) / 100) + 1;
	const suffix =
		century % 10 === 1 && century % 100 !== 11
			? "st"
			: century % 10 === 2 && century % 100 !== 12
			? "nd"
			: century % 10 === 3 && century % 100 !== 13
			? "rd"
			: "th";
	const era = year < 0 ? "BCE" : "CE";
	return `${century}${suffix} century ${era}`;
}

const centuriesBCE = Array(51)
	.fill(null)
	.map((item, index) => index * 100)
	.reverse();

const centuriesCE = Array(21)
	.fill(null)
	.map((item, index) => (index === 0 ? 1 : index * 100));

const timelineData = [
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
	{
		title: "Wrote my first blog post ever on Medium",
		year: 1990,
		text: "Hello from the other side.",
		link: {
			url: "https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2",
			label: "Read more",
		},
	},
];

export {
	terminologyHelp,
	timelineData,
	centuriesBCE,
	centuriesCE,
	removeFalsyValues,
	yearToCentury,
	generateUniqueSortKey,
};
