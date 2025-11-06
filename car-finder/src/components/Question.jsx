let questionSet = 
[
    {
        id: 0,
        category: "Primary questions", 
        question: "What will you use your vehicle for?",
        answers: [
            {
                category: "Daily driver",
                mainAnswer: "Tackling daily life",
                subAnswers: [
                    "Family hauling",
                    "Commuting to work / school",
                    "Running errands"
                ]
            },
            {
                category: "Daily driver",
                mainAnswer: "Getting work done",
                subAnswers: [
                    "Towing and hauling",
                    "Transporting products / equipment",
                    "Ride sharing"
                ]
            },
            {
                category: "Enthusiast",
                mainAnswer: "Off-road adventures",
                subAnswers: [
                    "Ripping through desert sands",
                    "Wheeling over rocky trails",
                    "Traversing trailheads"
                ]
            },
            {
                category: "Enthusiast", 
                mainAnswer: "Pure driving enjoyment",
                subAnswers: [
                    "Time attack at the track",
                    "Weekend thrill rides",
                    "Straight-line performance"
                ]
            }
        ]
    },
    {
        id: 1,
        category: ""
    }
];

// TODO: figure out how deep to make the nested loops
// I'd like follow-up questions for the enthusiast categories 
// ie you said car, do you mean coupe or four-door? 
// full time 4WD, part-time 4WD, or AWD? 

let secondaryQuestions = [
    {
        id: 0,
        question: "How many people will be riding with you?",
        answers: [
            "1", "2 to 4", "5 or more" 
        ]
    },
    {
        id: 1,
        question: "What type of vehicle are you looking for?",
        answers: [
            "Coupe", "4-door Car", "SUV", "Truck", "Van"
        ]
    }
]
    

const Question = () => {
    return (
        <>
            
        </>
    );
};

export default Question;
