interface ItemProps {
	event: any;
	selectedYear: any;
	setSelectedYear: any;
}

const YearListItem: React.FC<ItemProps> = ({ selectedYear, setSelectedYear, event }) => {
	return (
		<h2
			onClick={() => setSelectedYear(event.year)}
			className={`year ${selectedYear === event.year ? "selected" : ""}`}>
			{event.year}
		</h2>
	);
};

export default YearListItem;
