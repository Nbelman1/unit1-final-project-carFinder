import "./vehicles.css";
import { carData } from "./carData.js";

const VehicleCard = ({ id }) => {

    const car = carData[id];
    const vehicleModel = `${car.modelYear} ${car.manufacturer} ${car.modelName}`;
    const powertrains = car.powertrain.join(", "); // join() keeps powertrain options in single line 
    const tags = car.tags.join(", ");

    return (

        <div className="card-container">
            <img src={car.imageSource} alt="{car.vehicleShape}" />
            <div className="details-container">
                <h1>{vehicleModel}</h1>
                <p>Vehicle Type: <strong>{car.vehicleShape}</strong></p>
                <p>Max passengers: <strong>{car.maxPassengers}</strong></p>
                <p>Available Powertrains: <strong>{powertrains}</strong></p>
                <p>Recommended uses cases: <strong>{tags}</strong></p>
            </div>
        </div>

    );
};

export default VehicleCard;
