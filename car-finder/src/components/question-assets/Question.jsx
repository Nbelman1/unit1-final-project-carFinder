const Question = ({ questionSet }) => {
    return (
        <>
            <h3>{questionSet[0]["question"]}</h3>
            <fieldset>
                {/* TODO: the "i" will link to a modal and display modalContent */}
                {/* TODO: create function to generate inputs by mapping through answers of questions by id */}
                <legend>Select the answer that fits you best</legend>

                <input type="radio" name="user-response" value="id-0-answer-0" required />
                <label for="id-0-answer-0">{questionSet[0]["answers"][0]["answer"]}</label> <strong>i</strong>
                <br />
            
                <input type="radio" name="user-response" value="id-0-answer-1" required />
                <label for="id-0-answer-1">{questionSet[0]["answers"][1]["answer"]}</label> <strong>i</strong>
                <br />

                <input type="radio" name="user-response" value="id-0-answer-2" required />
                <label for="id-0-answer-2">{questionSet[0]["answers"][2]["answer"]}</label> <strong>i</strong>
                <br />

                <input type="radio" name="user-response" value="id-0-answer-3" required />
                <label for="id-0-answer-3">{questionSet[0]["answers"][3]["answer"]}</label> <strong>i</strong>
                <br />
    
            </fieldset>
            {/* TODO: reset to question 0 */}
            <button type="button">Start over</button>
            {/* TODO: change "next question" button to "view my options" on final question */}
            {/* TODO: render next question and answers */}
            <button type="button">Next question</button>

        </>
    );
};

export default Question;
