# Dish Diaries
**Disclaimer:** Please note that when visiting [this URL](https://tsvetelinda.github.io/dish-diaries-app/home), it may take up to a minute for all resources to fully load.

**Dish Diaries** is a recipe-sharing web application built as the final assignment for my Angular course at SoftUni. It enables users to share their favorite recipes, rate recipes shared by others, and even get surprise recipe recommendations.

The project combines a front-end built with Angular and a back-end powered by Node.js and Express, utilizing MongoDB for data storage.

## Features
### Static
* **Home Page** – Welcome page with general site information and navigation.
* **Login Page** – Secure user login for personalized access.
* **Register Page** – User registration for new account creation.
* **Create Dish Page** – Submit new recipes, including detailed dish information.
* **Error Page** – A page displayed for any navigation or loading issues.
### Dynamic
* **Catalog Page** – Dynamically renders a list of dishes pulled from the database for browsing.
* **Details Page** – Displays detailed cooking information and user interaction (like/dislike) for the selected dish.
* **Tried It! Page** – Displays dishes the user has tried, divided into two sections: liked and disliked.
* **Surprise Dish Page** – Presents a random dish each time the page is accessed for inspiration.
* **My Profile** – Shows user’s data along with all dishes they have created.
* **Edit Dish Details Page** – Allows users to edit the details of a dish they have created, pre-populated with existing data.
* **Edit Profile Page** – Lets users update their profile details with pre-filled data.
* **Search** – Allows users to search for dishes by three criteria: dietary preferences, cooking skill level, and a third custom criterion.

## Prerequisites
* Installed Node.js
* Installed Angular CLI

## Installation and Setup
**1. Download the Project**
* Download and unzip the folder.

**2. Set Up the Back-End**
* Navigate to the `/backend` folder.
* Open a terminal (cmd) in this folder and run: `npm install`
* Once the installation completes, start the server with: `npm start`
* You’ll know the server is running when you see the following output:
```
Server running on port 5000
MongoDB Connected: localhost
```
**Important: Keep this terminal window open to keep the server running.**

**3. Set Up the Front-End**
* Navigate to the `/dish-diaries-app` folder.
* Open a terminal in this folder and run: `npm install`
* Once the installation completes, start the Angular development server with: `ng serve`
* You’ll know the front-end is running when you see:
```
-> Local: http://localhost:4200
```

**4. Open the App**
* Open your browser and go to: `http://localhost:4200`
* Enjoy using the Dish Diaries app!

## Disclaimer
The `.env` file is not ignored by `.gitignore` intentionally to simplify the setup process for this project. This is done for ease of testing and demonstration purposes.

