import React from "react";

function TipPercentage() {
    return (
        <div>
            <p className="calculator__tip-percent">select tip %</p>
            <div className="calculator__buttons-box">
                <button className="calculator__buttons">5%</button>
                <button className="calculator__buttons">10%</button>
                <button className="calculator__buttons">15%</button>
                <button className="calculator__buttons">25%</button>
                <button className="calculator__buttons">50%</button>
                <input
                    type="text"
                    placeholder="custom"
                    className="calculator__custom"
                />
            </div>
        </div>
    );
}

export default TipPercentage;
