import React, { useContext } from "react";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import "./Party.css";

export const Party = () => {
  const context = useContext(PokemonDataContext);
  const { pokemonsTeam, pokemonsTeamRemove } = context;

  return (
    <div className="party_wrapper">
      <div className="party_tittle">
        <h3>Моя команда</h3>
        {pokemonsTeam.map((pokemon) => {
          return (
            <div className="party_pokemon_line" key={pokemon.id}>
              <img
                alt="logo"
                className="pokemon_image"
                src={pokemon.sprites.other.dream_world.front_default}
              ></img>
              <p>{pokemon.name}</p>
              <button
                className="pokemon_button"
                onClick={() => pokemonsTeamRemove(pokemon)}
              >
                -
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
