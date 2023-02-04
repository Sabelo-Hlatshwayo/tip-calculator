import React from "react";

function BtnPercentage({ percentage, custom }) {
    return custom ? (
        <input
            type="text"
            placeholder="custom"
            className="calculator__custom"
        />
    ) : (
        <button className="calculator__buttons">{percentage}%</button>
    );
}

export default BtnPercentage;
