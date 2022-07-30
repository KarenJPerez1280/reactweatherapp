import "./styles.css";
import axios from "axios";
import React, { useState } from "react";
import Forecast from "./Forecast";
import CurrentDate from "./CurrentDate";
import Weatherinfo from "./Weatherinfo";
import 'bootstrap/dist/css/bootstrap.min.css';


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
                min: response.data.main.temp_min,
                max: response.data.main.temp_max,
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
            <div className="container">

                <div className="row">
                    <div className="col-4 time">
                        <div className="hour">
                            <CurrentDate date={weatherData.date} />
                        </div>
                    </div>

                    <div className="col-8 engine">
                        <form className="engine" onSubmit={handleSubmit}>

                            <input
                                type="search"
                                placeholder="Search for a City..."
                                className="searchForm"
                                autoComplete="off"
                                autoFocus="on"
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


