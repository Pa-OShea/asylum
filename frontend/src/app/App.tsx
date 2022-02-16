import React from 'react';
import Board from '../components/board/board';
import AddColumnModal from '../components/board/column/addColumnModal';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MainApp from '../components/main';
import Projects from '../components/projects/projects';

function App() {
	return (
		<div className="flex flex-col h-screen">
			<MainApp />
		</div>
	);
}

export default App;
