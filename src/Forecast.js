import axios from "axios";
import React, { useState, useEffect } from "react";
import WeatherDay from "./Weatherday";



export default function Forecast(props) {

    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);


    useEffect(() => {
        setReady(false);
    }, [props.coordinates]);


    function handleResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }
    console.log(props);



    if (ready) {
        return (

            <div className="weather-forecast" id="forecast">
                <div className="row">

                    {forecast.map(function (dailyforecast, index) {
                        if (index < 5) {
                            return (<div className="col circle mn-circ" key={index}>

                                <WeatherDay data={dailyforecast} />
                            </div>
                            );
                        }
                        else {
                            return null;
                        }
                    }
                    )}
                </div>
            </div>
        );

    }
    else {
        let apiKey = "08638797b25b0ee2dd5b1bbc8fde3b75";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

        axios.get(apiUrl).then(handleResponse);
        return null;

    }
}
