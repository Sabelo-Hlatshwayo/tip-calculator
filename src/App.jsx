import React from "react";
import InitialBill from "./components/InitialBill";

function App() {
    return (
        <div className="container">
            <div className="grid calculator">
                <form className="calculator__input-box">
                    <InitialBill />
                    <p className="calculator__tip-percent">select tip %</p>
                    <div className="calculator__buttons-box">
                        <button className="calculator__buttons">5%</button>
                        <button className="calculator__buttons">10%</button>
                        <button className="calculator__buttons">15%</button>
                        <button className="calculator__buttons">25%</button>
                        <button className="calculator__buttons">50%</button>
                        <input
                            type="text"
                            placeholder="custom"
                            className="calculator__custom"
                        />
                    </div>
                </form>
                <div className="calculator__output-box">SECOND</div>
            </div>
        </div>
    );
}

export default App;
