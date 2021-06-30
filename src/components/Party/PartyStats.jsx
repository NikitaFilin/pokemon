import React from "react";

export const PartyStats = ({ power, defense, health }) => {
  return (
    <div className="party_team_stats_wrapper">
      <div className="party_team_stats">
        <span>Атака команды:</span>
        <span> {power}</span>
      </div>
      <div className="party_team_stats">
        <span>Защита команды:</span>
        <span> {defense}</span>
      </div>
      <div className="party_team_stats">
        <span>Здоровье команды:</span>
        <span> {health}</span>
      </div>
    </div>
  );
};
