# Weather Report Application

This Node.js application sends weather reports to users via email every 3 hours.

## Features

- Fetches weather data for user locations.
- Stores weather data in a MongoDB database.
- Sends weather reports via email using Nodemailer.

## Prerequisites

- Node.js and npm
- MongoDB
- Environment variables for email configuration

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-reporter-api.git
    cd weather-reporter-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file with the following variables:
    ```
    EMAIL=your-email@gmail.com
    PASSWORD=your-email-password
    MONGODB_URI=your-mongodb-uri
    WEATHER_API_KEY=your-weather-api-key
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```

2. The server will send weather reports every 3 hours.

## Project Structure

- **controllers/**: Contains cron job logic (`cron.js`).
- **config/**: Contains email configuration (`nodemailer.js`).
- **models/**: Contains Mongoose models (`user.js`).

## License

This project is licensed under the MIT License.
