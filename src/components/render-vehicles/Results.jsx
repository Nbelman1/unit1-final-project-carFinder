import { useEffect, useState } from "react";
import { carData } from "./carData.js";
import VehicleCard from "./VehicleCard.jsx";
import { Link, useLocation } from "react-router";

const Results = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const location = useLocation();
    const { finalAnswers } = location.state; // user's answers from quiz

    // convert number of passengers from string to a number that we can process
    const parsePassengers = (answerString) => {
        // driver plus 1 passenger can fit in 1- or more- row vehicles, aka 2 passengers
        if (answerString === "0 to 1") {
            return 2; 
        } 
        // 5 total passengers can fit in most 2- or 3-row vehicles 
        if (answerString === "2 to 4") {
            return 5;
        } 
        // 6 or more total passengers can fit in most 3-row vehicles
        if (answerString === "5 or more") {
            return 6;
        }
    };

    const filterResults = () => {
        const passengersAsANumber = parsePassengers(finalAnswers[2]);
        const resultsI1 = carData.filter(car => car.tags.includes(finalAnswers[1])); // filter car objects that match user's preferred tag
        const resultsI2 = resultsI1.filter(car => car.maxPassengers >= passengersAsANumber); // filter car objects that match user's preferred number of passengers
        const resultsI3 = resultsI2.filter(car => car.vehicleShape.includes(finalAnswers[3])); // filter car objects that match user's preferred vehicle type 
        const resultsI4 = resultsI3.filter(car => car.powertrain.includes(finalAnswers[4]));
        // filter car objects that match user's preferred powertrain type
        return resultsI4.map((car) => car.id);
    };

    const resultsIds = filterResults(finalAnswers);


    // run only after component mounts and renders
    useEffect(() => {
        if (resultsIds.length === 0) {
            setErrorMessage("Sorry, no results match your interests at this time. Please try again or check back later.");
        } else {
            setErrorMessage("");
        }
    }, [resultsIds]); // only re-run if resultsIds changes 

    return (
        <>
            <h2 className="centered">Congrats on completing the quiz! Here are your potential next vehicles: </h2>
            {resultsIds.map((id) => <VehicleCard key={id} id={id} />)}
            <p className={errorMessage ? "error-message-results container" : "display-none"}>{errorMessage}</p>
            <div className="button-container">
                <Link 
                    to="/" 
                    className="button-standard yellow">
                        Go home
                </Link>
            </div>
        </>
    );
};

export default Results;
