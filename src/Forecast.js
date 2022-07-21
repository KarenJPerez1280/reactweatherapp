import React from "react";

export default function Forecast() {
    return (
        <div className="weather-forecast" id="forecast">
            <div className="row">
                <div className="col circle mn-30">
                    <div className="circleOne">
                        <p className="weather-forecast-date">Mon</p>
                        <span role="img" aria-label="sun">
                            ☀️
                        </span>
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
