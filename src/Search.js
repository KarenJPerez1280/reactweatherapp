import "./styles.css";
import axios from "axios";
import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Search() {

    const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);


    function handleResponse(response) {
        console.log(response.data);
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if (ready) {
        return (
            <div className="Search">

                <p className="cityname"></p>
                <input
                    type="text"
                    placeholder="Search for a City..."
                    className="searchForm"
                    id="search-input-city"
                />

                <input type="submit" id="search-button" value="🔍" className="search" />

                <input type="submit" value="🧭" id="current-location-button" />

                <div className="temp" id="temp">
                    <p className="cityName"> Paris</p>
                    <ReactAnimatedWeather
                        icon="CLEAR_DAY"
                        color="MAGENTA"
                        size={80}
                        animate={true}

                    />
                    <span className="temperature">
                        <span className="number">{Math.round(temperature)}</span>
                        <span className="units">°F  </span>
                    </span>
                </div>
                <p className="mostly"> mostly sunny</p>


            </div>


        );
    }
    else {
        const apiKey = "08638797b25b0ee2dd5b1bbc8fde3b75";
        let city = "Paris";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return "loading..."
    }

}


