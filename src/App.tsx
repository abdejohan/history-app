import { useEffect, useLayoutEffect, useRef, useState } from "react";

const renderPoints = () => {
	const date = new Date();
	const currentYear = date.getFullYear();
	const startingYear = -100;
	const arrayOfPoints = [];

	for (let i = startingYear; i < 200; i++) {
		// Remove year 0
		if (i !== 0) {
			arrayOfPoints.push(
				<div className={`point_${i}`} key={i}>
					<h6>{i}</h6>
					<div className='hline' />
				</div>
			);
		}
	}
	return arrayOfPoints;
};

function App() {
	const centerRef = useRef<HTMLDivElement>(null);
	const [centerPosition, setCenterPosition] = useState([0, 0]);

	useEffect(() => {
		const { x, y } = centerRef.current!.getBoundingClientRect();
		console.log(x, y);

		const arr = document.elementFromPoint(x, y);
		console.log(arr);
	}, []);

	return (
		<div className='entry'>
			<div className='line'>
				<div className='center' ref={centerRef} />
				{renderPoints()}
			</div>
		</div>
	);
}

export default App;
