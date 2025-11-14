import formSubmittedHero from "../assets/images/hero-images/ford-mustang-interior.jpg";

const FormSubmitted = () => {
    return (
        <div className="container">
            <div className="centered">
                <img src={formSubmittedHero} alt="interior of classic Ford Mustang" className="header-image"/>
            </div>

            <h1>Form Submitted Successfully</h1>
            <p>Thank you for your feedback; we hope you enjoy your time on our site.</p>

            <div className="button-centered">
                <button type="button" className="button-standard yellow">Go Home</button>
            </div>
            
        </div>
    );
};

export default FormSubmitted;
