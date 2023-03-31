import React, { useState } from 'react'
import "../BetBox/BetBox.scss"

export default function Choice() {

    const [activeBoxId, setActiveBoxId] = useState(0);
    const [isContinueDisabled, setIsContinueDisabled] = useState(true);
  
    const handleBoxClick = (boxId) => {
      setActiveBoxId(boxId);
      setIsContinueDisabled(false);
    };
  return (
    <div className="card">
    <div className="row">
      <div className="name"></div>
      <div className="number"></div>
      <div className="tab">Spread</div>
      <div className="tab">Total</div>
      <div className="tab">Money</div>
    </div>
    <div className="row">
      <div className="name ">
        <div className="text white text1">TOR</div>
        <div className="text white text2">Blue Jays</div>
      </div>
      <div className="number">6</div>
      <div
        className={`box active ${activeBoxId === 1 ? "white-box" : ""}`}
        onClick={() => handleBoxClick(1)}
      >
        <div className="white-text">-1.5</div>
        <div className="blue-text">+150</div>
      </div>
      <div
        className={`box active ${activeBoxId === 2 ? "white-box" : ""}`}
        onClick={() => handleBoxClick(2)}
      >
        <div className="white-text">0 16.5</div>
        <div className="blue-text">-120</div>
      </div>
      <div
        className={`box active ${activeBoxId === 3 ? "white-box" : ""}`}
        onClick={() => handleBoxClick(3)}
      >
        <div className="blue-text">-170</div>
      </div>
    </div>
    <div className="row">
      <div className="name">
        <div className="text text1 white">STL</div>
        <div className="text text2 white">Cardinals</div>
      </div>
      <div className="number">6</div>
      <div
        className={`box active ${activeBoxId === 4 ? "white-box" : ""}`}
        onClick={() => handleBoxClick(4)}
      >
        <div className="white-text">+1.5</div>
        <div className="blue-text">-200</div>
      </div>
      <div
        className={`box active ${activeBoxId === 5 ? "white-box" : ""}`}
        onClick={() => handleBoxClick(5)}
      >
        <div className="white-text">U 16.5</div>
        <div className="blue-text">-110</div>
      </div>
      <div
        className={`box active ${activeBoxId === 6 ? "white-box" : ""}`}
        onClick={() => handleBoxClick(6)}
      >
        <div className="blue-text">+130</div>
      </div>
    </div>
  </div>
  )
}
