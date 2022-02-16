import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { addNewCard } from '../../../redux/cardSlice';
import { useAppDispatch } from '../../../redux/hooks';
import AddArea from '../../common/addArea';

type Props = {
	columnId: string;
};

const AddCard = (props: Props) => {
	const { columnId } = props;
	const dispatch = useAppDispatch();
	const [showAddBtn, setShowAddBtn] = useState(true);

	const newCard = (title: string) => {
		const id = `card_${uuid()}`;
		dispatch(addNewCard({ id, columnId, title }));
	};

	const toggleBtn = (event: any) => {
		console.log("HEre ")
		event.preventDefault();
		setShowAddBtn(!showAddBtn);
	};

	return (
		<div className="flex justify-between rounded-sm">
			{showAddBtn ? (

				<a id={`add_card_col_${columnId}`} className="block bg-inherit relative select-none pl-2 pb-1 w-full cursor-pointer hover:bg-slate-300" onClick={toggleBtn}>
					<span className="material-icons align-middle text-slate-600">add</span>
					<span className="align-middle text-slate-400">Add new card</span>
				</a>
			) : (
				<AddArea placeholder="Enter card title" onAdd={newCard} onClose={toggleBtn} />
			)}
		</div>
	);
};

export default AddCard;
