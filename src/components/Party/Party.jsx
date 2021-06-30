import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PokemonDataContext } from "../../Context/PokemonDataContext";
import "./Party.css";
import { PartyStats } from "./PartyStats";

export const Party = () => {
  const context = useContext(PokemonDataContext);
  const { pokemonsTeam, pokemonsTeamRemove } = context;

  const [power, setPower] = useState(0),
    [defense, setDefense] = useState(0),
    [health, setHealth] = useState(0);

  useEffect(() => {
    let pokePower = [],
      pokeDefense = [],
      pokeHealth = [];

    pokemonsTeam.forEach((el) => {
      pokePower.push(el.stats[1].base_stat);
      pokeDefense.push(el.stats[2].base_stat);
      pokeHealth.push(el.stats[0].base_stat);
    });
    setPower(pokePower.reduce((acc, el) => (acc += el), 0));
    setDefense(pokeDefense.reduce((acc, el) => (acc += el), 0));
    setHealth(pokeHealth.reduce((acc, el) => (acc += el), 0));
  }, [pokemonsTeam]);

  return (
    <div className="party_wrapper">
      <div className="party_tittle">
        <h3>Моя команда</h3>
        {pokemonsTeam.length > 0 ? (
          pokemonsTeam.map((pokemon) => {
            return (
              <div className="party_pokemon_line" key={pokemon.id}>
                <Link to={`/${pokemon.id}`}>
                  <img
                    alt="logo"
                    className="pokemon_image"
                    src={pokemon.sprites.other.dream_world.front_default}
                  ></img>
                </Link>
                <p>{pokemon.name}</p>
                <button
                  className="pokemon_button"
                  onClick={() => pokemonsTeamRemove(pokemon)}
                >
                  -
                </button>
              </div>
            );
          })
        ) : (
          <p className="party_pokemon_line">Вы еще ни кого не поймали</p>
        )}
      </div>
      {pokemonsTeam.length > 0 ? (
        <PartyStats power={power} defense={defense} health={health} />
      ) : null}
    </div>
  );
};
