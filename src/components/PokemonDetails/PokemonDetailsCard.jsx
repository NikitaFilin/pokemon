import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./PokemonDetailsCard.css";
import { PokemonDetailsType } from "./PokemonDetailsType";

import { PokemonDataContext } from "../../Context/PokemonDataContext";

export const PokemonDetailsCard = (...props) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    // Получаем детальную информацию по покемону
    const url = [...props][0].match.url;
    console.log(url);
    const fetchData = async () => {
      const result = await axios("https://pokeapi.co/api/v2/pokemon" + url);
      setPokemonDetails(result.data);
    };
    fetchData();
  }, []);

  const context = useContext(PokemonDataContext);

  if (!pokemonDetails) {
    return null;
  }

  let pokemonImg = pokemonDetails.sprites.other.dream_world.front_default;

  if (pokemonImg == null) {
    pokemonImg = pokemonDetails.sprites.other["official-artwork"].front_default;
  }

  return (
    <div>
      <div className="pokemon-details-container-wrapper-card">
        <div className="pokemon-details-container-wrapper">
          <Link to={`/${pokemonDetails.id - 1}`}>
            <img
              className="pokemon-details-container-button-arrow"
              src="arrow-left.png"
              alt="PokéBack"
            />
          </Link>

          <div className="pokemon-details-container">
            <div className="pokemon-details-container-title">
              <p>№{pokemonDetails.id}</p>
              <h2>{pokemonDetails.name}</h2>
              <Link to="/">
                <button className="pokemon-details-container-title-button">
                  X
                </button>
              </Link>
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
                  {pokemonDetails.stats.map((el, index) => {
                    return (
                      <div
                        key={index}
                        className="pokemon-details-container-content-stats-stat"
                      >
                        {el.stat.name} : {el.base_stat}{" "}
                      </div>
                    );
                  })}
                </div>
                <p>Ability:</p>
                <div className="pokemon-details-container-content-ability">
                  {pokemonDetails.abilities.map((el, index) => {
                    return <div key={index}>{el.ability.name}</div>;
                  })}
                </div>
                <p>Type:</p>
                <div className="pokemon-details-container-content-types">
                  {pokemonDetails.types.map((el, index) => {
                    return (
                      <PokemonDetailsType key={index} type={el.type.name} />
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <button
                className="pokemon-details-container-addButton"
                onClick={() => context.pokemonsTeamAdd(pokemonDetails)}
              >
                Хвать в команду
              </button>
            </div>
          </div>
          <Link to={`/${pokemonDetails.id + 1}`}>
            <img
              className="pokemon-details-container-button-arrow"
              src="arrow-right.png"
              alt="PokéForward"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
