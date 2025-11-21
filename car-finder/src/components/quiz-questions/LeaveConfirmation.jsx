import { Link } from "react-router";
import leaveConfirmHero from "/images/hero-images/driving-on-highway.jpg";

const LeaveConfirmation = ({ setUserAnswers, setUserResponse, setCurrentQuestion }) => {

    const resetQuiz = () => {
		setUserAnswers([]);
		setUserResponse("");
		setCurrentQuestion(0);
	}

    return (
        <div className="container">
            
            <div className="centered">
                <img src={leaveConfirmHero} alt="driving on highway, steering wheel"/>
            </div>
            
            <h1>Are you sure?</h1>
            <p>Heads up - by starting over, you will lose all your progress. Are you sure you want to restart?</p>

            <div className="button-container">
                <Link 
                    onClick={resetQuiz}
                    to="/quiz" 
                    className="button-standard red"
                >
                    Start over
                </Link>
                {/* TODO: fix bug. button does not reset state of follow up questions. pass setShowingFollowUp prop, reset to false */}
                <button type="button" className="button-standard yellow">Continue quiz</button>
            </div>
        </div>
    );
};

export default LeaveConfirmation;
