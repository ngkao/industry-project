import React from 'react';
import "./BetSimulationBox.scss"
import { useState } from 'react';
import ArrowDown from "../../assets/icon/arrow-left.png"

const BetSimulationBox = () => {

    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        console.log("BUTTON")
        setSelected(true);
    }

    return (
        <div className="betsimulationbox">
            <div className="betsimulationbox__title-ctr">
                <p className="betsimulationbox__title betsimulationbox__title--selected">STRAIGHT</p>
                <p className="betsimulationbox__title betsimulationbox__title--unselected">PARALAY</p>
            </div>
            <div className="betsimulationbox__subtitle-ctr">
                <p className="betsimulationbox__title-rate">Cardinals</p>
                <p className="betsimulationbox__rate">-1.5</p>
                <img src={ArrowDown}/>
            </div>
            <div>
                <div className="betsimulationbox__row1">
                    <p 
                        onClick={handleClick} 
                        className={`betsimulationbox__row1-box ${selected ? "betsimulationbox__row1-box--selected" : ""}`}
                    >+$20</p>
                    <p className="betsimulationbox__row1-box">$50</p>
                    <p className="betsimulationbox__row1-box">$100</p>
                    <p className="betsimulationbox__row1-box">$200</p>
                </div>
                <div className="betsimulationbox__row2">
                    <div className="betsimulationbox__row2-box">
                        <p className="betsimulationbox__row2-title">Bet</p>
                        <p className={`betsimulationbox__row2-num ${selected ? "betsimulationbox__row2-num--selected" : ""}`}>{selected ? "$20.00" : "$0.00"}</p>
                    </div>
                    <div className="betsimulationbox__row2-box">
                        <p className="betsimulationbox__row2-title">Bet</p>
                        <p className={`betsimulationbox__row2-num ${selected ? "betsimulationbox__row2-num--selected" : ""}`}>{selected ? "$30.00" : "$0.00"}</p>
                    </div>   
                </div>
                <div className="betsimulationbox__payout-ctr">
                    <p className="betsimulationbox__payout">PAYOUT</p>
                    <p className="betsimulationbox__payout">{selected ? "$50.00" : "$0.00"}</p>
                </div>
            </div>
        </div>
    );
};

export default BetSimulationBox;