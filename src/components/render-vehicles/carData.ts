interface CarOption {
    id: number;
    modelYear: number;
    manufacturer: string;
    modelName: string;
    maxPassengers: number;
    vehicleShape: VehicleShapeType;
    powertrain: string[];
    tags: string[];
}

// map image paths to vehicle shape types 
export type VehicleShapeType = "suv2Row" | "suv3Row" | "car4Door" | "carCoupe" | "carWagon" | "vanWorkTruck" | "vanMinivan" | "truckPickupFull" | "truckPickupMid";
export const VEHICLE_IMAGES: Record<VehicleShapeType, string> = {
    suv2Row: "/unit1-final-project-carFinder/images/vehicles/suv-2row.jpg",
    suv3Row: "/unit1-final-project-carFinder/images/vehicles/suv-3row.jpg",
    car4Door: "/unit1-final-project-carFinder/images/vehicles/car-4door.jpg",
    carCoupe: "/unit1-final-project-carFinder/images/vehicles/car-coupe.jpg",
    carWagon: "/unit1-final-project-carFinder/images/vehicles/car-wagon.jpg",
    vanWorkTruck: "/unit1-final-project-carFinder/images/vehicles/van-worktruck.jpg",
    vanMinivan: "/unit1-final-project-carFinder/images/vehicles/van-minivan.jpg",
    truckPickupFull: "/unit1-final-project-carFinder/images/vehicles/truck-pickup-fullsize.jpg",
    truckPickupMid: "/unit1-final-project-carFinder/images/vehicles/truck-pickup-midsize.jpg",
};


export const carData: CarOption[] = [

    {
        id: 0,
        modelYear: 2025,
        manufacturer: "Honda",
        modelName: "CR-V",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain:  ["ICE", "HEV"],
        tags: ["Family hauling", "Commuting to work / school", "Running errands", "Traversing trailheads"]
    },
    {
        id: 1,
        modelYear: 2025,
        manufacturer: "Ford",
        modelName: "Bronco Sport",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain:  ["ICE"],
        tags: ["Commuting to work / school", "Running errands", "Traversing trailheads"]
    },
    {
        id: 2,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "RAV4",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain:  ["ICE", "HEV", "PHEV"],
        tags: ["Family hauling", "Commuting to work / school", "Running errands", "Ride sharing", "Traversing trailheads"]
    },
    {
        id: 3,
        modelYear: 2025,
        manufacturer: "Kia",
        modelName: "Telluride",
        maxPassengers: 8,
        vehicleShape: "suv3Row",
        powertrain:  ["ICE"],
        tags: ["Family hauling", "Running errands", "Ride sharing"]
    },
    {
        id: 4,
        modelYear: 2025,
        manufacturer: "Ford",
        modelName: "Bronco",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain:  ["ICE"],
        tags: ["Ripping through desert dunes", "Wheeling over boulder fields", "Traversing trailheads"]
    },
    {
        id: 5,
        modelYear: 2026,
        manufacturer: "Hyundai",
        modelName: "Palisade",
        maxPassengers: 8,
        vehicleShape: "suv3Row",
        powertrain: ["ICE", "HEV"],
        tags: ["Family hauling", "Running errands", "Ride sharing"]
    },
    {
        id: 6,
        modelYear: 2025,
        manufacturer: "Jeep",
        modelName: "Grand Cherokee L",
        maxPassengers: 7,
        vehicleShape: "suv3Row",
        powertrain: ["ICE", "PHEV"],
        tags: ["Family hauling", "Running errands", "Ride sharing", "Traversing trailheads"]
    },
    {
        id: 7,
        modelYear: 2025,
        manufacturer: "Jeep",
        modelName: "Wrangler",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain: ["ICE", "PHEV"],
        tags: ["Ripping through desert dunes", "Wheeling over boulder fields", "Traversing trailheads"]
    },
    {
        id: 8,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "4Runner",
        maxPassengers: 7,
        vehicleShape: "suv3Row",
        powertrain: ["ICE", "HEV"],
        tags: ["Family hauling", "Running errands", "Wheeling over boulder fields", "Traversing trailheads"]
    },
    {
        id: 9,
        modelYear: 2025,
        manufacturer: "Subaru",
        modelName: "Forester",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain: ["ICE", "HEV"],
        tags: ["Commuting to work / school", "Running errands", "Ride sharing", "Traversing trailheads"]
    },
    {
        id: 10,
        modelYear: 2025,
        manufacturer: "Chevrolet",
        modelName: "Suburban",
        maxPassengers: 8,
        vehicleShape: "suv3Row",
        powertrain: ["ICE"],
        tags: ["Family hauling", "Towing and hauling", "Transporting goods or equipment", "Ride sharing"]
    },
    {
        id: 11,
        modelYear: 2025,
        manufacturer: "Jeep",
        modelName: "Grand Wagoneer",
        maxPassengers: 7,
        vehicleShape: "suv3Row",
        powertrain: ["ICE"],
        tags: ["Family hauling", "Towing and hauling", "Ride sharing", "Traversing trailheads"]
    },
    {
        id: 12,
        modelYear: 2025,
        manufacturer: "Ford",
        modelName: "Expedition",
        maxPassengers: 8,
        vehicleShape: "suv3Row",
        powertrain: ["ICE"],
        tags: ["Family hauling", "Towing and hauling", "Transporting goods or equipment", "Ride sharing", "Traversing trailheads"]
    },
    {
        id: 13,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "Sequoia",
        maxPassengers: 7,
        vehicleShape: "suv3Row",
        powertrain: ["HEV"],
        tags: ["Family hauling", "Towing and hauling", "Transporting goods or equipment", "Ride sharing", "Traversing trailheads"]
    },
    {
        id: 14,
        modelYear: 2025,
        manufacturer: "Chevrolet",
        modelName: "Trax",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain: ["ICE"],
        tags: ["Commuting to work / school", "Running errands"]
    },
    {
        id: 15,
        modelYear: 2025,
        manufacturer: "Hyundai",
        modelName: "Ioniq 5",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain: ["BEV"],
        tags: ["Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 16,
        modelYear: 2025,
        manufacturer: "Ford",
        modelName: "Mustang Mach-E",
        maxPassengers: 5,
        vehicleShape: "suv2Row",
        powertrain: ["BEV"],
        tags: ["Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 17,
        modelYear: 2026,
        manufacturer: "Rivian",
        modelName: "R1S",
        maxPassengers: 7,
        vehicleShape: "suv3Row",
        powertrain: ["BEV"],
        tags: ["Family hauling", "Commuting to work / school", "Running errands", "Traversing trailheads", "Ripping through desert dunes", "Straight-line performance"]
    },
    {
        id: 18,
        modelYear: 2025,
        manufacturer: "Kia",
        modelName: "EV9",
        maxPassengers: 6,
        vehicleShape: "suv3Row",
        powertrain: ["BEV"],
        tags: ["Family hauling", "Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 19,
        modelYear: 2025,
        manufacturer: "Nissan",
        modelName: "Versa",
        maxPassengers: 5,
        vehicleShape: "car4Door",
        powertrain: ["ICE"],
        tags: ["Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 20,
        modelYear: 2025,
        manufacturer: "Honda",
        modelName: "Civic",
        maxPassengers: 5,
        vehicleShape: "car4Door",
        powertrain: ["ICE", "HEV"],
        tags: ["Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 21,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "Prius",
        maxPassengers: 5,
        vehicleShape: "car4Door",
        powertrain: ["HEV", "PHEV"], 
        
        tags: ["Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 22,
        modelYear: 2025,
        manufacturer: "Honda",
        modelName: "Accord",
        maxPassengers: 5,
        vehicleShape: "car4Door",
        powertrain: ["ICE", "HEV"],
        tags: ["Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 23,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "Camry",
        maxPassengers: 5,
        vehicleShape: "car4Door",
        powertrain: ["HEV"], 
        
        tags: ["Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 24,
        modelYear: 2025,
        manufacturer: "Kia",
        modelName: "K5",
        maxPassengers: 5,
        vehicleShape: "car4Door",
        powertrain: ["ICE", "HEV"],
        tags: ["Commuting to work / school", "Running errands", "Ride sharing"]
    },
    {
        id: 25,
        modelYear: 2025,
        manufacturer: "Aston Martin",
        modelName: "Vantage",
        maxPassengers: 2,  
        vehicleShape: "carCoupe", 
        powertrain: ["ICE"],
        tags: ["Time attack at the track", "Weekend thrill rides", "Straight-line performance"]
    },
    {
        id: 26,
        modelYear: 2025,
        manufacturer: "BMW",
        modelName: "2-Series",
        maxPassengers: 4,
        vehicleShape: "carCoupe",
        powertrain: ["ICE"],
        tags: ["Weekend thrill rides", "Running errands", "Commuting to work / school"]
    },
    {
        id: 27,
        modelYear: 2025,
        manufacturer: "BMW",
        modelName: "M4",
        maxPassengers: 4,
        vehicleShape: "carCoupe",
        powertrain: ["ICE"],
        tags: ["Time attack at the track", "Weekend thrill rides", "Straight-line performance"]
    },
    {
        id: 28,
        modelYear: 2025,
        manufacturer: "Chevrolet",
        modelName: "Corvette",
        maxPassengers: 2,
        vehicleShape: "carCoupe",
        powertrain: ["ICE"],
        tags: ["Time attack at the track", "Weekend thrill rides", "Straight-line performance"]
    },
    {
        id: 29,
        modelYear: 2025,
        manufacturer: "Mercedes-Benz",
        modelName: "AMG CLE53", 
        maxPassengers: 4,
        vehicleShape: "carCoupe",
        powertrain: ["ICE"], // mild hybrid
        
        tags: ["Weekend thrill rides", "Straight-line performance"]
    },
    {
        id: 30,
        modelYear: 2025,
        manufacturer: "Porsche",
        modelName: "911",
        maxPassengers: 4,
        vehicleShape: "carCoupe",
        powertrain: ["ICE", "HEV"],
        tags: ["Time attack at the track", "Weekend thrill rides", "Straight-line performance"]
    },
    {
        id: 31,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "GR 86",
        maxPassengers: 4,
        vehicleShape: "carCoupe", 
        powertrain: ["ICE"],
        tags: ["Weekend thrill rides", "Running errands"]
    },
    {
        id: 32,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "GR Supra",
        maxPassengers: 4,
        vehicleShape: "carCoupe", 
        powertrain: ["ICE"],
        tags: ["Weekend thrill rides", "Straight-line performance"]
    },
    {
        id: 33,
        modelYear: 2025,
        manufacturer: "Mercedes-Benz",
        modelName: "E-Class All-Terrain",
        maxPassengers: 5,
        vehicleShape: "carWagon",
        powertrain: ["ICE"], // mild hybrid
        tags: ["Family hauling", "Commuting to work / school", "Running errands", "Traversing trailheads"]
    },
    {
        id: 34,
        modelYear: 2025,
        manufacturer: "Audi",
        modelName: "A6 Allroad",
        maxPassengers: 5,
        vehicleShape: "carWagon",  
        powertrain: ["ICE"],
        tags: ["Family hauling", "Commuting to work / school", "Running errands", "Traversing trailheads"]
    },
    {
        id: 35,
        modelYear: 2025,
        manufacturer: "Subaru",
        modelName: "Outback",
        maxPassengers: 5,
        vehicleShape: "carWagon",  
        powertrain: ["ICE"],
        tags: ["Family hauling", "Commuting to work / school", "Running errands", "Traversing trailheads"]
    },
    {
        id: 36,
        modelYear: 2025,
        manufacturer: "Volvo",
        modelName: "V60 Cross Country",
        maxPassengers: 5,
        vehicleShape: "carWagon",  
        powertrain: ["ICE"], // mild hybrid
        tags: ["Family hauling", "Commuting to work / school", "Running errands", "Traversing trailheads"]
    },
    {
        id: 37,
        modelYear: 2025,
        manufacturer: "Audi",
        modelName: "RS6 Avant",
        maxPassengers: 5,
        vehicleShape: "carWagon",  
        powertrain: ["ICE"], // mild hybrid
        tags: ["Family hauling", "Time attack at the track", "Weekend thrill rides", "Straight-line performance"]
    },
    {
        id: 38,
        modelYear: 2025,
        manufacturer: "Ford",
        modelName: "Transit",
        maxPassengers: 15,
        vehicleShape: "vanWorkTruck",
        powertrain: ["ICE"],
        tags: ["Towing and hauling", "Transporting goods or equipment"]
    },
    {
        id: 39,
        modelYear: 2025,
        manufacturer: "Chevrolet",
        modelName: "Express",
        maxPassengers: 15,
        vehicleShape: "vanWorkTruck",
        powertrain: ["ICE"],
        tags: ["Towing and hauling", "Transporting goods or equipment"]
    },
    {
        id: 40,
        modelYear: 2025,
        manufacturer: "Ford",
        modelName: "e-Transit",
        maxPassengers: 2,
        vehicleShape: "vanWorkTruck",
        powertrain: ["BEV"],
        tags: ["Transporting goods or equipment"]
    },
    {
        id: 41,
        modelYear: 2025,
        manufacturer: "Mercedes-Benz",
        modelName: "eSprinter",
        maxPassengers: 3,
        vehicleShape: "vanWorkTruck",
        powertrain: ["BEV"],
        tags: ["Transporting goods or equipment"]
    },
    {
        id: 42,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "Sienna",
        maxPassengers: 8,
        vehicleShape: "vanMinivan",
        powertrain: ["HEV"],
        tags: ["Family hauling", "Running errands", "Ride sharing"]
    },
    {
        id: 43,
        modelYear: 2025,
        manufacturer: "Chrysler",
        modelName: "Pacifica",
        maxPassengers: 7, 
        vehicleShape: "vanMinivan",
        powertrain: ["ICE","PHEV"],
        tags: ["Family hauling", "Running errands", "Ride sharing"]
    },
    {
        id: 44,
        modelYear: 2025,
        manufacturer: "Kia",
        modelName: "Carnival",
        maxPassengers: 8, 
        vehicleShape: "vanMinivan",
        powertrain: ["ICE", "HEV"], 
        
        tags: ["Family hauling", "Running errands", "Ride sharing"]
    },
    {
        id: 45,
        modelYear: 2025,
        manufacturer: "Ford",
        modelName: "F-150 Raptor",
        maxPassengers: 5,
        vehicleShape: "truckPickupFull",
        powertrain: ["ICE"],
        tags: ["Towing and hauling", "Transporting goods or equipment", "Ripping through desert dunes", "Wheeling over boulder fields", "Traversing trailheads", "Straight-line performance"]
    },
    {
        id: 46,
        modelYear: 2025,
        manufacturer: "Chevrolet",
        modelName: "Silverado",
        maxPassengers: 6,
        vehicleShape: "truckPickupFull",
        powertrain: ["ICE"],
        tags: ["Towing and hauling", "Transporting goods or equipment", "Wheeling over boulder fields", "Traversing trailheads"]
    },
    {
        id: 47,
        modelYear: 2025,
        manufacturer: "Ford",
        modelName: "Maverick",
        maxPassengers: 5, 
        vehicleShape: "truckPickupMid",
        powertrain: ["ICE", "HEV"], 
        
        tags: ["Commuting to work / school", "Running errands", "Towing and hauling", "Transporting goods or equipment", "Traversing trailheads"]
    },
    {
        id: 48,
        modelYear: 2025,
        manufacturer: "Nissan",
        modelName: "Frontier",
        maxPassengers: 5, 
        vehicleShape: "truckPickupMid",
        powertrain: ["ICE"],
        tags: ["Towing and hauling", "Transporting goods or equipment", "Traversing trailheads"]
    },
    {
        id: 49,
        modelYear: 2025,
        manufacturer: "Toyota",
        modelName: "Tacoma",
        maxPassengers: 5, 
        vehicleShape: "truckPickupMid",
        powertrain: ["ICE","HEV"],
        tags: ["Towing and hauling", "Transporting goods or equipment", "Ripping through desert dunes", "Wheeling over boulder fields", "Traversing trailheads"]
    },
    {
        id: 50,
        modelYear: 2025,
        manufacturer: "Rivian", 
        modelName: "R1T", 
        maxPassengers: 5,
        vehicleShape: "truckPickupMid",
        powertrain: ["BEV"],
        tags: ["Transporting goods or equipment", "Wheeling over boulder fields", "Traversing trailheads", "Straight-line performance"]
    }
];