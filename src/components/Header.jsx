import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="pikachu_icon.svg" alt="PokéAPI" />
      </Link>

      <div className="header-modal-open">
        <span>my Team</span>
        <Link to="/">
          <img src="pokemon_team.svg" alt="PokéTeam" />
        </Link>
      </div>
    </div>
  );
};
