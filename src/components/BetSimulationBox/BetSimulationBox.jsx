import React from 'react';
import "./BetSimulationBox.scss"

const BetSimulationBox = () => {
    return (
        <div className="betsimulationbox">
            <div className="betsimulationbox__title-ctr">
                <p className="betsimulationbox__title">STRAIGHT</p>
                <p className="betsimulationbox__title">PARALAY</p>
            </div>
            <div className="betsimulationbox__subtitle-ctr">
                <p className="betsimulationbox__title-rate">Cardinals</p>
                <p className="betsimulationbox__rate">-1.5</p>
            </div>
            <div>
                <div className="betsimulationbox__row1">
                    <p className="betsimulationbox__row1-box">+$20</p>
                    <p className="betsimulationbox__row1-box">$50</p>
                    <p className="betsimulationbox__row1-box">$100</p>
                    <p className="betsimulationbox__row1-box">$200</p>
                </div>
                <div className="betsimulationbox__row2">
                    <div className="betsimulationbox__row2-box">
                        <p className="betsimulationbox__row2-title">Bet</p>
                        <p className="betsimulationbox__row2-num">$0.00</p>
                    </div>
                    <div className="betsimulationbox__row2-box">
                        <p className="betsimulationbox__row2-title">Bet</p>
                        <p className="betsimulationbox__row2-num">$0.00</p>
                    </div>   
                </div>
                <div className="betsimulationbox__payout-ctr">
                    <p className="betsimulationbox__payout">PAYOUT</p>
                    <p className="betsimulationbox__payout">$50.00</p>
                </div>
            </div>
        </div>
    );
};

export default BetSimulationBox;