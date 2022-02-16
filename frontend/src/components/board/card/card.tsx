type Props = {
	id: string;
	title: string;
	description?: string;
};

const Card = (props: Props) => {
	const { id, title } = props;

	return (
		<div id={id} className="block p-2 mb-2 rounded shadow-md bg-white">
			<p className="text-base p-3">{title}</p>
		</div>
	);
};

export default Card;
