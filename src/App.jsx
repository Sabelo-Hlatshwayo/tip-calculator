import React from "react";
import InitialBill from "./components/InitialBill";
import TipPercentage from "./components/TipPercentage";

function App() {
    return (
        <div className="container">
            <div className="grid calculator">
                <form className="calculator__input-box">
                    <InitialBill />
                    <TipPercentage />

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
                </form>
                <div className="calculator__output-box">SECOND</div>
            </div>
        </div>
    );
}

export default App;
