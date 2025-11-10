const ContactUs = () => {
    return (
        <>
            <h2>Contact Us</h2>
            <fieldset>
            <legend>Feedback form</legend>
            <p>Questions, comments, concerns? Use this feedback form to reach out!</p>
            <form>
                <label for="first-name">First name: </label>
                <input type="text" id="first-name" name="first-name" placeholder="John" required />
                
                <br />

                <label for="last-name">Last name: </label>
                <input type="text" id="last-name" name="last-name" placeholder="Smith" required />
                
                <br />

                <label for="email-address">Email address: </label>
                <input type="email" id="email-address" name="email-address" placeholder="jsmith@domain.com" required />

                <br />

                <label for="feedback">Feedback: </label>
                <br />
                <textarea id="feedback" name="feedback" rows="5" cols="60" placeholder="Enter your questions, comments, or concerns" maxlength="1000" required></textarea>
            </form>
            {/* TODO: link button to FormSubmitted page */}
            <button type="submit">Send it!</button>
            </fieldset>
        </>
    );
};

export default ContactUs;
