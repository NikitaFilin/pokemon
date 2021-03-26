import React, { useEffect, useState } from "react";

import "../App.css";
import axios from "axios";

import { PokemonCard } from "./PokemonCard";
import { Modal } from "./Modal";

export const Home = () => {
  const [pokemons, setPokemon] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon");
      //"https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
      setPokemon(result.data.results);
    };
    fetchData();
  }, []);

  useEffect(() => {
    pokemons.forEach((el) => {
      let url = el.url;
      const fetchData = async () => {
        const result = await axios(url);
        let newPokemon = [...pokemonInfo, result.data];
        setPokemonInfo((pokemonInfo) => [...pokemonInfo, newPokemon]);
      };
      fetchData();
    });
  }, [pokemons]);

  const modalStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>PokeApi</h2>
        <div className="header-modal-open" onClick={modalStatus}>
          Поиск &#128269;
        </div>
      </div>
      {isOpen ? (
        <Modal pokemons={pokemonInfo} modalStatus={modalStatus} />
      ) : null}

      <div className="container">
        {pokemonInfo.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon}></PokemonCard>;
        })}
      </div>
    </div>
  );
};
