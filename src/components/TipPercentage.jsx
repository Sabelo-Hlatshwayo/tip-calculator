import React from "react";
import BtnPercentage from "./BtnPercentage";
import CustomPercentage from "./CustomPercentage";

function TipPercentage() {
    return (
        <div>
            <p className="calculator__tip-percent">select tip %</p>
            <div className="calculator__buttons-box">
                <BtnPercentage percentage="5" />
                <BtnPercentage percentage="10" />
                <BtnPercentage percentage="15" />
                <BtnPercentage percentage="25" />
                <BtnPercentage percentage="50" />
                <CustomPercentage />
            </div>
        </div>
    );
}

export default TipPercentage;
