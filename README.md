# TIM---Weather-APP

This is a simple weather application that provides real-time weather updates for different cities around the world. The app uses data from the Open Meteo API to fetch weather information and display it for selected cities. The application is designed with HTML, CSS, and JavaScript.

Features
- Real-time weather updates: Displays current temperature, wind speed, and weather conditions for cities like Bucharest, London, New York, and Tokyo.
- Weather forecast: Allows users to see the weather in different locations globally.
- Responsive design: The app is mobile-friendly and adapts to different screen sizes.
- Interactive UI: The app uses simple navigation and displays weather details in visually appealing cards.

Technologies Used:
- HTML: Structure of the webpage.
- CSS: Styling for the page (responsive and modern design).
- JavaScript: Handles the logic for fetching weather data from an API and dynamically updates the page.
- Open-Meteo API: Provides real-time weather information.

Key Pages:
- index.html: The home page introduces the app and includes a slider showcasing weather images.
- weather.html: This page fetches and displays real-time weather data for four cities: Bucharest, London, New York, and Tokyo.
- contact.html: Contains a form for users to get in touch with the app developers.

How It Works:

- Fetching Weather Data:
When the page is loaded, the weather.js script fetches weather data for the cities defined in the cities array.
The script uses the Open Meteo API and sends a request with the latitude and longitude of the cities to get the current weather.
The app displays the data, such as temperature, wind speed, and weather conditions for each city.

- JavaScript (Weather Logic):
The weather.js script listens for the DOMContentLoaded event to ensure the page is fully loaded before starting the process of fetching the weather data.
It then loops through the predefined cities and fetches the weather data for each, updating the relevant section of the page dynamically with the current weather information.

- CSS Styling:
The app's layout is styled using a mix of flexbox and other modern CSS techniques to ensure it’s responsive.
Specific styles are applied to the weather cards, headers, buttons, and navigation to make the app visually appealing.


Setup Instructions:
To run this application locally, follow the steps below:

Prerequisites:
A modern web browser (Chrome, Firefox, Edge, Safari).
No backend setup is required as this is a front-end only application.
