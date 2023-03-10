import React, { useState, FunctionComponent, useEffect, useMemo } from "react";

type ContextType = {
	selectedCentury: number | null;
	setSelectedCentury: (century: number) => void;
};

const GlobalContext = React.createContext<ContextType>({
	selectedCentury: null,
	setSelectedCentury: () => {},
});

export const GlobalContextProvider: FunctionComponent = (props: any) => {
	const [selectedCentury, setSelectedCentury] = useState<number | null>(null);

	useEffect(() => {
		// FIRST initialization of the values
	}, []);

	const state = useMemo(
		() => ({
			selectedCentury,
			setSelectedCentury,
		}),
		[selectedCentury, setSelectedCentury]
	);

	return <GlobalContext.Provider value={state}>{props.children}</GlobalContext.Provider>;
};

export default GlobalContext;
