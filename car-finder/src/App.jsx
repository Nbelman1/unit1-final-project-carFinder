import { HashRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './index.css';
import "./components/main-page/main.css";
import Header from './components/main-page/Header';
import Home from './components/main-page/Home';
import CompleteList from './components/render-vehicles/CompleteList';
import { carData } from './components/render-vehicles/carData';
import ContactUs from './components/ContactUs';
import FormSubmitted from './components/FormSubmitted';
import LeaveConfirmation from './components/quiz-questions/LeaveConfirmation';
import Question from './components/quiz-questions/Question';
import Results from './components/render-vehicles/Results';
import Footer from './components/main-page/Footer';

function App() {

	const [userAnswers, setUserAnswers] = useState([]);
	const [userResponse, setUserResponse] = useState("");
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showingFollowUp, setShowingFollowUp] = useState(false);

	return (
		
		<>
			<Header 
				setUserAnswers={setUserAnswers} 
				setUserResponse={setUserResponse} 
				setCurrentQuestion={setCurrentQuestion}
				setShowingFollowUp={setShowingFollowUp} 
			/>
			<div className="main-container flex-grow">	
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/complete-list" element={<CompleteList 
						carData={carData}/>} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/form-submitted" element={<FormSubmitted />} />
					<Route path="/leave-confirmation" element={<LeaveConfirmation 
						setUserAnswers={setUserAnswers}	
						setUserResponse={setUserResponse}
						setCurrentQuestion={setCurrentQuestion}
						currentQuestion={currentQuestion}
						setShowingFollowUp={setShowingFollowUp} />} 
					/>
					<Route path="/quiz" element={<Question 
						userAnswers={userAnswers} 
						setUserAnswers={setUserAnswers} 
						userResponse={userResponse} 
						setUserResponse={setUserResponse} 
						currentQuestion={currentQuestion} 
						setCurrentQuestion={setCurrentQuestion} 
						showingFollowUp={showingFollowUp} 
						setShowingFollowUp={setShowingFollowUp} />} 
					/>
					<Route path="/results" element={<Results 
						userAnswers={userAnswers}/>} 
					/>
				</Routes>
			</div>
			<Footer />
		</>
  	)
}

export default App;
