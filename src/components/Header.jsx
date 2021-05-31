import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { Party } from "./Party/Party";

export const Header = () => {
  const [partyActive, setPartyActive] = useState(false);

  const partyVisible = () => {
    setPartyActive(!partyActive);
  };
  return (
    <div className="header">
      <div>
        {
          <Link to="/">
            <img src="pikachu_icon.svg" alt="PokéAPI" />
          </Link>
        }
        <span>(Home)</span>
      </div>

      <div className="header-modal-open">
        <span>(my Team)</span>
        <img src="pokemon_team.svg" alt="PokéTeam" onClick={partyVisible} />
        {partyActive ? <Party /> : null}

        {/* <Link to="/">
          <img src="pokemon_team.svg" alt="PokéTeam" />
        </Link> */}
      </div>
    </div>
  );
};
