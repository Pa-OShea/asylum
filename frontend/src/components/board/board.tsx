import React from 'react';
import Card from './card/card';
import Column from './column/column';

const Board = () => {
	return (
		<div className="flex flex-row w-full pl-0 md:p-4 h-full">
			{[1, 2, 3].map(x => {
				return (
					<Column>
						<Card key={`card_1${x}`} />
						<Card key={`card_2${x}`} />
					</Column>
				);
			})}
		</div>
	);
};

export default Board;
