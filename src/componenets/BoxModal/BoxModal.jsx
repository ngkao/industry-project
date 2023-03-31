import React, { useState } from "react";
import "./BoxModal.scss";
import BetGuide from "../../componenets/BetGuide/BetGuide"
import GoBack from "../../assets/icon/GoBack.svg"
import Cross from "../../assets/icon/Cross.svg"

function BoxModal({ pages, onClose }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    } else {
      onClose();
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
            info="Some info about the second page"
          >
            <p>Betting Component</p>
          </BetGuide>
        )}
        {currentPage === 3 && (
          <BetGuide
            title="Spreads"
            subtitle="BETTING TYPES"
            info="Some info about the second page"
          >
            <p>Betting Component</p>
          </BetGuide>
        )}
        
        {/* etc. */}
        <div className="BoxModal__btn-container">
          <button
            className="BoxModal__btn-next"
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
