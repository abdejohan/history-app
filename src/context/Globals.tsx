import React, { useState, FC, useMemo, ReactNode } from "react";
import { HistoryEvent } from "../types";

type ContextType = {
	selectedCentury: string;
	setSelectedCentury: (century: string) => void;
	historyEvents: Array<any> | null;
	setHistoryEvents: (results: Array<any>) => void;
};

type ProviderProps = {
	children: ReactNode;
};

const GlobalContext = React.createContext<ContextType>({
	selectedCentury: "",
	setSelectedCentury: () => {},
	historyEvents: null,
	setHistoryEvents: () => {},
});

export const GlobalContextProvider: FC<ProviderProps> = ({ children }) => {
	const [selectedCentury, setSelectedCentury] = useState<string>("");
	const [historyEvents, setHistoryEvents] = useState<HistoryEvent[] | null>(null);

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
