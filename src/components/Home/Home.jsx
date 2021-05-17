import axios from "axios";
import React, { useState, useEffect } from "react";

import "../../App.css";
import { PokemonCard } from "../PokemonCard/PokemonCard";
import { PokemonFilter } from "./PokemonFilter";

export const Home = (pokemons) => {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokeTypeId, setPokeTypeId] = useState(null);

  const pokeFilter = (id) => {
    console.log("uuu", id);
    setPokeTypeId(id);
  };

  useEffect(() => {
    console.log("Первый UseState");
    const fetchData = async () => {
      setPokemonData(pokemons.pokemons);
    };
    fetchData();
  }, [pokemons]);

  useEffect(() => {
    if (pokeTypeId > 0) {
      const fetchData = async () => {
        const result = await axios(
          "https://pokeapi.co/api/v2/type/" + pokeTypeId
        );

        console.log("pokeTypeId", pokeTypeId);
        let pokeArray = [];
        result.data.pokemon.forEach((el) => {
          pokeArray.push(el.pokemon);
        });
        setPokemonData(pokeArray);
      };
      fetchData();
    } else {
      setPokemonData(pokemons.pokemons);
    }
  }, [pokeTypeId]);

  if (!pokemonData) {
    return null;
  }

  return (
    <div className="App">
      <PokemonFilter pokeFilter={pokeFilter}></PokemonFilter>

      <div className="container-wrapper-pokemonCard ">
        {pokemonData.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon}></PokemonCard>;
        })}
      </div>
    </div>
  );
};
