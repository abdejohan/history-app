import React, { useState, FC, useEffect, useMemo, ReactNode } from "react";
import { HistoryEvent } from "../types";

type ContextType = {
	selectedCentury: string;
	setSelectedCentury: (century: string) => void;
	historyEvents: Array<any>;
	setHistoryEvents: (results: Array<any>) => void;
};

type ProviderProps = {
	children: ReactNode;
};

const GlobalContext = React.createContext<ContextType>({
	selectedCentury: "",
	setSelectedCentury: () => {},
	historyEvents: [],
	setHistoryEvents: () => {},
});

export const GlobalContextProvider: FC<ProviderProps> = ({ children }) => {
	const [selectedCentury, setSelectedCentury] = useState<string>("");
	const [historyEvents, setHistoryEvents] = useState<HistoryEvent[]>([]);

	useEffect(() => {
		// FIRST initialization of the values
		console.log("Welcome, the page and context is working");
	}, []);

	const state = useMemo(
		() => ({
			selectedCentury,
			setSelectedCentury,
			historyEvents,
			setHistoryEvents,
		}),
		[selectedCentury, setSelectedCentury, historyEvents, setHistoryEvents]
	);

	return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
