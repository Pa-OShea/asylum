import { deleteColumn } from '../../../redux/columnSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import AddCard from '../card/addCard';
import Card from '../card/card';
import ColumnWrapper from './columnWrapper';

type Props = {
	id: string;
	title: string;
};
const Column = (props: Props) => {
	const { id, title } = props;
	const cards = useAppSelector(state => state.cards.filter(card => card.columnId === props.id));
	const dispatch = useAppDispatch();

	const removeColumn = () => {
		dispatch(deleteColumn(id));
	};

	return (
		<ColumnWrapper id={id}>

			<h4 className="pt-2 pl-2 pr-2 pb-4 overflow-hidden text-ellipsis whitespace-nowrap ">{title}</h4>
			{cards.map(card => (
				<Card id={card.id} key={`card_${card.id}`} title={card.title} description={card?.description} />
				))}

			<AddCard columnId={id} />
		</ColumnWrapper>
	);
};

export default Column;

/* <div className="flex justify-center p-3">
					<a className="block p-6 rounded shadow-lg bg-white max-w-sm w-full" onClick={removeColumn}>
					<span className="material-icons">add</span>
					<span>delete</span>
					</a>
				</div> */
