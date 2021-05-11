import React, { useEffect, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import axios from "axios";

import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import { PokemonDetailsCard } from "./components/PokemonDetails/PokemonDetailsCard";

function App() {
  const [pokemons, setPokemon] = useState([]); // Array [20] {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"}

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
      <Header />
      <Route exact path="/" render={() => <Home pokemons={pokemons} />}></Route>
      <Route
        path="/:id"
        render={(props) => (
          <PokemonDetailsCard key={props.location.key} {...props} />
        )}
      ></Route>
    </BrowserRouter>
  );
}
export default App;
