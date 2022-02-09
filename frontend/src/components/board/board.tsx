import React from 'react';
import Card from './card/card';

const Board = () => {
	return (
		<div className="w-full bg-gray-700">
			{[1, 2, 3].map(x => {
				return <Card />;
			})}
		</div>
	);
};

export default Board;
