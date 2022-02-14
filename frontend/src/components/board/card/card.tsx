import React from 'react';
import { deleteCard } from '../../../redux/cardSlice';
import { useAppDispatch } from '../../../redux/hooks';

type Props = {
	id: string;
	title: string;
	description?: string;
};

const Card = (props: Props) => {
	const { id, title, description } = props;
	const dispatch = useAppDispatch();

	const removeCard = () => {
		dispatch(deleteCard(id));
	};
	return (
		<div id={id} className="flex justify-center p-3">
			<div className="block p-6 rounded shadow-lg bg-white max-w-sm w-full">
				<h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{title}</h5>
				<p className="text-gray-700 text-base mb-4">{description}</p>
				<button
					type="button"
					onClick={removeCard}
					className="inline-block px-6 py-2.5 bg-blue-600
                     text-white font-medium text-xs leading-tight uppercase 
                     rounded shadow-md hover:bg-blue-700 hover:shadow-lg 
                     focus:bg-blue-700 focus:shadow-lg focus:outline-none 
                     focus:ring-0 active:bg-blue-800 active:shadow-lg 
                     transition duration-150 ease-in-out"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Card;
