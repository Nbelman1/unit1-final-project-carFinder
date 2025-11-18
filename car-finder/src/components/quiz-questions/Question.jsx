import { useState } from 'react';
import './question.css';
import { Link } from 'react-router';
import { followUpQuestions, mainQuestions } from './QuestionSet';


const Question = () => {

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [userResponse, setUserResponse] = useState("");
    const [userAnswers, setUserAnswers] = useState([]); // array to track user's answers to show relevant results
    const [showingFollowUp, setShowingFollowUp] = useState(false);

    const getQuestionToShow = () => {
        if (currentQuestion === 1 && !showingFollowUp) {
            const firstUserAnswer = userAnswers[0];
            
            // logic to choose applicable follow-up question
            if (firstUserAnswer === "Tackling daily life") {
                return followUpQuestions[0];
            } else if (firstUserAnswer === "Getting work done") {
                return followUpQuestions[1];
            } else if (firstUserAnswer === "Off-road adventures") {
                return followUpQuestions[2];
            } else if (firstUserAnswer === "Pure driving enjoyment") {
                return followUpQuestions[3];
            }
        }

        // return question whose id matches current question
        return mainQuestions[currentQuestion];
    }

    const getCurrentAnswers = () => {
        const renderedQuestion = getQuestionToShow();
        const answers = renderedQuestion.answer;
        const answerElements = []; // store in array to render answer options

        for (let i = 0; i < answers.length; i++) {            
            answerElements.push(
                <div key={i} className="radio-container">
                    <div>
                        <input 
                            type="radio" 
                            name={`user-response-${renderedQuestion.id}`} 
                            id={`id-${renderedQuestion}-answer-${i}`} 
                            value={answers[i].answerText} 
                            checked={userResponse === answers[i].answerText}
                            onChange={(e) => setUserResponse(e.target.value)}
                            required 
                        />
                        <label htmlFor={`id-${renderedQuestion}-answer-${i}`}>
                            {answers[i].answerText}
                        </label> <strong>i</strong> 
                        {/* TODO: link the "i" to modal */}
                    </div>
                </div>
            );
            
        };

        return answerElements;
    };

    const getCurrentQuestion = () => {
        const renderedQuestion = getQuestionToShow();

        return (
            <div className="container">
                <h2>{renderedQuestion.question}</h2>
                <fieldset>
                    <legend>Select the answer that fits you best</legend>
                    <p className={errorMessage ? "error-message" : "display-none"}>{errorMessage}</p>
                    {getCurrentAnswers()}
                </fieldset>
            </div>
        );
    };

    const validateForm = () => {
        if (userResponse) {
            setUserAnswers([...userAnswers, userResponse]);
            setErrorMessage("");
            setUserResponse("");
            
            // after answering follow-up, return to main questions
            if (currentQuestion === 1 && !showingFollowUp) {
                setShowingFollowUp(true);
            } else {
                setShowingFollowUp(false);
                setCurrentQuestion(currentQuestion + 1);
            }
        } else {
            setErrorMessage("Please select a response.");
        }
    };

    const getButton = () => {
        if (currentQuestion === mainQuestions.length - 1) {
            return (
                <Link to="/results" className="button-standard gray">Show results</Link>
            )
        } else {
            return (
                <button 
                    type="submit" 
                    className="button-standard yellow" 
                    onClick={validateForm}
                >
                    Next question    
                </button>
            )
        }
    };



    return (
        <>
            {getCurrentQuestion()}

            <div className="button-container">
                <Link to="/leave-confirmation" className="button-standard red centered">Start over</Link>
                {getButton()}
            </div>
        </>
    );

};

export default Question;
