const OPENWEATHER_API_BASE_URL = 'https://api.openweathermap.org/data/2.5';

// yung function nato is para sa pag vavalidate ng input doon sa input field parang chinecheck lang if tama ba yung ininput ng user
function weatherValidateInput(cityName) {
    const trimmed = cityName.trim();
    if (trimmed === '') {
        return { valid: false, message: 'please enter a city name' };
    }
    if (trimmed.length < 2) {
        return { valid: false, message: 'city name must be at least 2 characters' };
    }
    if (trimmed.length > 100) {
        return { valid: false, message: 'city name is too long' };
    }
    const invalidChars = /[<>{}[\]\\]/;
    if (invalidChars.test(trimmed)) {
        return { valid: false, message: 'invalid characters in city name' };
    }
    const onlyNumbers = /^\d+$/;
    if (onlyNumbers.test(trimmed)) {
        return { valid: false, message: 'invalid input please use letters only' };
    }
    const hasNumbers = /\d/;
    if (hasNumbers.test(trimmed)) {
        return { valid: false, message: 'invalid input please use letters only' };
    }
    return { valid: true, query: trimmed };
}


function weatherShowError(message) {
    const errorElement = document.getElementById('weather-error');
    const resultsElement = document.getElementById('weather-results');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('weather-show');
    }
    if (resultsElement) {
        resultsElement.innerHTML = '';
    }
}

function weatherClearError() {
    const errorElement = document.getElementById('weather-error');
    if (errorElement) {
        errorElement.classList.remove('weather-show');
        errorElement.textContent = '';
    }
}

function weatherShowLoading() {
    const loadingElement = document.getElementById('weather-loading');
    if (loadingElement) {
        loadingElement.classList.add('weather-show');
    }
}

function weatherHideLoading() {
    const loadingElement = document.getElementById('weather-loading');
    if (loadingElement) {
        loadingElement.classList.remove('weather-show');
    }
}

function weatherSetButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.classList.add('weather-loading-state');
        button.textContent = 'Searching...';
    } else {
        button.disabled = false;
        button.classList.remove('weather-loading-state');
        button.textContent = 'Search';
    }
}

// dito yung function na natitrigger kapag nagsearch yung user
async function weatherFetchCurrentWeather(cityName) {
    try {
        const response = await fetch(
            OPENWEATHER_API_BASE_URL + '/weather?q=' + encodeURIComponent(cityName) + '&appid=' + OPENWEATHER_API_KEY + '&units=metric'
        );
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('city not found please check the city name and try again');
            } else if (response.status === 401) {
                throw new Error('invalid api key please check your configuration');
            } else {
                throw new Error('failed to fetch weather data please try again later');
            }
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.message) {
            throw error;
        }
        throw new Error('network error please check your internet connection');
    }
}

async function weatherFetchForecast(cityName) {
    try {
        const response = await fetch(
            OPENWEATHER_API_BASE_URL + '/forecast?q=' + encodeURIComponent(cityName) + '&appid=' + OPENWEATHER_API_KEY + '&units=metric'
        );
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('city not found please check the city name and try again');
            } else if (response.status === 401) {
                throw new Error('invalid api key please check your configuration');
            } else {
                throw new Error('failed to fetch forecast data please try again later');
            }
        }
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.message) {
            throw error;
        }
        throw new Error('network error please check your internet connection');
    }
}

async function weatherFetchAirPollution(lat, lon) {
    try {
        const response = await fetch(
            OPENWEATHER_API_BASE_URL + '/air_pollution?lat=' + lat + '&lon=' + lon + '&appid=' + OPENWEATHER_API_KEY
        );
        if (!response.ok) {
            return null;
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

function weatherFormatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return days[date.getDay()] + ', ' + months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}

function weatherFormatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    return hours + ':' + minutesStr + ' ' + ampm;
}

function weatherGetAirQualityText(aqi) {
    const qualityMap = {
        1: 'Good',
        2: 'Fair',
        3: 'Moderate',
        4: 'Poor',
        5: 'Very Poor'
    };
    return qualityMap[aqi] || 'Unknown';
}

// dito namn is yung function para mag display yung data na nafetch galing kay weather sa html or website
function weatherDisplayWeather(data, forecastData, airPollutionData) {
    const resultsElement = document.getElementById('weather-results');
    if (!resultsElement) return;

    const cityName = data.name;
    const country = data.sys.country;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const description = data.weather[0].description;
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const pressure = data.main.pressure;
    const visibility = data.visibility ? (data.visibility / 1000).toFixed(1) : 'N/A';
    const date = weatherFormatDate(data.dt);

    let airQualityHtml = '';
    if (airPollutionData && airPollutionData.list && airPollutionData.list.length > 0) {
        const aqi = airPollutionData.list[0].main.aqi;
        const airQualityText = weatherGetAirQualityText(aqi);
        airQualityHtml = '<div class="weather-air-quality"><h3>Air Quality</h3><p class="weather-aqi-value">' + airQualityText + ' (AQI: ' + aqi + ')</p></div>';
    }

    resultsElement.innerHTML = '<div class="weather-weather-card"><div class="weather-weather-header"><h2>' + cityName + ', ' + country + '</h2><p class="weather-date">' + date + '</p></div><div class="weather-weather-main"><div class="weather-temp-section"><p class="weather-temp">' + temp + '°C</p><p class="weather-feels-like">Feels like ' + feelsLike + '°C</p><p class="weather-description">' + description + '</p></div><div class="weather-details-grid"><div class="weather-detail-item"><h4>Humidity</h4><p>' + humidity + '%</p></div><div class="weather-detail-item"><h4>Wind Speed</h4><p>' + windSpeed + ' m/s</p></div><div class="weather-detail-item"><h4>Pressure</h4><p>' + pressure + ' hPa</p></div><div class="weather-detail-item"><h4>Visibility</h4><p>' + visibility + ' km</p></div></div>' + airQualityHtml + '</div></div>';
}

// dito naaman yung function para dun sa pag sesearch parang kinukuha lang yung laman ng search bar
async function weatherHandleSearch() {
    const searchInput = document.getElementById('weather-search-input');
    const searchBtn = document.getElementById('weather-search-btn');
    
    if (!searchInput || !searchBtn) return;

    const cityName = searchInput.value.trim();
    
    const validation = weatherValidateInput(cityName);
    if (!validation.valid) {
        weatherShowError(validation.message);
        return;
    }

    weatherClearError();
    weatherShowLoading();
    weatherSetButtonLoading(searchBtn, true);

    try {
        const weatherData = await weatherFetchCurrentWeather(validation.query);
        const airPollutionData = await weatherFetchAirPollution(weatherData.coord.lat, weatherData.coord.lon);
        
        weatherHideLoading();
        weatherSetButtonLoading(searchBtn, false);
        weatherDisplayWeather(weatherData, null, airPollutionData);
    } catch (error) {
        weatherHideLoading();
        weatherSetButtonLoading(searchBtn, false);
        weatherShowError(error.message);
    }
}

const weatherSearchInput = document.getElementById('weather-search-input');
const weatherSearchBtn = document.getElementById('weather-search-btn');

if (weatherSearchBtn) {
    weatherSearchBtn.addEventListener('click', weatherHandleSearch);
}

if (weatherSearchInput) {
    weatherSearchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            weatherHandleSearch();
        }
    });
}

