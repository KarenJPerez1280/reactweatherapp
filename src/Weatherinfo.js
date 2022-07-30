import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherConvertion from "./WeatherConvertion";


export default function Weatherinfo(props) {
    return (
        <div className="Weatherinfo">
            <div className="row center">
                <div className="col-12">
                    <div className="CityName">{props.data.city}
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="col-3">
                    <ul className="tableTwo">
                        <li id="humidity">Humidity:{props.data.humidity}%</li>
                        <li id="wind">Wind:{props.data.wind}</li>
                    </ul>
                </div>
                <div className="col-1 icon">

                    <WeatherIcon code={props.data.icon} />

                </div>

                <div className="col-2 temperature">

                    <WeatherConvertion farenheit={props.data.temperature} />

                    <p className="mostly">{props.data.description}</p>



                </div>


                <div className="col-4">
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

                        <div className="arrows">
                            <span className="highOne">{Math.round(props.data.min)}°F </span>
                            <span className="lowOne"> {Math.round(props.data.max)}°F</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

