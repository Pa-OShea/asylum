import React from 'react';
import { v4 as uuid } from 'uuid';
import { addNewCard } from '../../../redux/cardSlice';
import { useAppDispatch } from '../../../redux/hooks';

type Props = {
	columnId: string;
};

const AddCard = (props: Props) => {
	const { columnId } = props;
	const dispatch = useAppDispatch();

	const newCard = () => {
		const id = `card_${uuid()}`;
		dispatch(addNewCard({ id, columnId, title: 'wow new card' }));
	};

	return (
		<a className="block p-6 rounded shadow-lg bg-white max-w-sm w-full" onClick={newCard}>
			<span className="material-icons">add</span>
			<span>add new card</span>
		</a>
	);
};

export default AddCard;
