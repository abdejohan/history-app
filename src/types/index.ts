type HistoryEvent = {
	title: string;
	year: number;
	text: string;
	// image: any;
	link: {
		url: string;
		label: string;
	};
};

export type { HistoryEvent };
