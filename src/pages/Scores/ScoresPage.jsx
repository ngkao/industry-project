import React from "react";
import close from "../../assets/images/Vector.png";
import "./ScoresPage.scss";

export default function ScoresPage() {
  return (
    <section className="main">
      <div className="main__top">
        <p className="main__top-item">HOME</p>
        <p className="main__top-item">MY BETS</p>
      </div>

      <div className="main__banner">
        <p className="main__banner-text">Confused about betting?</p>
        <a href="" className="main__banner-button">
          Check this out!
        </a>
        <img
          src={close}
          alt="icon shaped like an 'x' to indicate closing"
          className="main__banner-icon"
        />
      </div>

      <div className="insights">
        <div className="insights__heading">
          <h2 className="insights__heading-title">Betting Insights</h2>
          <a href="" className="insights__heading-link">See All</a>
        </div>
      </div>
    </section>
  );
}
