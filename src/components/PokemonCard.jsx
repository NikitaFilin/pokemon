import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./PokemonCard.css";

import { PokemonDetails } from "./PokemonDetails";
import { Home } from "./Home";
import { Error } from "./Error";

export const PokemonCard = ({ pokemon }) => {
  console.log("!!!", pokemon);
  const pokemonStats = pokemon[0];
  const pokemonImg = pokemonStats.sprites.other.dream_world.front_default;
  return (
    <Router>
      <div className="pokemon_card">
        <a href={pokemonStats.id}>
          <h3 className="pokemon_name">{pokemonStats.name}</h3>
          <img alt="logo" className="pokemon_image" src={pokemonImg}></img>
        </a>
      </div>
      <Switch>
        <Route
          exact
          path="/:id"
          // render={(props) => <PokemonDetails {...props} data={pokemonStats} />}
        />
        <Route exact path="/" component={Home} />
        <Route exact component={Error} />
      </Switch>
    </Router>
  );
};
