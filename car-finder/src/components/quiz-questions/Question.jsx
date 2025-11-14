import './question.css';

const Question = ({ questionSet }) => {
    return (
        <div className="container">
            <h2>{questionSet[0]["question"]}</h2>
            <fieldset>
                {/* TODO: the "i" will link to a modal and display modalContent */}
                {/* TODO: create function to generate inputs by mapping through answers of questions by id */}
                <legend>Select the answer that fits you best</legend>

            <div className="radio-container">
                <div>
                    <input type="radio" name="user-response" id="id-0-answer-0" value="id-0-answer-0" required />
                    <label htmlFor="id-0-answer-0">{questionSet[0]["answers"][0]["answer"]}</label> <strong>i</strong>
                </div>
                <br />
            
                <div>
                    <input type="radio" name="user-response" id="id-0-answer-1" value="id-0-answer-1" required />
                    <label htmlFor="id-0-answer-1">{questionSet[0]["answers"][1]["answer"]}</label> <strong>i</strong>
                </div>
                <br />

                <div>
                    <input type="radio" name="user-response" id="id-0-answer-2" value="id-0-answer-2" required />
                    <label htmlFor="id-0-answer-2">{questionSet[0]["answers"][2]["answer"]}</label> <strong>i</strong>
                </div>
                <br />

                <div>
                    <input type="radio" name="user-response" id="id-0-answer-3" value="id-0-answer-3" required />
                    <label htmlFor="id-0-answer-3">{questionSet[0]["answers"][3]["answer"]}</label> <strong>i</strong>
                </div>
                <br />
            </div>
    
            </fieldset>
            
            <div className="button-container">
                {/* TODO: link to LeaveConfirmation page */}
                <button type="button" className="button-standard red">Start over</button>
                {/* TODO: change "next question" button to "view my options" on final question */}
                {/* TODO: render next question and answers */}
                <button type="button" className="button-standard yellow">Next question</button>
            </div>

        </div>
    );
};

export default Question;
