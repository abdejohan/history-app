type HistoryEvent = {
	century: string;
	eventYearHash: string;
	title: string;
	description?: string;
	text: string;
	link?: {
		url: string;
		label: string;
	};
	year: number;
	duration: number;
};

export type { HistoryEvent };
