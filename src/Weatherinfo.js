import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherConvertion from "./WeatherConvertion";


export default function Weatherinfo(props) {
    return (
        <div className="Weatherinfo">
            <div className="row">
                <div className="col-5">
                    <div className="CityName">{props.data.city}
                    </div>
                </div>
                <div className="col-3">
                    <ul className="tableTwo">
                        <li id="humidity">Humidity:{props.data.humidity}%</li>
                        <li id="wind">Wind:{props.data.wind}</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="temperature">
                        <WeatherIcon code={props.data.icon} />
                        <WeatherConvertion farenheit={props.data.temperature} />
                        <p className="mostly">{props.data.description}</p>
                    </div>

                </div>
            </div>

            <div className="col center">
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


    );
}

