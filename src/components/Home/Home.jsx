import React, { useState, useEffect } from "react";

import "../../App.css";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const Home = (pokemons) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setPokemonData(pokemons.pokemons);
    };
    fetchData();
  }, [pokemons]);

  if (!pokemonData) {
    return null;
  }

  return (
    <div className="App">
      <div className="container">
        {pokemonData.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon}></PokemonCard>;
        })}
      </div>
    </div>
  );
};
