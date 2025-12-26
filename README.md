# WeatherHub - Real-Time Weather Application

A comprehensive weather application that provides current conditions, detailed forecasts, and air quality data for any city worldwide. Built with the OpenWeatherMap API, featuring a modern blue gradient interface and intuitive user experience.

## 🌤️ Introduction

WeatherHub is a full-featured weather application that delivers real-time weather information, 5-day forecasts, and air quality metrics. The application features a clean, modern design with smooth animations and responsive layouts for all devices.

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

### Extended Forecast
- **5-Day Forecast** - Weather predictions for upcoming days
- **Daily Temperatures** - High and low temperatures
- **Weather Conditions** - Expected weather descriptions

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
   - Scroll down for forecast and air quality data

### Input Validation

The application validates input to ensure:
- City name is not empty
- Minimum 2 characters required
- Maximum 100 characters allowed
- Special characters are filtered

## 🎨 User Interface

### Design Theme
- **Color Palette**: Blue gradient (74b9ff → 0984e3 → 2d3436)
- **Layout**: Card-based design with shadows
- **Typography**: Modern sans-serif fonts
- **Animations**: Smooth transitions and hover effects

### Visual Elements
- **Header**: Gradient blue background with title
- **Search Bar**: Prominent input with styled button
- **Weather Cards**: Information displayed in organized cards
- **Forecast Grid**: Responsive grid layout
- **Footer**: API attribution and links

## 🔧 Technical Details

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

### Error Handling

Comprehensive error management for:
- **404 Errors**: City not found
- **401 Errors**: Invalid API key
- **Network Errors**: Connection issues
- **Invalid Input**: User input validation

### Loading States

- Animated spinner during API calls
- "Loading..." text indicator
- Button disabled state during requests
- "Searching..." button text

## 📱 Responsive Design

### Mobile (≤480px)
- Single column layout
- Full-width search button
- Stacked forecast cards
- Optimized font sizes

### Tablet (≤768px)
- Two-column grid layouts
- Medium-sized elements
- Comfortable spacing

### Desktop (≥768px)
- Three-column detail grids
- Multi-column forecast display
- Maximum information density

## 🛡️ Security Best Practices

### API Key Protection
- Store API key in separate `config.js` file
- **Never commit** `config.js` with real key to version control
- Use environment variables in production
- Add `config.js` to `.gitignore`

### Input Sanitization
- Validates all user input
- Prevents XSS attacks
- Filters special characters
- Trims whitespace

## 📊 Data Display

### Weather Card Structure
```
┌─────────────────────────────┐
│  City Name, Country         │
│  Current Date              │
├─────────────────────────────┤
│  Temperature (Large)        │
│  Feels Like                 │
│  Description                │
├─────────────────────────────┤
│  [Details Grid]             │
│  Humidity | Wind | Pressure │
│  Visibility | Sunrise | ...│
└─────────────────────────────┘
```

### Forecast Display
- Date for each forecast day
- Temperature in large, bold text
- Weather description below temperature
- Hover effects for interactivity

## 🌍 Supported Locations

Works with any city worldwide:
- Major cities (New York, London, Tokyo)
- Smaller towns and municipalities
- International locations
- Cities with special characters (handled automatically)

## ⚡ Performance

- **Fast Loading**: Optimized API calls
- **Efficient Rendering**: Minimal DOM updates
- **Smooth Animations**: CSS-based transitions
- **Lightweight**: No external dependencies

## 🔄 Update Frequency

- **Current Weather**: Real-time data
- **Forecast**: Updated every 3 hours
- **Air Quality**: Real-time measurements

## 💡 Code Organization

### Function Categories

**API Functions**
- `weatherFetchCurrentWeather()`
- `weatherFetchForecast()`
- `weatherFetchAirPollution()`

**Display Functions**
- `weatherDisplayWeather()`
- `weatherShowLoading()`
- `weatherHideLoading()`

**Utility Functions**
- `weatherValidateInput()`
- `weatherFormatDate()`
- `weatherFormatTime()`
- `weatherGetAirQualityText()`

**Error Handling**
- `weatherShowError()`
- `weatherClearError()`

## 🎯 Use Cases

Perfect for:
- **Travel Planning** - Check destination weather
- **Daily Forecasts** - Plan your day ahead
- **Outdoor Activities** - Know conditions before going out
- **Air Quality Monitoring** - Health-conscious users
- **Weather Tracking** - Monitor conditions over time

## 🌐 Browser Compatibility

- Chrome/Edge (latest versions)
- Firefox (latest versions)
- Safari (latest versions)
- Opera (latest versions)

Requires:
- ES6+ JavaScript support
- Fetch API support
- Modern CSS features

## 📝 Notes

- Free API tier: 60 calls/minute limit
- Weather data updates every few hours
- Air quality may not be available for all locations
- Forecast accuracy decreases for longer periods

---

**WeatherHub** - Your window to the world's weather! 🌦️

*Powered by OpenWeatherMap API*
