import React from "react";
import InitialBill from "./components/InitialBill";
import TipPercentage from "./components/TipPercentage";
import NumPeople from "./components/NumPeople";

function App() {
    return (
        <div className="container">
            <div className="grid calculator">
                <form className="calculator__input-box">
                    <InitialBill />
                    <TipPercentage />
                    <NumPeople />
                </form>
                <div className="calculator__output-box">SECOND</div>
            </div>
        </div>
    );
}

export default App;
