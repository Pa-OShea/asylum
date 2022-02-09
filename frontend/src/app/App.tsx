import React from 'react';
import Board from '../components/board/board';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import MainApp from '../components/main';
import Projects from '../components/projects/projects';

function App() {
	return (
		<div className="flex flex-col h-screen">
			<Header />
			<MainApp />
			<Footer />
		</div>
	);
}

export default App;
