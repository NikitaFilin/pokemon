import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h2>PokeApi</h2>
      </Link>
      <div className="header-modal-open">
        <input placeholder="Найти"></input>
      </div>
    </div>
  );
};
