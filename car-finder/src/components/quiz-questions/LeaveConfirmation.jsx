import leaveConfirmHero from "../../assets/images/hero-images/driving-on-highway.jpg";

const LeaveConfirmation = () => {
    return (
        <div className="container">
            
            <div className="centered">
                <img src={leaveConfirmHero} alt="driving on highway, steering wheel"/>
            </div>
            
            <h1>Are you sure?</h1>
            <p>Heads up - by starting over, you will lose all your progress. Are you sure you want to start over?</p>
            <p>You can also finish the quiz early. Note that you may see extra vehicles that don't fit what you're looking for.</p>

            <div className="button-container">
                {/* TODO: link to first question page */}
                <button type="button" className="button-standard red">Start over</button>
                {/* TODO: change "next question" button to "view my options" on final question */}
                {/* TODO: render next question and answers */}
                <button type="button" className="button-standard yellow">Finish quiz</button>
            </div>
        </div>
    );
};

export default LeaveConfirmation;
