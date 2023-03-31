import React from "react";
import "./BetGuide.scss";

function BetGuide({ title, subtitle, children, info, subInfo }) {
  return (
    <div className="bet-guide">
      {subtitle && (
        <h2 className="bet-guide__page-subtitle">{subtitle}</h2>
      )}
      {title && <h1 className="bet-guide__title">{title}</h1>}
      {children && (
        <div className="bet-guide__content">{children}</div>
      )}
      {info && <p className="bet-guide__info">{info}</p>}
      {subInfo && <p className="bet-guide__sub-info">{subInfo}</p>}
    </div>
  );
}

export default BetGuide;
