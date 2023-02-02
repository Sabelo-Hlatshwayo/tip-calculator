import React from "react";

function NumPeople() {
    return (
        <div>
            <label
                className="calculator__people"
                htmlFor="people"
            >
                number of people
            </label>
            <input
                type="text"
                className="calculator__people-input"
                placeholder="0"
                id="people"
            />
        </div>
    );
}

export default NumPeople;
