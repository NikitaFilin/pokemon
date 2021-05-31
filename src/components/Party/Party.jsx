import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Party.css";

export const Party = () => {
  // const [pokemons, setPokemons] = useState([]);
  // const [pokemonDetails, setPokemonDetails] = useState(null);
  // const [values, setValues] = useState([]);

  // const allStorage = () => {
  //   console.log("Запусук");
  //   setValues(Object.keys(localStorage));
  // };

  // useEffect(() => {
  //   allStorage();

  //   console.log(values);

  //   for (let i = 0; i < values.length; i++) {
  //     let pokemon = localStorage.getItem(i);
  //     console.log(pokemon);
  //     setPokemons([...pokemons, pokemon]);
  //   }
  //   console.log(pokemons);
  // }, [pokemons]);

  return (
    <div className="party_wrapper">
      <div className="party_tittle">
        <h3>Моя команда</h3>
        {/* {pokemons ? ( */}
        <div className="party_pokemon_line">
          {" "}
          <img
            alt="logo"
            className="pokemon_image"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          ></img>{" "}
          <p>bulbasaur</p>
        </div>
        {/* ) : null} */}
      </div>
    </div>
  );
};
