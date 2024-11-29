# Dish Diaries
**Dish Diaries** is a recipe-sharing web application built as the final assignment for my Angular course at SoftUni. It enables users to share their favorite recipes, rate recipes shared by others, and even get surprise recipe recommendations.

The project combines a front-end built with Angular and a back-end powered by Node.js and Express, utilizing MongoDB for data storage.

## Features
* Create and share recipes.
* Browse and rate recipes from other users.
* Generate random recipes for inspiration.
* User-friendly design for seamless interactions.

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

