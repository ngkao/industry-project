import React from 'react';
import "./NavBar.scss"
import News from "../../assets/icon/news.png"
import ScoresBlue from "../../assets/icon/scores.png"
import Scores from "../../assets/icon/scores-gr.png"
import Bet from "../../assets/icon/bet.png"
import BetBlue from "../../assets/icon/bet-bl.png"
import { Link, useNavigate } from 'react-router-dom';
// import BetPage from '../../pages/Bet/BetPage';


const NavBar = ({isScoreSelected}) => {
    const navigate = useNavigate();
    function handleBetClick() {
        navigate('/bet')
    }
    return (
        <div className="nav__ctr">
            <div className="nav">
                <div className="nav__item">
                    <img className="nav__icon" src={News}/>
                    <p className="nav__heading">News</p>
                </div>
                {isScoreSelected ? (
                    <div className="nav__item">
                        <img className="nav__icon" src={ScoresBlue}/>
                        <p className="nav__heading">Scores</p>
                    </div>
                ) : (
                    <div className="nav__item">
                        <img className="nav__icon" src={Scores}/>
                        <p className="nav__heading">Scores</p>
                    </div>
                )}
                <div className="nav__item">
                    <img className="nav__icon" src="/"/>
                    <p className="nav__heading">Favorites</p>
                </div>
                {isScoreSelected ? (
                    <div className="nav__item"
                          onClick={handleBetClick}>
                        <img className="nav__icon" src={Bet}/>
                        <p className="nav__heading">Bet</p>
                    </div>
                ) : (
                    <div className="nav__item">
                        <img className="nav__icon" src={BetBlue}/>
                        <p className="nav__heading">Bet</p>
                    </div>
                )}
                <div className="nav__item">
                    <img className="nav__icon" src="/"/>
                    <p className="nav__heading">Leagues</p>
                </div>
            </div>
            <div className="nav__line-ctr">
                <div className="nav__line"></div>
            </div>
        </div>
    );
};

export default NavBar;