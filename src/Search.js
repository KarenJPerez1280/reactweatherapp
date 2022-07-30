import "./styles.css";
import axios from "axios";
import React, { useState } from "react";
import Forecast from "./Forecast";
import CurrentDate from "./CurrentDate";
import Weatherinfo from "./Weatherinfo";



export default function Search(props) {
    const [city, setCity] = useState(props.city);
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
                icon: response.data.weather[0].icon
            });

    }
    function search() {
        const apiKey = "08638797b25b0ee2dd5b1bbc8fde3b75";

        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return "loading..."

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }
    function handleCityChange(event) {
        setCity(event.target.value);

    }


    if (weatherData.ready) {
        return (
            <div className="Search">
                <div className="row">
                    <div className="col">
                        <CurrentDate date={weatherData.date} />
                    </div>

                    <div className="col-7 center">
                        <form onSubmit={handleSubmit}>

                            <input
                                type="search"
                                placeholder="Search for a City..."
                                className="searchForm"
                                autocomplete="off"
                                autofocus="on"
                                id="search-input-city"
                                onChange={handleCityChange}
                            />

                            <input type="submit" id="search-button" value="🔍" className="search" />

                            <input type="submit" value="🧭" id="current-location-button" />


                        </form>
                    </div>
                </div>

                <Weatherinfo data={weatherData} />

                <Forecast />
            </div>
        );
    }
    else {
        search();
        return "hola";
    }


}


