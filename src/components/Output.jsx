import React from "react";

function Output({ title, amount }) {
    return (
        <div className="calculator__output-box-1">
            <div>
                <span className="calculator__tip-amount">{title}</span>
                <span className="calculator__per-person">
                    /&nbsp;&nbsp;person
                </span>
            </div>
            <span className="calculator__amount">
                <span>$</span>
                <span>{amount}</span>
            </span>
        </div>
    );
}

export default Output;
