import { Link, useNavigate } from "react-router";
// @ts-ignore
import leaveConfirmHero from "/images/hero-images/driving-on-highway.jpg";

export interface LeaveConfirmationProps {
    setUserAnswers: React.Dispatch<React.SetStateAction<string[]>>;
    setUserResponse: React.Dispatch<React.SetStateAction<string>>;
    setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
    currentQuestion: number;
    setShowingFollowUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeaveConfirmation = ({ setUserAnswers, setUserResponse, setCurrentQuestion, currentQuestion, setShowingFollowUp }: LeaveConfirmationProps) => {

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
                    state={ currentQuestion }
                    className="button-standard yellow">
                        Continue quiz
                </Link>
            </div>
        </div>
    );
};

export default LeaveConfirmation;
