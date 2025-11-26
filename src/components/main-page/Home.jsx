import { Link } from "react-router";
import homeHero from "/images/hero-images/keys-to-car.jpg";

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to CarFinder</h1>
            <h2>About Us</h2>
            <p>
                Today's automotive landscape can sure be confusing, with most manufacturers changing their lineup every single year. It can require a full-time job to keep track of modern features, trim levels, and vehicle types.
            </p>
            <p>
                Welcome to CarFinder, where we do the market research so you can find the vehicle that fits your needs, all from the comfort of your couch, your work desk, or even your current ride.
            </p>
            <div className="centered">
                <img src={homeHero} alt="keys to a sport car" />
            </div>
            <div>
                <p>CarFinder is a free app that helps you: </p> 
                <ul>
                    <li>Learn about new makes and models available on the market</li>
                    <li>Explore different features and capabilities to fit your needs</li>
                    <li>Steer clear of pushy salespeople and walk into the showroom with confidence</li>
                </ul>
                <p>Just tap the button below to get started!</p>
            </div>

            <div className="button-centered">
                <Link to="/quiz" className="button-standard yellow">Let's go!</Link>
            </div>
        </div>
    );
};

export default Home;
