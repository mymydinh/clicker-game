import React from "react";
import "./style.css";

function Header(props) {
  return (
      <div className="header-container">
        <h1 className="display-2 title">Memory Game</h1>
        <h3 className="score">Score: {props.score} || Highest Score: {props.highestScore}</h3> <br /><br />
        <h3 className="message">{props.message}</h3>
        <h3 className="message">{props.newMessage}</h3>
      </div>
  )
}

export default Header;