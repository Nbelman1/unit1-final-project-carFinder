// generic stock photos for each vehicle type
import suv2row from "../../assets/images/vehicles/suv-2row.jpg";
import suv3row from "../../assets/images/vehicles/suv-3row.jpg";
import car4Door from "../../assets/images/vehicles/car-4door.jpg";
import carCoupe from "../../assets/images/vehicles/car-coupe.jpg";
import carWagon from "../../assets/images/vehicles/car-wagon.jpg";
import truckFullSize from "../../assets/images/vehicles/truck-pickup-fullsize.jpg";
import truckMidSize from "../../assets/images/vehicles/truck-pickup-midsize.jpg";
import vanMinivan from "../../assets/images/vehicles/van-minivan.jpg";
import vanWorkTruck from "../../assets/images/vehicles/van-worktruck.jpg";

const VehicleCard = ({ carData }) => {

    // TODO: add function to identify vehicle you're looking for based on id or features
    const vehicleModel = carData[0]["modelYear"] + " " + carData[0]["manufacturer"] + " " + carData[0]["modelName"];
    const maxPassengers = carData[0]["maxPassengers"];
    const vehicleType = carData[0]["vehicleShape"];
    const powertrains = carData[0].powertrain.join(", "); // join() keeps powertrain options in single line 
    const tags = carData[0].tags.join(", ");

    return (
        <div>
            <img src={suv2row} alt="2-row SUV" />
            <div><h3>{vehicleModel}</h3></div>
            <p>Vehicle Type: <strong>{vehicleType}</strong></p>
            <p>Max passengers: <strong>{maxPassengers}</strong></p>
            <p>Available Powertrains: <strong>{powertrains}</strong></p>
            <p>Best uses cases: <strong>{tags}</strong></p>
        </div>
    );
};

export default VehicleCard;
