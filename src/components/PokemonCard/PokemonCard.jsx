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

  // console.log(pokemonDetails);

  const { name } = pokemon;
  const { id } = pokemonDetails;
  const pokemonImg = pokemonDetails.sprites.other.dream_world.front_default;

  return (
    <div className="pokemon_card">
      <Link to={`/${id}`}>
        <h3 className="pokemon_name">{name}</h3>
        <img alt="logo" className="pokemon_image" src={pokemonImg}></img>
      </Link>
      <button className="pokemon_card_add-button">Поймать</button>
    </div>
  );
};
