import "./PokeCard.css";
import React from "react";
import { headerSetter } from "../utils/util";

const PokeCard = ({ imgUrl, pokemonName }) => {
  return (
    <div className="poke-card-container">
      <img src={imgUrl} />
      <h3>{headerSetter(pokemonName)}</h3>
    </div>
  );
};

export default PokeCard;
