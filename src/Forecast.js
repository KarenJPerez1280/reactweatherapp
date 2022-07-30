import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';



export default function Forecast() {
    return (
        <div className="weather-forecast" id="forecast">
            <div className="row">
                <div className="col circle mn-30">
                    <div className="circleOne">
                        <p className="weather-forecast-date">Mon</p>
                        <ReactAnimatedWeather
                            icon="CLEAR_DAY"
                            color="goldenrod"
                            size={80}
                            animate={true}
                        />
                        <p>
                            <span className="high"> [H] </span>
                            <span className="low">[L]</span>
                        </p>
                    </div>
                    <div className="circleTwo">
                        <p className="weather-forecast-date">TUE</p>
                        <ReactAnimatedWeather
                            icon="RAIN"
                            color="EMERALD"
                            size={80}
                            animate={true}
                        />
                        <p>
                            <span className="high"> [H] </span>
                            <span className="low">[L]</span>
                        </p>
                    </div>
                    <div className="circleThree">
                        <p className="weather-forecast-date">wed</p>
                        <ReactAnimatedWeather
                            icon="SNOW"
                            color="DARKBLUE"
                            size={80}
                            animate={true}
                        />
                        <p>
                            <span className="high"> [H] </span>
                            <span className="low">[L]</span>
                        </p>
                    </div>
                    <div className="circleFourth">
                        <p className="weather-forecast-date">THU</p>
                        <ReactAnimatedWeather
                            icon="FOG"
                            color="GRAY"
                            size={80}
                            animate={true}
                        />
                        <p>
                            <span className="high"> [H] </span>
                            <span className="low">[L]</span>
                        </p>
                    </div>
                    <div className="circleFifth">
                        <p className="weather-forecast-date">FRI</p>
                        <ReactAnimatedWeather
                            icon="WIND"
                            color="LIGHTBLUE"
                            size={80}
                            animate={true}
                        />
                        <p>
                            <span className="high"> [H] </span>
                            <span className="low">[L]</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
