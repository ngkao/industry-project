import React from 'react'
import "../BetBox/BetBox.scss"

export default function Totals() {
  return (
    <div className="card">
    <div className="row">
      <div className="name"></div>
      <div className="number"></div>
      <div className="tab ">Spread</div>
      <div className="tab active">Total</div>
      <div className="tab">Money</div>
    </div>
    <div className="row">
      <div className="name">
        <div className="text text1">TOR</div>
        <div className="text text2">Blue Jays</div>
      </div>
      <div className="number">6</div>
      <div className="box ">
        <div className="white-text">-1.5</div>
        <div className="blue-text">+150</div>
      </div>
      <div className="box active">
        <div className="white-text">0 16.5</div>
        <div className="blue-text">-120</div>
      </div>
      <div className="box">
        <div className="blue-text">-170</div>
      </div>
    </div>
    <div className="row">
      <div className="name">
        <div className="text text1">STL</div>
        <div className="text text2">Cardinals</div>
      </div>
      <div className="number">6</div>
      <div className="box ">
        <div className="white-text">+1.5</div>
        <div className="blue-text">-200</div>
      </div>
      <div className="box active">
        <div className="white-text">U 16.5</div>
        <div className="blue-text">-110</div>
      </div>
      <div className="box">
        <div className="blue-text">+130</div>
      </div>
    </div>
  </div>
  )
}
