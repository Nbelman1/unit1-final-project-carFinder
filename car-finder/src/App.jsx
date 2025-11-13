import { useState } from 'react';
import './index.css';
import Header from './components/main-page/Header';
import Footer from './components/main-page/Footer';
import Home from './components/main-page/Home';
import Question from './components/quiz-questions/Question';
import Modal from './components/quiz-questions/Modal';
import ContactUs from './components/ContactUs';
import VehicleCard from './components/render-vehicles/VehicleCard';
import { questionSet } from './components/quiz-questions/QuestionSet';
import { carData } from './components/render-vehicles/CarData';



function App() {

	return (
		// TODO: add states to components - most are here for testing
    	<div className="main-container flex-grow">
      		<Header />
			<Home />
			<VehicleCard carData={carData}/>
			<Footer />
    	</div>
  	)
}

export default App;
