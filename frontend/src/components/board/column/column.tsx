import { useAppSelector } from '../../../redux/hooks';
import Card from '../card/card';

type Props = {
	id: string;
	title: string;
};
const Column = (props: Props) => {
	const { id, title } = props;
	const cards = useAppSelector(state => state.cards.filter(card => card.columnId === props.id));

	return (
		<div id={id} className="flex justify-center p-3">
			<div className="block p-6 rounded shadow-lg bg-gray-100 max-w-sm">
				<h4>{title}</h4>
				{cards.map(card => (
					<Card id={card.id} key={`card_${card.id}`} title={card.title} description={card?.description} />
				))}

				<button type="button">
					<span className="material-icons">add</span>
				</button>
			</div>
		</div>
	);
};

export default Column;
