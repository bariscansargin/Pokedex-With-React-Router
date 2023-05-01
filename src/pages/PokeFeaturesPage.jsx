import React from "react";
import { useParams } from "react-router-dom";
import { Link, useLoaderData } from "react-router-dom";
import "./PokeFeaturesPage.css";
import { headerSetter } from "../utils/util";
const PokeFeaturesPage = () => {
  const params = useParams();
  const data = useLoaderData();

  return (
    <main>
      <Link to={"/"} className="back-button">
        See All Pokemons
      </Link>
      <div className="special-poke-wrapper">
        <div className="img-wrapper">
          <img src={data.sprites.front_default} id="poke-img" />
        </div>

        <h1> Pokemon Name = {headerSetter(data.species.name)}</h1>
      </div>
      <Link
        to={`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`}
        className="back-button"
      >
        See Api Page
      </Link>
    </main>
  );
};

export default PokeFeaturesPage;

export const loader = async ({ req, params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`
  );
  const data = await response.json();
  return data;
};
