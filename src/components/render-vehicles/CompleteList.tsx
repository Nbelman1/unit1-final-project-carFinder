import VehicleCard from "./VehicleCard.tsx";
import { Link } from "react-router";
import { carData as globalCarData } from "./carData.ts";

const CompleteList = () => {

    const renderCompleteList = () => {
        return globalCarData.map((car) => 
            <VehicleCard key={car.id} car={car} />
        );
    };

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
