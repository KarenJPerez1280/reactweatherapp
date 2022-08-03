import React from "react";

export default function WeatherConvertion(props) {

    return (
        <div>
            <span className="number">
                {Math.round(props.farenheit)}</span>
            <span className="units">°F  </span>
        </div>

    );



}