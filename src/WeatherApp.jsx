import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";

export default function WeatherApp() {
    let[weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 27.4,
        humidity: 36,
        temp: 27.99,
        tempMax: 28.94,
        tempMin: 27.4,
        weather: "smoke"
    });

    let updateWeather = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div className="WeatherApp">
            <h1>Weather App</h1>
            <SearchBox updateWeather={updateWeather}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}