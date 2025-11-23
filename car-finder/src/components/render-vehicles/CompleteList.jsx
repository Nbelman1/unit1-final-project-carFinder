import VehicleCard from "./VehicleCard";
import { Link } from "react-router";

const CompleteList = ({ carData }) => {


    const renderCompleteList = () => {
        return carData.map((car) => <VehicleCard key={car.id} id={car.id} />);
    } 

    return (
        <div>
            <div>{renderCompleteList()}</div>
            <div className="button-centered">
                <Link to="/" className="button-standard yellow">Go Home</Link>
            </div>
        </div>
    );
};

export default CompleteList;
