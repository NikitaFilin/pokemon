import React, { useEffect, useState } from "react";
import "./App.css";
import { PokemonCard } from "./components/PokemonCard";
import axios from "axios";

function App() {
  const [pokemons, setPokemon] = useState([]);
  const [pokemonInfo, setPokemonInfo] = useState([]);
  //0: {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon");
      // console.log(result);
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

  const fn = () => {
    console.log(pokemonInfo);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Header</h1>
      </div>

      <div className="container">
        {pokemonInfo.map((pokemon, index) => {
          return <PokemonCard key={index} pokemon={pokemon}></PokemonCard>;
        })}
      </div>
      {/* <ul>
        {pokemons.map((el, index) => {
          return <li key={index}>{el.name}</li>;
        })}
      </ul> */}
      {/* <p>Parent + {pokemon.name}</p> */}
      <button onClick={fn}>Клик</button>
    </div>
  );
}

export default App;
