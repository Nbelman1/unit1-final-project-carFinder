import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Question from './components/question-assets/Question';
import { questionSet } from './components/question-assets/QuestionSet';
import Modal from './components/question-assets/Modal';
import ContactUs from './components/ContactUs';


function App() {

	return (
		// TODO: add states to components - most are here for testing
    	<div>
      		<Header />
			<Home />
			<Question questionSet={questionSet} />
			<Modal questionSet={questionSet} />
			<ContactUs />
			<Footer />
    	</div>
  	)
}

export default App;
