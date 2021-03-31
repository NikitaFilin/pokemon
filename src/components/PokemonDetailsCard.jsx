import React, { useEffect, useState } from "react";
import axios from "axios";

import "./PokemonDetailsCard.css";
import { Link } from "react-router-dom";

export const PokemonDetailsCard = (...props) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    // Получаем детальную информацию по покемону
    const url = [...props][0].match.url;
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon" + url);
      setPokemonDetails(result.data);
    };
    fetchData();
  }, []);

  if (!pokemonDetails) {
    console.log("null");
    return null;
  }

  const pokemonImg = pokemonDetails.sprites.other.dream_world.front_default;

  return (
    <div>
      <div className="pokemon-details-container-wrapper">
        <div className="pokemon-details-container">
          <div className="pokemon-details-container-title">
            <p>№{pokemonDetails.order}</p>
            <h3>{pokemonDetails.name}</h3>
          </div>
          <div className="pokemon-details-container-content">
            <div className="pokemon-details-container-content-image">
              <img src={pokemonImg} alt="logo" />
            </div>
            <div className="pokemon-details-container-content-info">
              <p>Params:</p>
              <div className="pokemon-details-container-content-params">
                <div className="pokemon-details-container-content-params-param">
                  height: {pokemonDetails.height}
                </div>
                <div className="pokemon-details-container-content-params-param">
                  weight: {pokemonDetails.weight}
                </div>
                <div className="pokemon-details-container-content-params-param">
                  experience: {pokemonDetails.base_experience}
                </div>
              </div>
              <p>Stats:</p>
              <div className="pokemon-details-container-content-stats">
                {pokemonDetails.stats.map((el) => {
                  return (
                    <div className="pokemon-details-container-content-stats-stat">
                      {el.stat.name} : {el.base_stat}{" "}
                    </div>
                  );
                })}
              </div>
              <p>Ability:</p>
              <div className="pokemon-details-container-content-ability">
                {pokemonDetails.abilities.map((el) => {
                  return <div>{el.ability.name}</div>;
                })}
              </div>
              <p>Type:</p>
              <div className="pokemon-details-container-content-types">
                {pokemonDetails.types.map((el) => {
                  return <div>{el.type.name}</div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <h2>Home</h2>
      </Link>
    </div>
  );
};
