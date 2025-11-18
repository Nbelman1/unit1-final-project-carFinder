import { Link } from "react-router";
import leaveConfirmHero from "/images/hero-images/driving-on-highway.jpg";

const LeaveConfirmation = () => {
    return (
        <div className="container">
            
            <div className="centered">
                <img src={leaveConfirmHero} alt="driving on highway, steering wheel"/>
            </div>
            
            <h1>Are you sure?</h1>
            <p>Heads up - by starting over, you will lose all your progress. Are you sure you want to restart?</p>

            <div className="button-container">
                <Link to="/quiz" className="button-standard red">Start over</Link>
                {/* TODO: change "next question" button to "view my options" on final question */}
                {/* TODO: LINK return to previous question */}
                <button type="button" className="button-standard yellow">Continue quiz</button>
            </div>
        </div>
    );
};

export default LeaveConfirmation;
