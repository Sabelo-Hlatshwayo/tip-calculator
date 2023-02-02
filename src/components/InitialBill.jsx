import React from "react";

function InitialBill() {
    return (
        <div>
            <label
                className="calculator__bill"
                htmlFor="bill"
            >
                bill
            </label>
            <input
                type="text"
                className="calculator__bill-input"
                placeholder="0"
                id="bill"
            />
        </div>
    );
}

export default InitialBill;
