# Bot Battlr
Welcome to Bot Battlr, the one and only spot in the known universe where you can custom-build your own Bot Army! This web application allows you to browse a list of bots, view their details, enlist bots into your army, and manage your bot army with ease.

## Table of Contents
Project Overview
Features
Getting Started
Prerequisites
Installation
Running the App
Usage
Bot Collection
Your Bot Army
Advanced Features
Project Structure
Technologies Used
Contributing
License
Acknowledgements
## Project Overview
Bot Battlr is a React-based web application that allows users to interact with a collection of bots, manage their personal bot army, and explore various features to enhance their experience. This project was built to practice working with components, props, state, events, and data fetching in React.

## Features
Bot Collection: View a list of available bots, each with their own unique details, such as health, damage, armor, and more.
Bot Army Management: Add bots to your personal army, release them, or discharge them permanently.
Dynamic Interaction: Manage your army with easy-to-use buttons and visual feedback.
Data Persistence: All actions performed on the bots are reflected both in the UI and on the server.
## Getting Started
Prerequisites
To get started, you'll need the following installed on your machine:

Node.js (version 14.x or higher)
npm (Node Package Manager)
Git
Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/Yussuf-ibra/Phase-2-Code-Challenge-Bot-Battlr-
cd bot-battlr
Install Dependencies:

bash
Copy code
npm install
Set Up the JSON Server:
Create a db.json file in the root of your project and populate it with the provided bot data.

Start the JSON Server:

bash
Copy code
json-server --watch db.json --port 8001
## Running the App
Start the React application:

bash
Copy code
npm start
Visit http://localhost:3000 in your browser to see the app in action.

## Usage
Bot Collection
The main page displays a list of all available bots.
Each bot's details are displayed, including an avatar, name, class, health, damage, armor, and catchphrase.
Click on a bot to enlist it into your army.
## Your Bot Army
Your selected bots will appear in the "Your Bot Army" section.
Click on a bot in your army to release it back to the collection.
Click the red "x" button to discharge a bot permanently from your army and the server.
## Advanced Features
Sort Bots: Sort bots by health, damage, or armor to better strategize your army composition.
Filter Bots by Class: Filter bots based on their class (Support, Medic, Assault, etc.) to focus on specific types.
Bot Details View: View more detailed information about each bot in a separate view.
## Project Structure
java
Copy code
bot-battlr/
├── public/
├── src/
│   ├── components/
│   │   ├── BotCard.js
│   │   ├── BotCollection.js
│   │   ├── YourBotArmy.js
│   │   └── BotSpecs.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── db.json
└── package.json
# Technologies Used
React: JavaScript library for building user interfaces.
JSON Server: Simple backend for RESTful API mocking.
CSS: Styling for the application.

# deploymeny link
https://phase-2-code-challenge-bot-battlr-xhlj.vercel.app/

## License
This project is licensed under the MIT License - see the LICENSE file for details.
