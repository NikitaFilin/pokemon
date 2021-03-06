import React, { useEffect, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import { PokemonDetailsCard } from "./components/PokemonDetails/PokemonDetailsCard";
import { PokemonDataContext } from "./Context/PokemonDataContext";

function App() {
  const [pokemons, setPokemon] = useState([]); // Array [20] {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}
  const [pokemonsTeam, setPokemonsTeam] = useState([]);

  const pokemonsTeamAdd = (pokemon) => {
    // Проверяем нет ли такого покемона в команде
    let pokemonArrId = [];
    pokemonsTeam.forEach((pokemon) => {
      pokemonArrId.push(pokemon.id);
    });
    if (!pokemonArrId.includes(pokemon.id)) {
      setPokemonsTeam([...pokemonsTeam, pokemon]);
    }
    console.log("pokemonArrId", pokemonArrId, "и", pokemon.id);
    console.log("pokemonsTeam", pokemonsTeam);
  };

  const pokemonsTeamRemove = (pokemon) => {
    setPokemonsTeam(pokemonsTeam.filter((el) => el.id !== pokemon.id));
  };
  const value = {
    // передаём в компоненты
    pokemonsTeam,
    pokemonsTeamAdd,
    pokemonsTeamRemove,
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon");
      //"https://pokeapi.co/api/v2/pokemon?limit=100&offset=200"
      setPokemon(result.data.results);
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <PokemonDataContext.Provider value={value}>
        <Header />
        <Route
          exact
          path="/"
          render={() => <Home pokemons={pokemons} />}
        ></Route>
        <Route
          path="/:id"
          render={(props) => (
            <PokemonDetailsCard key={props.location.key} {...props} />
          )}
        ></Route>
      </PokemonDataContext.Provider>
    </BrowserRouter>
  );
}
export default App;
