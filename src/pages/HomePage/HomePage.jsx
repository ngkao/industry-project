import React from "react";
import GameItem from "../../components/GameItem/GameItem";
import "./HomePage.scss";
import NavBar from "../../components/Nav/NavBar";
import BetSimulationBox from "../../components/BetSimulationBox/BetSimulationBox";
import cle from "../../assets/team-icons/cle.png";
import col from "../../assets/team-icons/col.png";
import hou from "../../assets/team-icons/hou.png";
import la from "../../assets/team-icons/la.png";
import ny from "../../assets/team-icons/mets.png";
import mia from "../../assets/team-icons/mia.png";
import sd from "../../assets/team-icons/sd.png";
import sea from "../../assets/team-icons/sea.png";
import socks from "../../assets/team-icons/socks.png";
import tor from "../../assets/team-icons/tor.png";


export default function HomePage() {
  return (
    <section className="main">
      <div className="main__league-list">
        <p className="main__league-item">NFLF</p>
        <p className="main__league-item">TOP</p>
        <p className="main__league-item">NFL</p>
        <p className="main__league-item">NBA</p>
        <p className="main__league-item">NCAAF</p>
        <p className="main__league-item">MLB</p>
        <p className="main__league-item">NHL</p>
      </div>
      <div className="main__ctr">
        <div className="main__title-ctr">
          <h3 className="main__title">NBA</h3>
          <h3 className="main__title">Go to NBA</h3>
        </div>
        <GameItem
          team1="MIA Marlins"
          score1="109"
          team2="CHI White Sox"
          score2="107"
          image1={mia}
          image2={socks}
          time="7:00 PM"
          betdollar="$75,324"
          to="/scores"
        />
        <GameItem
          team1="TOR Blue Jays"
          score1="6"
          team2="NY Mets"
          score2="7"
          image1={tor}
          image2={ny}
          time="7:00 PM"
          betdollar="$182,635"
          to="/scores"
        />
        <GameItem
          team1="HOU Astros"
          score1="109"
          team2="COL Rockies"
          score2="107"
          image1={hou}
          image2={col}
          time="7:00 PM"
          betdollar="10,500"
          to="/scores"
        />
        <GameItem
          team1="SD Padres"
          score1="109"
          team2="LA Dodgers"
          score2="107"
          image1={sd}
          image2={la}
          time="7:30 PM"
          betdollar="$50,240"
          to="/"
        />
        <GameItem
          team1="CLE Guardians"
          score1="109"
          team2="SEA Mariners"
          score2="107"
          image1={cle}
          image2={sea}
          time="7:30 PM"
          betdollar="$128,567"
          to="/"
        />
      </div>
        <NavBar isScoreSelected={true}/>
        <BetSimulationBox
            hasShades={true}
        />
    </section>
  );
}
