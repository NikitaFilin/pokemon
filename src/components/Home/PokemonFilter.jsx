import React, { useState } from "react";

export const PokemonFilter = ({ pokeFilter }) => {
  const pokeType = [
    "All",
    "Normal",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy",
  ];
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="container-wrapper-nav-button">
        {isActive ? (
          <button
            className="container-wrapper-nav-button-button"
            onClick={() => setIsActive(!isActive)}
          >
            Скрыть фильтры
          </button>
        ) : (
          <button
            className="container-wrapper-nav-button-button"
            onClick={() => setIsActive(!isActive)}
          >
            Фильтровать по типу
          </button>
        )}
      </div>

      {isActive ? (
        <div className="container-wrapper-nav">
          {pokeType.map((type, index) => {
            return (
              <div
                className="container-wrapper-nav-box"
                key={index}
                onClick={() => pokeFilter(index)}
              >
                {type}
              </div>
            );
          })}
        </div>
      ) : null}
    </>
  );
};
