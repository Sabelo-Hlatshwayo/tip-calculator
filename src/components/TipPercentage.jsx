import React from "react";
import BtnPercentage from "./BtnPercentage";

function TipPercentage() {
    return (
        <div>
            <p className="calculator__tip-percent">select tip %</p>
            <div className="calculator__buttons-box">
                <BtnPercentage
                    percentage="5"
                    custom={false}
                />
                <BtnPercentage
                    percentage="10"
                    custom={false}
                />
                <BtnPercentage
                    percentage="15"
                    custom={false}
                />
                <BtnPercentage
                    percentage="25"
                    custom={false}
                />
                <BtnPercentage
                    percentage="50"
                    custom={false}
                />

                <BtnPercentage
                    percentage="0"
                    custom={true}
                />
            </div>
        </div>
    );
}

export default TipPercentage;
