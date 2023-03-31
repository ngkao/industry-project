import React from "react";
import "./BetGuide.scss"
function BetGuide({ title, subtitle, children, info }) {
    return (
        <div className="bet-guide">
            <h2 className="bet-guide__page-subtitle">{subtitle}</h2>
            <h1 className="bet-guide__title">{title}</h1>
            <div className="bet-guide__content">{children}</div>
            <p className="bet-guide__info">{info}</p>
        </div>
    );
}

export default BetGuide;
