import { carData, CarOption, VehicleShapeType } from "../components/render-vehicles/carData";

export type QuizAnswers = [
  string, // index 0: placeholder, not used in filter
  string, // index 1: preferred tag
  string, // index 2: passenger count range string
  string, // index 3: preferred vehicle shape
  string // index 4: preferred powertrain 
];

export const parsePassengers = (answerString: string): number => {
  if (answerString === "0 to 1") return 2;
  if (answerString === "2 to 4") return 5;
  if (answerString === "5 or more") return 6;
  return 0; // default case
};

export const getFilteredVehicleIds = (carData: CarOption[], finalAnswers: QuizAnswers): number[] => {
   
  const targetTag = finalAnswers[1];
  const targetPassengers = parsePassengers(finalAnswers[2]); // convert answer from string to number
  const targetShape = finalAnswers[3].toLowerCase();
  const targetPowertrain = finalAnswers[4];

  return carData
    .filter(car => car.tags.includes(targetTag))
    .filter(car => car.maxPassengers >= targetPassengers)
    .filter(car => car.vehicleShape.toLowerCase().includes(targetShape))
    .filter(car => car.powertrain.includes(targetPowertrain))
    .map(car => car.id);
};