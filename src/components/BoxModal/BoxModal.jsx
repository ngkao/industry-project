import React, { useState } from "react";
import "./BoxModal.scss";
import BetGuide from "../BetGuide/BetGuide"
import GoBack from "../../assets/icon/GoBack.svg"
import Cross from "../../assets/icon/Cross.svg"
import BetBox from "../../components/BetBox/BetBox";
import Spreads from "../Spreads/Spreads";
import Totals from "../Totals/Totals";
import Money from "../Money/Money";
import Choice from "../Choice/Choice";
import BetSimulationBox from "../BetSimulationBox/BetSimulationBox";

function BoxModal({ pages, onClose }) {
  const [activeButton, setActiveButton] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < pages) {
      setActiveButton(false);
      setCurrentPage(currentPage + 1);
    } 
  };

  const progress = (currentPage / pages) * 100;

  return (
    <div className="BoxModal">
      <div className="BoxModal__content">
        <div className="BoxModal__header">
          <div className="BoxModal__icons">
          <img src={GoBack} alt="" onClick={() => setCurrentPage(currentPage - 1)} className="BoxModal__icon" />
          <img src={Cross} alt="" onClick={onClose} className="BoxModal__icon"/>
          </div>
          <div className="BoxModal__progress-bar">
          <div
            className="BoxModal__progress-bar__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        </div>
     
        {currentPage === 1 && (
          <BetGuide
            title="Betting can seem confusing at first"
            subtitle=""
            info="Join us as we explore the most popular types of bets through an exciting simulation format."
            subInfo="The best part? You don't need to spend a dime - it's all for fun!"
          >
          </BetGuide>
        )}
        {currentPage === 2 && (
          <BetGuide
            title="Odds"
            subtitle="BASICS"
          > 
            <p>Blue Jays and Cardinals are playing today!</p>
            <br/>
            <p>But wait, what do those numbers in blue mean?</p>
            <BetBox/>
            <p>A <span className="bet-guide-blue">(+)</span> symbol means how much you can win with a $100 bet, while a <span className="bet-guide-blue">(-)</span> symbol means how much you need to bet to win <span className="bet-guide-blue">$100</span></p>
            <br/>
            <p>For example, you need to bet $100 on Blue Jays to win <span className="bet-guide-blue">$150</span></p>
          </BetGuide>
        )}
        {currentPage === 3 && (
          <BetGuide
            title="Spreads"
            subtitle="BETTING TYPES"
          >
            <p><span className="bet-guide-yellow">A spread</span> is a bet on whether or not a team or player will cover a certain number of points/runs and is available pregame and in-play</p>
            <Spreads/>
            <p>In this scenario, if you bet on the Blue Jays, any victory by them by <span className="bet-guide-yellow">two runs</span> or more will result in winning.</p>
            <br/>
            <p>On the other hand, if you bet on the Cardinals, if they lose by less than <span className="bet-guide-yellow">2 points</span > or win you would win.</p>
          </BetGuide>
        )}
        {currentPage === 4 && (
          <BetGuide
            title="Totals"
            subtitle="BETTING TYPES"
          >
            <p>Or in other words - <span className="bet-guide-yellow">over / under</span>. You need to predict whether the total score of a game will be higher or lower than a certain number set by the bookmaker.</p>
            <Totals/>
            <p>For example, if the over/under is set at <span className="bet-guide-yellow">16.5</span> for a Blue Jays-Cardinals game, you can bet on whether the total score will be over or under <span className="bet-guide-yellow">16.5</span> runs.</p>
            <p>If the total score is higher than <span className="bet-guide-yellow">16.5</span>, the over wins, and if it's lower, the under wins.</p>
          </BetGuide>
        )}
        {currentPage === 5 && (
          <BetGuide
            title="Money"
            subtitle="BETTING TYPES"
          > 
            <p>A simple straight bet, selecting which side will win an event.</p>
            <Money />
            <p>If you bet on Blue Jays, and, they win: receive $270 ($170 stake + $100 profit).</p>
            <br></br>
            <p>If you bet on Cardinals, and they win: receive $230 ($100 stake + $130 profit)</p>
          </BetGuide>
        )}
        
        {currentPage === 6 && (
          <BetGuide
            title="Who are you betting for?"
          >
            <p>A simple straight bet, selecting which side will win an event.</p>

            <Choice/>
          </BetGuide>
        )}
        
        {currentPage === 7 && (
          <BetGuide
          title="Who are you betting for?"
          >
            <p>Choose your preferred type of bet and make your prediction on the winner!</p>
            <Choice/>
          </BetGuide>
        )}
        {currentPage === 8 && (
          <BetGuide
          title="Bet"
          >
            <p>Choose your preferred type of bet and make your prediction on the winner!</p>
            <BetSimulationBox
              hasShades={true}
            />
          </BetGuide>
        )}
        {currentPage === 9 && (
          <BetGuide
            title="Make a Bet"
            subtitle="STRAIGH OR PARALAY?"
          >
            <BetSimulationBox hasShades={false}/>
          </BetGuide>
        )}


        

        
        {/* etc. */}
        <div className="BoxModal__btn-container">
          <button
            className={`${activeButton ? "BoxModal__btn-next--active" : "BoxModal__btn-next"}`}
            onClick={handleNextPage}
          >
          <p className="BoxModal__text-next">Next</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoxModal;
