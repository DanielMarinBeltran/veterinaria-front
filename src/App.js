import React, { useState } from 'react';
import './styles/app.css';
import Header from './components/Header';
import Main from './components/Main.jsx';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';

function App() {


	return (
		<div className="app">
			<Header />
			<Routes>
				<Route path="/" element={<Main  />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
