import React from "react";
import close from "../../assets/images/Vector.png";
import "./ScoresPage.scss";
import background from "../../assets/images/background.png";
import NavBar from "../../components/Nav/NavBar";

export default function ScoresPage() {
  return (
    <section className="main">
      <div className="main__top">
        <p className="main__top-item--active">HOME</p>
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
          <a href="" className="insights__heading-link">
            See All
          </a>
        </div>
        <div className="insights__container">
          <img src={background} alt="" className="insights__container-image" />
          <p className="insights__container-description">
            MLB Opening Day best bets: Blue Jays to start fast in St. Louis
          </p>
          <p className="insights__container-time">7h ago</p>
        </div>
        <p>MLB</p>
        <p>Today</p>
      </div>

      <NavBar isScoreSelected={true}/>
    </section>
  );
}
