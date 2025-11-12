const VehicleCard = ({ carData }) => {

    // TODO: add function to identify vehicle you're looking for
    const vehicleModel = carData[0]["modelYear"] + " " + carData[0]["manufacturer"] + " " + carData[0]["modelName"];
    const vehicleType = carData[0]["vehicleShape"];
    // TODO: render different available powertrain options
    // TODO: render different tags
    return (
        <div>
            <div><h3>{vehicleModel}</h3></div>
            <p>{vehicleType}</p>
        </div>
    );
};

export default VehicleCard;
