import React from "react";

function App() {
    return (
        <div className="container">
            <div className="grid calculator">
                <form className="calculator__input-box">
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
                </form>
                <div className="calculator__output-box">SECOND</div>
            </div>
        </div>
    );
}

export default App;
