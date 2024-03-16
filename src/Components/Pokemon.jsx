import React, { useEffect, useState } from "react";
import "../Styles/Pokemon.css";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllPokemons();
  }, []);

  const getAllPokemons = async () => {
    try {
      setLoading(true);
      const arr = [];
      for (let i = 1; i <= 20; i++) {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await result.json();
        const pokemon = {
          name: data.name,
          image: data.sprites["front_default"],
          type: data.types.map((type) => type.type.name).join(", "),
          id: data.id,
        };
        arr.push(pokemon);
      }
      setPokemons(arr);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <span>Loading</span>
      ) : (
        <div className="pokemons-list">
          {pokemons.map((pokemon) => (
            <div className="pokemon" key={pokemon.name}>
              <img alt="pokemons" src={pokemon.image} />
              <div key={pokemon.name}>{pokemon.name}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pokemon;
