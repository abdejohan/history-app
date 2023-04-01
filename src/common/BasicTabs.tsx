import { FC, ReactNode, useState } from "react";

interface BasicTabsProps {
	onChange?: (era: string) => void;
	tabs: Array<string>;
	startIndex?: number;
	children?: ReactNode;
	disabled?: boolean;
}

const BasicTabs: FC<BasicTabsProps> = ({
	onChange,
	tabs,
	children,
	disabled,
	startIndex = 0,
}) => {
	const [era, setEra] = useState(tabs[startIndex]);

	const handleChange = (value: string) => {
		setEra(value);
		onChange && onChange(value);
	};

	return (
		<section className={`tabs-container ${disabled ? "disabled" : undefined}`}>
			<div className='tab-button-container'>
				{tabs &&
					tabs.map((tabName) => (
						<div
							role='button'
							key={tabName}
							onClick={() => handleChange(tabName)}
							className={`tab-button ${era === tabName ? "selected" : undefined}`}>
							{tabName}
						</div>
					))}
			</div>
			<div className='children-container'>{children}</div>
		</section>
	);
};

export default BasicTabs;
