import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDay(props) {

    function maxTemp() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`;

    }
    function minTemp() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`;

    }
    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDate();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
        return days[day];
    }

    return (
        <div>
            <div className="circleOne">
                <p className="weather-forecast-date">{day()}</p>
                <WeatherIcon code={props.data.weather[0].icon} size={60} />
                <p>
                    <span className="high"> {maxTemp()}°F </span>
                    <span className="low">{minTemp()}°F</span>
                </p>
            </div>
        </div>
    );
}