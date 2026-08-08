import { useEffect, useState, useMemo } from "react";
import { Link, useLocation } from "react-router";
import { carData } from "./carData.ts";
import VehicleCard from "./VehicleCard.tsx";
import { getFilteredVehicleIds, QuizAnswers } from "../../utils/quizFilters.ts";

interface RouterState {
    finalAnswers: QuizAnswers;
}

const Results = () => {

    const [errorMessage, setErrorMessage] = useState<string>("");
    // verify that useLocation matches RouterState interface
    const location = useLocation();
    const state = location.state as RouterState;
    const { finalAnswers } = state; // user's answers from quiz

    // run during component render
    const resultsIds = useMemo(() => {
        return getFilteredVehicleIds(carData, finalAnswers);
    }, [finalAnswers]);

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
            {resultsIds.map((id) => {
                const matchingCar = carData[id]; 
                return <VehicleCard key={id} car={matchingCar} />
            })}
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
