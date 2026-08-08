import "./vehicles.css";
import type { CarOption } from "./carData.ts";
import { VEHICLE_IMAGES } from "./carData.ts";
import { getVehicleShapeLabel } from "./utils.ts";

export interface VehicleCardProps {
    car: CarOption;
}

const VehicleCard = ({ car }: VehicleCardProps) => {

    const vehicleModel = `${car.modelYear} ${car.manufacturer} ${car.modelName}`;
    const powertrains = car.powertrain.join(", "); // join() keeps powertrain options in single line
    const tags = car.tags.join(", ");
    const shapeLabel = getVehicleShapeLabel(car.vehicleShape);

    return (
        <div className="card-container">
            <img src={VEHICLE_IMAGES[car.vehicleShape]} alt={shapeLabel} />
            <div className="details-container">
                <h1>{vehicleModel}</h1>
                <p>Vehicle Type: <strong>{car.vehicleShape}</strong></p>
                <p>Max passengers: <strong>{car.maxPassengers}</strong></p>
                <p>Available powertrains: <strong>{powertrains}</strong></p>
                <p>Recommended activities: <strong>{tags}</strong></p>
            </div>
        </div>
    )
};

export default VehicleCard;
