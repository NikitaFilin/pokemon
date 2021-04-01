import React from "react";
import "./PokemonDetailsType.css";

export const PokemonDetailsType = ({ type }) => {
  return (
    <div>
      {(() => {
        switch (type) {
          case "fire":
            return (
              <div className="pokemon-details-type-fire">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "grass":
            return (
              <div className="pokemon-details-type-grass">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "poison":
            return (
              <div className="pokemon-details-type-poison">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "flying":
            return (
              <div className="pokemon-details-type-flying">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "water":
            return (
              <div className="pokemon-details-type-water">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "bug":
            return (
              <div className="pokemon-details-type-bug">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "electric":
            return (
              <div className="pokemon-details-type-electric">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "normal":
            return (
              <div className="pokemon-details-type-normal">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "psychic":
            return (
              <div className="pokemon-details-type-psychic">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "fairy":
            return (
              <div className="pokemon-details-type-fairy">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "dark":
            return (
              <div className="pokemon-details-type-dark">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "dragon":
            return (
              <div className="pokemon-details-type-dragon">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "ice":
            return (
              <div className="pokemon-details-type-ice">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "steel":
            return (
              <div className="pokemon-details-type-steel">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "ghost":
            return (
              <div className="pokemon-details-type-ghost">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "rock":
            return (
              <div className="pokemon-details-type-rock">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "ground":
            return (
              <div className="pokemon-details-type-ground">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          case "fighting":
            return (
              <div className="pokemon-details-type-ground">
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
          default:
            return (
              <div>
                <div className="pokemon-details-container-content-types-type">
                  {type}
                </div>
              </div>
            );
        }
      })()}
    </div>
  );
};
