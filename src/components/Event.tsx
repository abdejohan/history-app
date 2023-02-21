interface EventProps {
	event: any;
}

const Event: React.FC<EventProps> = ({ event }) => {
	return (
		<div className='story'>
			<h3>{event.title}</h3>
			<img src={event.image} alt='image of event' height='300' width='300' />
			<p>{event.text}</p>
		</div>
	);
};

export default Event;
