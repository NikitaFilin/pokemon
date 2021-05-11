import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src="pikachu_icon.svg"
          // src="pokeball.png"
          alt="PokéAPI"
        />
      </Link>

      <div className="header-modal-open">
        <input placeholder="Найти"></input>
      </div>
    </div>
  );
};
