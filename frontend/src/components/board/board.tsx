import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Card from './card/card';
import Column from './column/column';

const Board = () => {
	const columns = useAppSelector(state => state.columns.filter(column => column.projectId === state.currentProject.currentProject));

	return (
		<div className="flex flex-row w-full pl-0 md:p-4 h-full">
			{columns.map((column, index) => {
				return <Column id={column.id} key={`column_${column.title}_${index}`} title={column.title} />;
			})}
		</div>
	);
};

export default Board;
