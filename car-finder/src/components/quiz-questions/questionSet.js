export const mainQuestions = 
[
    {
        // first question
        id: 0,
        question: "What will you use your vehicle for?",
        answer: [
            {
                answerText: "Tackling daily life",
                modalContent: "Practicality and comfort are your top priorities. You want your next vehicle to help make life a little bit easier"
            },
            {
                answerText: "Getting work done",
                modalContent: "Whether your role involves moving people, equipment, or oversized loads, your rig's gotta have the goods to get it done"
            },
            {
                answerText: "Off-road adventures",
                modalContent: "When you hear the call of the wild, you'll have a four-wheel drive machine to answer it"
            },
            {
                answerText: "Pure driving enjoyment",
                modalContent: "BMW resisted putting cupholders in cars, because driving is an experience - you should focus on the road, not your beverages. You are someone who doesn't need cupholders (but these cars will have them nonetheless)"
            }
        ]
    },
    {
        // second question
        id: 1,
        question: "How many people will be riding with you?",
        answer: [
            {
                answerText: "0 to 1",
                modalContent: "Riding solo or maybe with a copilot. Congrats, front row is where the most comfortable seats are"
            },
            {
                answerText: "2 to 4",
                modalContent: "You need space for kids, parents, pets, or the occasional carpool opportunity"
            },
            {
                answerText: "5 or more",
                modalContent: "For when you need to shuttle the whole gang and their gear on at least a semi-regular basis. Or you just love driving big vehicles"
            }
        ]
    },
    {
        // third question
        id: 2,
        question: "What type of vehicle are you looking for?",
        answer: [
            {
                answerText: "4-door car",
                modalContent: "The original shape for building four-wheeled machines. Being lower to the ground with slippery aerodynamics provides better handling and efficiency. Due to their smaller size, cars usually offer greater feature content per dollar than other vehicle types. They can be had in multiple forms depending on the number of rows and trunk space desired"
            },
            {
                answerText: "coupe",
                modalContent: "Two-door or no door. Less practical than a 4-door car, but quicker and more agile (not to mention easier to park)"
            },
            {
                answerText: "wagon",
                modalContent: "Longroofs are extremely practical, with spacious rear seats and trunks. Bonus benefit: they're very stable at speed because their ride height is similar to a car's"
            },
            {
                answerText: "SUV",
                modalContent: "Essentially lifted wagons, sport utility vehicles are sought after for their all-around flexibility. SUVs offer an increased ride height for greater ground clearance and visibility. Their folding rear seats enhance trunk capacity. They can be had as efficient urban runabouts or vessels to carry the whole clan and all their gear to boot"
            },
            {
                answerText: "truck",
                modalContent: "Evolved from their agricultural, workhorse roots, today's pickup trucks offer the unique versatility of an open (or capped) bed without sacrificing feature content. Their commonly used body-on-frame construction provides rigidity for towing and surviving off-road abuse. They can be configured with multiple cab and bed sizes"
            },
            {
                answerText: "van",
                modalContent: "Physically, a box is the most efficient shape to package things in. Smooth out the box and you have yourself a van. Minivans are popular with families for their unique sliding doors, which ensure easy acccess to passengers without having to worry about denting other metal in the parking lot. Vans built as work trucks feature body-on-frame construction, enabling large payload capacities along with mobile, secure storage for businesses and tradesmen"
            },
        ]
    },
    {
        // fourth question
        id: 3,
        question: "What drivetrain are you interested in?",
        answer: [
            {
                answerText: "ICE",
                modalContent: "Internal combustion engine. Just add gasoline or diesel fuel and hit the go pedal. There are many offerings on the market: inline 4, inline 6, V6, V8, V12, turbocharged, supercharged, and more. ICE works with an automatic or manual transmission to put the power down."
            },
            {
                answerText: "HEV",
                modalContent: "Hybrid electric vehicle; just add gas and go. A singular (or multiple) battery(ies) store power while the vehicle decelerates in a process called regenerative breaking. The vehicle can operate on battery power alone at low speeds, so the engine is continually powering on and off. This cycle produces cleaner emissions and greater efficiency than pure ICE vehicles."
            },
            {
                answerText: "PHEV",
                modalContent: "Plug-in hybrid vehicle. Take the concept of HEV but increase the size of the battery until it's big enough to accept power from a power outlet. The bigger battery can propel the vehicle exclusively by itself for a medium range, usually between 20 and 40 miles. When the battery is depleted, the ICE kicks in to burn gas for extra range."
            },
            {
                answerText: "BEV",
                modalContent: "Battery electric vehicle, aka EV. Runs exclusively on battery power, typically derived from a home power outlet or a public charger. This process can take between roughly 2 and 30 hours depending on the source of power. BEVs provide instant torque, so they can accelerate quickly, but lose range at highway speeds. Most modern BEVs can travel between 150 to 350 miles between juice-ups."
            }
        ]
    }
];

export const followUpQuestions = [

    {
        // follow up question for "tackling daily life" answerText in question id 0
        id: 4,
        question: "Which of these needs the most tackling?",
        answer: [
            {
                answerText: "Family hauling",
                modalContent: "You want to transport your friends and family, plus all your stuff, in convenience and comfort. No need for two cars this time"
            },
            {
                answerText: "Commuting to work / school",
                modalContent: "You prioritize efficiency and ease of use to relax you on the daily grind"
            },
            {
                answerText: "Running errands",
                modalContent: "Your next ride provides ease of ingress / egress with ample room for shopping hauls"
            }
        ]
    },
{
        // follow up question for "getting work done" answerText in question id 0
        id: 5,
        question: "What kind of work can a vehicular tool help you with?",
        answer: [
            {
                answerText: "Towing and hauling",
                modalContent: "Whether you're moving weekend toys, livestock, or lumber, it helps to have the capability to pull it with confidence"
            },
            {
                answerText: "Transporting goods or equipment",
                modalContent: "You need secure, lockable storage for your valuable items, and plenty of it"
            },
            {
                answerText: "Ride sharing",
                modalContent: "You're after efficiency, durability, and comfort. The more comfortable, the better (remember, it's for your passengers)"
            }
        ]
    },
    {
        // follow up question for "off-road adventures" answerText in question id 0
        id: 6,
        question: "How will you enjoy your time escaping the pavement?",
        answer: [
            {
                answerText: "Ripping through desert dunes",
                modalContent: "Sizeable bumpstops with ample damping for comfortable passage across loose, bumpy terrain. That equipment won't get you airborne, but it will help you stick the landing"
            },
            {
                answerText: "Wheeling over boulder fields",
                modalContent: "Articulation and lockers to keep wheels on the ground at all angles, except for upside down. Don't forget the oversized tires"
            },
            {
                answerText: "Traversing trailheads",
                modalContent: "An advanced all-wheel-drive system to get you to the trail and back, even if you're enjoying the trail on two feet or two wheels"
            }
        ]
    },
    {
        // follow up question for answerText "pure driving enjoyment" in question id 0
        id: 7,
        question: "What's your favorite flavor of driving on pavement?",
        answer: [
            {
                answerText: "Time attack at the track",
                modalContent: "You need a road-legal rocket ship, with ample acceleration, big brakes, engine cooling, and performance metric logging"
            },
            {
                answerText: "Weekend thrill rides",
                modalContent: "You prioritize handling and agility for windy stretches of asphalt, with a hint of speed"
            },
            {
                answerText: "Straight-line performance",
                modalContent: "Your whip must propel you forward at breakneck speeds. For use on the drag strip or street lights"
            }
        ]
    },
];