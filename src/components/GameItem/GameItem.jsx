import React from 'react';
import "./GameItem.scss"
import { Link } from 'react-router-dom';

const GameItem = ({team1,team2,image,score1,score2,time,betdollar,to}) => {
    return (
        <>
            <div className="gameitem gameitem__top">
                <div className="gameitem__ctr">
                    <div className="gameitem__img-team">
                        <img className="gameitem__img" src={image}/>
                        <p className="gameitem__team">{team1}</p>
                    </div>
                    <p className="gameitem__score">{score1}</p>
                </div>
                <p className="gameitem__time">{time}</p>
            </div>
            <div className="gameitem">
            <div className="gameitem__ctr">
                    <div className="gameitem__img-team">
                        <img className="gameitem__img" src={image}/>
                        <p className="gameitem__team">{team2}</p>
                    </div>
                    <p className="gameitem__score">{score2}</p>
                </div>
                {/* <p className="gameitem__time"></p> */}
            </div>
            <div className="gameitem__bet-ctr">
                <p className="gameitem__bet">Current total bets payout: <span className="gameitem__bet--highlighted">{betdollar}</span></p>
                <Link to={to} className="gameitem__link">Join the bet</Link>
            </div>
        </>
    );
};

export default GameItem;