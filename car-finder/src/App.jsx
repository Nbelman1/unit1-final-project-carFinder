import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import "./components/main-page/main.css";
import Header from './components/main-page/Header';
import Footer from './components/main-page/Footer';
import Home from './components/main-page/Home';
import Question from './components/quiz-questions/Question';
import ContactUs from './components/ContactUs';
import { carData } from './components/render-vehicles/carData';
import FormSubmitted from './components/FormSubmitted';
import LeaveConfirmation from './components/quiz-questions/LeaveConfirmation';
import CompleteList from './components/render-vehicles/CompleteList';
import Results from './components/render-vehicles/Results';
import { useState } from 'react';


function App() {

	const [userAnswers, setUserAnswers] = useState([]);
	const [userResponse, setUserResponse] = useState("");
	const [currentQuestion, setCurrentQuestion] = useState(0);

	return (
		
		<div className="main-container flex-grow">
			<Header 
				setUserAnswers={setUserAnswers} 
				setUserResponse={setUserResponse} 
				setCurrentQuestion={setCurrentQuestion} />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/complete-list" element={<CompleteList 
					carData={carData}/>} />
				<Route path="/contact-us" element={<ContactUs />} />
				<Route path="/form-submitted" element={<FormSubmitted />} />
				<Route path="/leave-confirmation" element={<LeaveConfirmation />} />
				<Route path="/quiz" element={<Question 
					userAnswers={userAnswers} 
					setUserAnswers={setUserAnswers} 
					userResponse={userResponse} 
					setUserResponse={setUserResponse} 
					currentQuestion={currentQuestion} 
					setCurrentQuestion={setCurrentQuestion} />} />
				<Route path="/results" element={<Results 
					userAnswers={userAnswers}/>} />
			</Routes>
			<Footer />
		</div>
  	)
}

export default App;
