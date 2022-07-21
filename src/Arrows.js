import React from "react";

export default function Arrows() {
    return (
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
    );
}
