import React from 'react';
import "./GameItem.scss"

const GameItem = ({team1, image}) => {
    return (
        <div className="gameitem">
            <div className="gameitem__ctr">
                <div className="gameitem__img-team">
                    <img className="gameitem__img" src={image}/>
                    <p className="gameitem__team">{team1}</p>
                </div>
                <p className="gameitem__score">Score</p>
            </div>
            <p className="gameitem__time">time</p>
        </div>
    );
};

export default GameItem;