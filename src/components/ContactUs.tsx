import { useState } from "react";
import { useNavigate } from "react-router";
import { validateContactForm } from "../utils/contactHelpers";

const ContactUs = () => {

    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorFeedback, setErrorFeedback] = useState("");

    const [firstNameValue, setFirstNameValue] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [feedbackValue, setFeedbackValue] = useState("");

    const navigateTo = useNavigate();

    const validateForm = () => {
        const report = validateContactForm(firstNameValue, lastNameValue, emailValue, feedbackValue);

        setErrorFirstName(report.errors.firstName);
        setErrorLastName(report.errors.lastName);
        setErrorEmail(report.errors.email);
        setErrorFeedback(report.errors.feedback);

        if (report.isValid) {
            navigateTo("/form-submitted");
        }
    }

    return (
        <div className="container"> 
            <h2>Contact Us</h2>
            <fieldset>
                <legend>Feedback Form</legend>
                <p>Questions, comments, concerns? Use this feedback form to reach out!</p>
                <form className="centered">

                    <label htmlFor="first-name">First name: 
                        <p className={errorFirstName ? "error-message" : "display-none"}>
                        <br /> {errorFirstName}</p> 
                    </label>
                    <input 
                        type="text" 
                        id="first-name" 
                        name="first-name" 
                        placeholder="John" 
                        onChange={(e) => setFirstNameValue(e.target.value)} 
                        required 
                    />
                
                    <br />

                    <label htmlFor="last-name">Last name: 
                        <p className={errorLastName ? "error-message" : "display-none"}>
                        <br /> {errorLastName}</p> 
                    </label>
                    <input 
                        type="text" 
                        id="last-name" 
                        name="last-name" 
                        placeholder="Smith" 
                        onChange={(e) => setLastNameValue(e.target.value)} 
                        required
                    />
                
                    <br />

                    <label htmlFor="email-address">Email address: 
                        <p className={errorEmail ? "error-message" : "display-none"}>
                        <br /> {errorEmail}</p> 
                    </label>
                    <input 
                        type="email" 
                        id="email-address" 
                        name="email-address" 
                        placeholder="jsmith@domain.com" 
                        onChange={(e) => setEmailValue(e.target.value)} 
                        required 
                    />
                
                    <br />

                    <label htmlFor="feedback">Feedback: 
                        <p className={errorFeedback ? "error-message" : "display-none"}>
                        <br /> {errorFeedback}</p> 
                    </label>
                    
                    <br />
                    
                    <textarea id="feedback" name="feedback" rows={5} placeholder="Enter your questions, comments, or concerns" maxLength={1000} 
                    onChange={(e) => setFeedbackValue(e.target.value)} required></textarea>
                </form>

                <div className="button-centered">
                    <button type="submit" className="button-standard yellow" onClick={validateContactForm}>Send it</button>
                </div>

            </fieldset>
        </div>
    );

};

export default ContactUs;
