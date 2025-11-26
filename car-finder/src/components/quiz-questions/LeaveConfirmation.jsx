import { Link, useNavigate } from "react-router";
import leaveConfirmHero from "/images/hero-images/driving-on-highway.jpg";

const LeaveConfirmation = ({ setUserAnswers, setUserResponse, setCurrentQuestion, currentQuestion, setShowingFollowUp }) => {

    const navigateTo = useNavigate();

    const resetQuiz = () => {
		setUserAnswers([]);
		setUserResponse("");
		setCurrentQuestion(0);
        setShowingFollowUp(false);
        navigateTo("/quiz");
	};

    return (
        <div className="container">
            
            <div className="centered">
                <img src={leaveConfirmHero} alt="driving on highway, steering wheel" className="small-img"/>
            </div>
            
            <h1>Are you sure?</h1>
            <p>Heads up - by starting over, you will lose all your progress. Are you sure you want to restart?</p>

            <div className="button-container">
                <button 
                    onClick={resetQuiz}
                    className="button-standard red"
                    style={{ zIndex: 1000 }}>
                        Start over
                </button>
                <Link 
                    to="/quiz" 
                    state={{currentQuestion : currentQuestion}}
                    className="button-standard yellow">
                        Continue quiz
                </Link>
            </div>
        </div>
    );
};

export default LeaveConfirmation;
