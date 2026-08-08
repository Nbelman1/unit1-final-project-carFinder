import type { VehicleShapeType } from "../components/render-vehicles/carData";

export const getVehicleShapeLabel = (shape: VehicleShapeType): string => {
  switch (shape) {
    case 'suv2Row': 
      return '2-Row SUV';
    case 'suv3Row':
      return '3-Row SUV';
    case 'car4Door':
      return '4-Door Sedan';
    case 'carCoupe':
      return 'Coupe';
    case 'carWagon':
      return 'Wagon';
    case 'vanWorkTruck':
      return 'Work Van';
    case 'vanMinivan':
      return 'Minivan';
    case 'truckPickupFull':
      return 'Full-Size Pickup Truck';
    case 'truckPickupMid':
      return 'Mid-Size Pickup Truck';
    default:
      return shape;
  }
}