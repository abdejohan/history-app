import React, { useState, FC, useMemo, ReactNode } from "react";
import { Story } from "../types";

type ContextType = {
	selectedCentury: string;
	setSelectedCentury: (century: string) => void;
	stories: Array<Story> | null;
	setStories: (results: Array<any>) => void;
};

type ProviderProps = {
	children: ReactNode;
};

const GlobalContext = React.createContext<ContextType>({
	selectedCentury: "",
	setSelectedCentury: () => {},
	stories: null,
	setStories: () => {},
});

export const GlobalContextProvider: FC<ProviderProps> = ({ children }) => {
	const [selectedCentury, setSelectedCentury] = useState<string>("");
	const [stories, setStories] = useState<Array<Story> | null>(null);

	const state = useMemo(
		() => ({
			selectedCentury,
			setSelectedCentury,
			stories,
			setStories,
		}),
		[selectedCentury, setSelectedCentury, stories, setStories]
	);

	return <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>;
};

export default GlobalContext;
