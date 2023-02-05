import React, { useState } from "react";

function CustomPercentage() {
    const [customTip, setCustomTip] = useState("");
    const handleCustomTip = (e) => setCustomTip(() => e.target.value);

    return (
        <input
            type="text"
            placeholder="custom"
            className="calculator__custom"
            value={customTip}
            onChange={handleCustomTip}
        />
    );
}

export default CustomPercentage;
