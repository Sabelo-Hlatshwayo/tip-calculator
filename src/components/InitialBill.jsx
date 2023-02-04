import React, { useState } from "react";

function InitialBill() {
    const [bill, setBill] = useState(0);

    const handleBill = (e) => setBill(() => e.target.value);

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
                onChange={handleBill}
            />
        </div>
    );
}

export default InitialBill;
