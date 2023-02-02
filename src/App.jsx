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
                </form>
                <div className="calculator__output-box">SECOND</div>
            </div>
        </div>
    );
}

export default App;
