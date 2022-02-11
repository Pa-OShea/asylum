import React from 'react';
import Board from './board/board';
import Projects from './projects/projects';

const MainApp = () => {
	return (
		<main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
			<div className="flex items-start justify-between h-full">
				<Projects />
				<Board />
			</div>
		</main>
	);
};

export default MainApp;
