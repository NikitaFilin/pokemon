import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

import "./PokemonCard.css";

// import { PokemonDetails } from "./PokemonDetails";
// import { Home } from "./Home";
// import { Error } from "./Error";
import axios from "axios";

export const PokemonCard = ({ pokemon, setSelectedPokemon }) => {
  console.log(pokemon);
  // const [pokemonInfo, setPokemonInfo] = useState(null);
  // let { path, url } = useRouteMatch();
  // const pokemonStats = pokemon[0];
  // const pokemonImg = pokemonStats.sprites.other.dream_world.front_default;

  // useEffect(() => {
  //   console.log("Я получил", pokemon);
  //   let { url } = pokemon;
  //   console.log("url", url);

  //   const fetchData = async () => {
  //     const result = await axios(url);
  //     console.log("result", result.data);

  //     setPokemonInfo(result.data);
  //   };
  //   fetchData();
  // }, []);

  if (!pokemon) {
    console.log("null");
    return null;
  }

  // const {
  //   id,
  //   name,
  //   sprites: {
  //     other: {
  //       dream_world: { front_default: pokemonImg },
  //     },
  //   },
  // } = pokemonInfo;
  const { name } = pokemon;
  const { id } = pokemon;
  const pokemonImg = pokemon.sprites.other.dream_world.front_default;

  console.log("url", pokemonImg);
  return (
    <Router>
      <div className="pokemon_card">
        {/* onClick={() => setSelectedPokemon(pokemonInfo)} */}
        <Link to={`/${id}`}>
          <h3 className="pokemon_name">{name}</h3>
          <img alt="logo" className="pokemon_image" src={pokemonImg}></img>
        </Link>
      </div>
    </Router>
  );
};
