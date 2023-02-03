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
                <div className="calculator__output-box">
                    <div className="calculator__output-box-1">
                        <div>
                            <span className="calculator__tip-amount">
                                tip amount
                            </span>
                            <span className="calculator__per-person">
                                /&nbsp;&nbsp;person
                            </span>
                        </div>
                        <span className="calculator__amount">
                            <span>$</span>
                            <span>0.00</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
