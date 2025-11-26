import { useState } from 'react';
import './question.css';
import { Link, useNavigate } from 'react-router';
import { followUpQuestions, mainQuestions } from './questionSet.js';

const Question = ({ userAnswers, setUserAnswers, userResponse, setUserResponse, currentQuestion, setCurrentQuestion, showingFollowUp, setShowingFollowUp }) => {

    const [errorMessage, setErrorMessage] = useState("");
    const [openModalIndex, setOpenModalIndex] = useState(null);
    const navigateTo = useNavigate();

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
                        </label> <strong
                            onClick={() => setOpenModalIndex(i)}
                            className="cursor-pointer modal-open"
                            >i</strong>
                    </div>
                </div>
            );
            
        };

        return answerElements;
    };

    const getCurrentQuestion = () => {
        const renderedQuestion = getQuestionToShow();
        const answers = renderedQuestion.answer;

        if (currentQuestion >= mainQuestions.length) {
            return null;
        }

        const renderModal = () => {
            if (openModalIndex !== null) {
                return (
                    <div className="modal-container">
                        <div className="modal-content">
                            <h2 className="modal-title">{answers[openModalIndex].answerText}</h2>
                            <h2 
                                onClick={() => setOpenModalIndex(null)}
                                className="cursor-pointer modal-close">
                                X
                            </h2>
                            <p>{answers[openModalIndex].modalContent}</p>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div className="container">
                <h2>{renderedQuestion.question}</h2>
                <fieldset>
                    <legend>Select the answer that fits you best</legend>
                    <p className={errorMessage ? "error-message" : "display-none"}>{errorMessage}</p>
                    {getCurrentAnswers()}
                </fieldset>
                
                {renderModal()}
            </div>
        );
    };

    const validateForm = (event) => {
        const onLastQuestion = (currentQuestion === mainQuestions.length -1);

        // early return to stop currentQuestion from becoming 4
        if (!userResponse) {
            event.preventDefault();
            setErrorMessage("Please select a response.");
            return;
        }

        // add selected answer to userAnswers array, reset error message and user response
        setUserAnswers([...userAnswers, userResponse]);
        setErrorMessage("");
        setUserResponse("");

        if (onLastQuestion) {
            navigateTo("/results", { state: { finalAnswers: [...userAnswers, userResponse] } });
            return;
        }

        // after answering a follow-up question, return to main questions
        if (currentQuestion === 1 && !showingFollowUp) {
            setShowingFollowUp(true);
        } else {
            setShowingFollowUp(false);
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    // logic to render either "show results" or "next question" button
    const getButton = () => {
        if (currentQuestion === mainQuestions.length - 1) {
            return (
                <button
                type="button" 
                className="button-standard gray"
                onClick={validateForm}>
                    Show results
                </button>
            )
        } else {
            return (
                <button 
                    type="button" 
                    className="button-standard yellow" 
                    onClick={validateForm}>
                    Next question    
                </button>
            )
        }
    };

    return (
        <>
            {getCurrentQuestion()}
            <div className="button-container">
                <Link 
                    to="/leave-confirmation" 
                    state={{currentQuestion : currentQuestion}}
                    className="button-standard red centered">
                    Start over
                </Link>
                {getButton()}
            </div>
        </>
    );

};

export default Question;
