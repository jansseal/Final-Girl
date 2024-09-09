**NOTE: This game is not complete - only rough gameplay through first chapter storyline is available.**

Final Girl

Description

Final Girl is a React-based interactive fiction game where players can create an account, play through interactive chapters, and engage in gameplay elements.

Features
Home Page (/): Introduces the game and provides navigation to other sections.
Create Account (/create-account): Allows users to create a new account securely. Account information is stored in a MySQL database.
Play (/play): Takes players to the interactive Chapter 1, where they can experience gameplay and make choices that affect the storyline.

Installation

1. Clone the repository: git clone https://github.com/your-username/your-repository.git
2. Navigate to the client folder and install dependencies: cd client | npm install
3. Navigate to the server folder and install dependencies: cd server | npm install

Database Setup

1. Ensure you have MySQL installed and running on your machine.
2. Log in to MySQL as root or another privileged user: mysql -u root -p
3. Create a new database for the project: CREATE DATABASE finalgirl_db;
4. Switch to the new database: USE finalgirl_db;
5. Create a table to store user account information:

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

Usage

1. Start the frontend development server: cd client | npm start
2. Start the backend development server: cd server | node server.js
3. Open your web browser and navigate to http://localhost:3000 to access the home page. From there, you can create a new account.
4. To simulate playing the game, navigate to http://localhost:3000/play.

Technologies Used

1. React
2. Node.js
3. Express
4. MySQL
