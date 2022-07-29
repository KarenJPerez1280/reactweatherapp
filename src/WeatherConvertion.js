import React, { useState } from "react";

export default function WeatherConvertion(props) {
    const [unit, setUnit] = useState('farenheit');

    function ShowCelcius(event) {
        event.preventDefault();
        setUnit("celcius");
    }

    function ShowFarenheit(event) {
        event.preventDefault();
        setUnit("farenheit");
    }

    function celcius() {
        return (
            (props.farenheit - 32) * 5 / 9
        );
    }
    if (unit === `farenheit`) {


        return (
            <div>
                <span className="number">
                    {Math.round(props.farenheit)}</span>
                <span className="units">°F |<a href="/" onClick={ShowCelcius}>°C</a>  </span>
            </div>

        );
    } else {

        return (

            <div>
                <span className="number">
                    {Math.round(celcius())}</span>
                <span className="units"><a href="/" onClick={ShowFarenheit}>°F</a>  |°C </span>
            </div>
        );
    }

}