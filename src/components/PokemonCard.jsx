import React from "react";
import "./PokemonCard.css";

export const PokemonCard = ({ pokemon }) => {
  const pokemonStats = pokemon[0];
  const pokemonImg = pokemonStats.sprites.other.dream_world.front_default;
  return (
    <div className="pokemon_card">
      <h3 className="pokemon_name">{pokemonStats.name}</h3>
      <img alt="logo" className="pokemon_image" src={pokemonImg}></img>
    </div>
  );
};
