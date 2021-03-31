import React from "react";
import "../App.css";

export const Header = () => {
  return (
    <div className="header">
      <h2>PokeApi</h2>
      <div className="header-modal-open">
        <input placeholder="Найти"></input>
      </div>
    </div>
  );
};
