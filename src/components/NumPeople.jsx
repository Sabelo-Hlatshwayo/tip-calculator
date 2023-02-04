import React, { useState } from "react";

function NumPeople() {
    const [numPeople, setNumPeople] = useState("");
    const handleNumPeople = (e) => setNumPeople(() => e.target.value);

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
                onChange={handleNumPeople}
                value={numPeople}
            />
        </div>
    );
}

export default NumPeople;
