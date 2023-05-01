import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokeNavBar from "../components/PokeNavBar";
import PokeCard from "../components/PokeCard";
import { useLoaderData } from "react-router-dom";
import "./PokePage.css";
const PokePage = () => {
  const [inputName, setInputName] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const loaderData = useLoaderData();

  const inputHandler = (e) => {
    const input = e.target.value;
    setInputName(input);
  };
  useEffect(() => {
    setPokemons(loaderData);
  }, []);

  useEffect(() => {
    const filteredPokemons = pokemons.filter((pokemon) => {
      return pokemon.pokemonName.includes(inputName);
    });
    setFilteredPokemons(filteredPokemons);
  }, [inputName, pokemons]);
  console.log(filteredPokemons);
  return (
    <Fragment>
      <PokeNavBar />
      <main>
        <input
          id="poke-input"
          placeholder="Search Pokemon..."
          autoComplete="off"
          onChange={inputHandler}
        />
        <div className="pokemon-wrapper">
          {filteredPokemons.map((pokemon, idx) => {
            return (
              <Link to={`${pokemon.pokemonName}`}>
                <PokeCard
                  key={idx}
                  imgUrl={pokemon.pokemonPhoto}
                  pokemonName={pokemon.pokemonName}
                />
              </Link>
            );
          })}
        </div>
      </main>
    </Fragment>
  );
};

export default PokePage;

export async function loader() {
  let pokemons = [];
  for (let i = 1; i <= 50; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();
    const pokeFeatures = {
      id: i,
      pokemonName: data.forms[0].name,
      pokemonPhoto: data.sprites.front_default,
    };
    pokemons = [...pokemons, pokeFeatures];
  }
  return pokemons;
}
