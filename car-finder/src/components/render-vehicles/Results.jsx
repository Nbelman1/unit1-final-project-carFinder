import { carData } from "./carData.js";
import VehicleCard from "./VehicleCard.jsx";

const Results = ({ userAnswers }) => {
    
    // convert number of passengers from string to a number that we can process
    const parsePassengers = () => {
        if (userAnswers[2] === "1") {
            userAnswers.splice(2, 1, 2); // replace string "1" with maxPassengers of 2
            // driver plus 1 passenger can fit in 1- or more- row vehicles
        } else if (userAnswers[2] === "2 to 4") {
            userAnswers.splice(2, 1, 5); // replace string "2 to 4" with 5
            // 5 total passengers can fit in most 2- or 3-row vehicles 
        } else if (userAnswers[2] === "5 or more") {
            userAnswers.splice(2, 1, 6); // replace string "5 or more" with 6
            // 6 or more total passengers can fit in most 3-row vehicles
        }
        return userAnswers;
    }

    parsePassengers();

    const filterResults = () => {
        const resultsI1 = carData.filter(car => car.tags.includes(userAnswers[1])); // filters results to match user's answers
        const resultsI2 = resultsI1.filter(car => car.maxPassengers >= userAnswers[2]); // filter results further
        const resultsI3 = resultsI2.filter(car => car.vehicleShape.includes(userAnswers[3])); 
        const resultsI4 = resultsI3.filter(car => car.powertrain.includes(userAnswers[4]));
        return resultsI4.map((car) => car.id);
    }

    const resultsIds = filterResults();

    return (
        <>
            {resultsIds.map((id) => <VehicleCard key={id} id={id} />)}
        </>
    );
};

export default Results;
