import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import "./components/main-page/main.css";
import Header from './components/main-page/Header';
import Footer from './components/main-page/Footer';
import Home from './components/main-page/Home';
import Question from './components/quiz-questions/Question';
import Modal from './components/quiz-questions/Modal';
import ContactUs from './components/ContactUs';
import VehicleCard from './components/render-vehicles/VehicleCard';
import { questionSet } from './components/quiz-questions/QuestionSet';
import { carData } from './components/render-vehicles/CarData';
import FormSubmitted from './components/FormSubmitted';
import LeaveConfirmation from './components/quiz-questions/LeaveConfirmation';
import CompleteList from './components/render-vehicles/CompleteList';


function App() {

	return (
		// TODO: add states to components - most are here for testing
		<div className="main-container flex-grow">
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/quiz/question" element={<Question questionSet={questionSet}/>} />
				<Route path="/complete-list" element={<CompleteList carData={carData}/>} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/form-submitted" element={<FormSubmitted />} />
				<Route path="leave-confirmation" element={<LeaveConfirmation />} />
			</Routes>
			
			<Footer />
		</div>
  	)
}

export default App;
