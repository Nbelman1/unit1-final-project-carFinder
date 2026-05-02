# CarFinder

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%23663399.svg?style=for-the-badge&logo=css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)



---
## See It Live
🚀 [Live Site](https://nbelman1.github.io/unit1-final-project-carFinder/)  


## Video Demo
[![Watch the Demo](https://i.postimg.cc/kghcWjk2/Screenshot-2026-05-01-191753.png)](https://www.loom.com/share/8d6526e7497b49c48715b8c79612d860)
*Click the image above to watch a 60-second demo.*

---

## About

CarFinder is a React app made with JavaScript, HTML, and CSS. It educates potential car buyers on features and capabilities to help guide their next purchase. By capturing shoppers' preferences through a quiz, its personalized recommendations present vehicles that fit their lifestyle.

### Why did you build this?
My mom's boyfriend has been searching for a vehicle based on certain specs and features for years, but had trouble narrowing it down to relevant options. Using my passion and knowledge about all things automotive, I decided to leverage our LaunchCode learnings on frontend development to build an app to help shoppers just like him.

### Design Intent
CarFinder was built as a way to challenge and demonstrate my abilities in React by tying together frontend curriculum on JavaScript, HTML, and CSS. We had limited time to build the app, so I emphasized component architecture and a streamlined user experience. I tried to make it as accessible as possible by appealing to users of all experience levels, from casual commuters to knowledgeable enthusiasts.

---

## Features

![CarFinder quiz interface](https://i.postimg.cc/Dzn2dgsM/carfinder-demo.png)

- **Quiz Logic** - Question components utilize React's `useState` hook to update state and render relevant answers
- **Interactive Modals** - Modals provide details on each answer to educate shoppers on benefits of new vehicle features 
- **Results Page** - JavaScript parses the user's responses to display personalized vehicle recommendations using reusable components

**Wireframes (Figma):** https://www.figma.com/design/MJtsE1vZLknJpKc4eBXy0G/CarFinder?node-id=0-1&t=n9G9guWMYwHyIE7Z-1

---

## 🛠️ Installation

### Dependencies
- Node.js 22.17.0 or newer

### Retrieving Files
- Fork and clone this repo to your local machine

### Frontend Setup
- Install dependencies with `npm install`
- `cd` into `unit1-final-project-carFinder`, run `npm run dev`, then enter `o`
- Your browser should open to `http://localhost:5173/` which renders CarFinder's home page

---

## Future Features

- **Vehicle Filter** - To give user more control over the results shown, I could implement drop-downs on the "View All Cars" page to parse data
- **Increased Data Granularity** - It would be helpful to users to include more granular data, such as breaking down vehicles into trim levels and pricing. This was out of scope for this project as it was research-heavy and would not have demonstrated increased programming ability 
- **User Accounts** - Adding a backend would add persistence to the app by letting users save quiz results and favorite vehicles through multiple sessions

---

## Asset Credits

**Images**
- All images were sourced from royalty-free site https://pixabay.com/ 
- Due to 50+ vehicles in my mock dataset and difficulty of sourcing non-commercial vehicle images, I recycled default images for similar vehicle types

---

## License

MIT License — see LICENSE file for details.