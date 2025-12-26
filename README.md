 Weather Application

A  weather application that provides current conditions, detailed forecasts, and air quality data for any city worldwide. Built with the OpenWeatherMap API, featuring a modern blue gradient interface and intuitive user experience.

## 🌤️ Introduction

This website is a full-featured weather application that delivers real-time weather information and air quality metrics. The application features a clean, modern design with smooth animations and responsive layouts for all devices.

## 🚀 Quick Setup

### Prerequisites
- Modern web browser
- Internet connection
- OpenWeatherMap API key (free tier available)

### Installation Steps

1. **Get Your API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Create a free account
   - Generate an API key from your dashboard

2. **Configure API Key**
   - Open `config.js` in the project folder
   - Replace the placeholder with your actual API key:
   ```javascript
   const OPENWEATHER_API_KEY = 'your_api_key_here';
   ```

3. **Launch Application**
   - Open `index.html` in your browser
   - Or serve via local web server for best experience

## 📁 Project Architecture

```
openweather/
├── index.html    # Main application structure
├── style.css     # Complete styling and responsive design
├── script.js     # Weather API integration and UI logic
└── config.js     # API key configuration (keep private!)
```

## 🎯 Features

### Current Weather Information
- **Temperature** - Current temperature in Celsius
- **Feels Like** - Perceived temperature
- **Description** - Weather condition description
- **Humidity** - Air humidity percentage
- **Wind Speed** - Wind velocity in m/s
- **Pressure** - Atmospheric pressure in hPa
- **Visibility** - Visibility distance in kilometers
- **Sunrise/Sunset** - Daily sun times


### Air Quality Data
- **AQI Index** - Air Quality Index (1-5 scale)
- **Quality Rating** - Good, Fair, Moderate, Poor, Very Poor
- **Real-time Updates** - Current air pollution levels

## 🔍 How to Use

### Searching for Weather

1. **Enter City Name**
   - Type city name in the search input field
   - Examples: "Manila", "New York", "Tokyo", "London"

2. **Search Options**
   - Click the **Search** button, OR
   - Press **Enter** key on your keyboard

3. **View Results**
   - Current weather displays immediately


### API Integration

The application uses three OpenWeatherMap endpoints:

1. **Current Weather** (`/weather`)
   - Fetches real-time weather data
   - Returns temperature, humidity, wind, etc.

2. **5-Day Forecast** (`/forecast`)
   - Provides weather predictions
   - Includes multiple time periods

3. **Air Pollution** (`/air_pollution`)
   - Retrieves air quality data
   - Uses coordinates from weather data


### API Key Protection
- Store API key in separate `config.js` file
- **Never commit** `config.js` with real key to version control
- Use environment variables in production
- Add `config.js` to `.gitignore`

## Screenshot
<img width="858" height="937" alt="image" src="https://github.com/user-attachments/assets/7cd939c2-7ea6-44f1-b45c-6988505d3262" />


