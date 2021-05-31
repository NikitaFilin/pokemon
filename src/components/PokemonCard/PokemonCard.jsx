import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "./PokemonCard.css";

export const PokemonCard = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    // Получаем детальную информацию по покемону для Id и Image
    let { url } = pokemon;
    const fetchData = async () => {
      const result = await axios(url);
      setPokemonDetails(result.data);
    };
    fetchData();
  }, [pokemon]);

  if (!pokemonDetails) {
    return null;
  }

  const { name } = pokemon;
  const { id } = pokemonDetails;
  let pokemonImg = pokemonDetails.sprites.other.dream_world.front_default; // sprites.other["official-artwork"].front_default;

  if (pokemonImg == null) {
    pokemonImg = pokemonDetails.sprites.other["official-artwork"].front_default;
  }

  return (
    <div className="pokemon_card">
      <Link to={`/${id}`}>
        <div className="pokemon_card_content">
          <h3 className="pokemon_name">{name}</h3>
          {pokemonImg !== null ? (
            <img alt="logo" className="pokemon_image" src={pokemonImg}></img>
          ) : (
            <div className="pokemon_image_null">
              Мы никогда не видели этого покемона &#129323;
            </div>
          )}
        </div>
      </Link>
      <button
        className="pokemon_card_add-button"
        onClick={() => localStorage.setItem(id, id)}
      >
        Поймать
      </button>
    </div>
  );
};
