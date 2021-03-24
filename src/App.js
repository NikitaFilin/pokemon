import React, { useEffect, useState } from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";
import axios from "axios";
import { Modal } from "./components/Modal";

function App() {
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
        <Modal pokemonInfo={pokemonInfo} modalStatus={modalStatus} />
      ) : null}

      <button onClick={modalStatus}>Клик</button>

      <div className="container">
        {pokemonInfo.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon}></PokemonCard>;
        })}
      </div>
    </div>
  );
}

export default App;
