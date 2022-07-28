import "./styles.css";
import axios from "axios";
import React, { useState } from "react";
import Forecast from "./Forecast";
import CurrentDate from "./CurrentDate";



export default function Search(props) {

    const [weatherData, setWeatherData] = useState({ ready: false });


    function handleResponse(response) {
        console.log(response.data);
        setWeatherData(
            {
                ready: true,
                temperature: response.data.main.temp,
                wind: response.data.wind.speed,
                humidity: response.data.main.humidity,
                city: response.data.name,
                date: new Date(response.data.dt * 1000),
                description: response.data.weather[0].description,
                iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            });

    }

    if (weatherData.ready) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-3 time">
                        <p id="current-time" className="hour">
                            <CurrentDate date={weatherData.date} />
                        </p>
                    </div>
                    <div className="col-4 center">
                        <input
                            type="text"
                            placeholder="Search for a City..."
                            className="searchForm"
                            id="search-input-city"
                        />

                        <input type="submit" id="search-button" value="🔍" className="search" />

                        <input type="submit" value="🧭" id="current-location-button" />
                    </div>
                </div>


                <div className="row">
                    <div className="col">

                        <ul className="tableTwo">
                            <li id="humidity">Humidity:{weatherData.humidity}%</li>
                            <li id="wind">Wind:{weatherData.wind}</li>
                        </ul>

                    </div>
                    <div className="col">
                        <p className="cityName"> {weatherData.city}</p>
                        <img src={weatherData.iconUrl}
                            alt={weatherData.description} />
                        <span className="temperature">
                            <span className="number">{Math.round(weatherData.temperature)}</span>
                            <span className="units">°F  </span>
                        </span>
                        <p className="mostly">{weatherData.description}</p>
                    </div>


                    <div className="col">
                        <div className="bigArrow">
                            <p>
                                <span className="red">
                                    <i className="fa-solid fa-arrow-up-long red"></i>
                                </span>
                                <span className="blue">
                                    {" "}
                                    <i className="fa-solid fa-arrow-down-long blue"></i>
                                </span>
                            </p>

                            <p>
                                <span className="highOne">[H] </span>
                                <span className="lowOne"> [L]</span>
                            </p>
                        </div>
                    </div>


                </div>
                <Forecast />
            </div>
        );
    }
    else {
        const apiKey = "08638797b25b0ee2dd5b1bbc8fde3b75";

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return "loading..."
    }


}


