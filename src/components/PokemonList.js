import { useEffect, useState } from "react";
import PokemonListItem from "./PokemonListItem";
import pokemonService from "../services/pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, _setLimit] = useState(20);
  const [offset, setOffset] = useState(0);


  const fetchData = async () => {
    const pokemonsFromAPI = await pokemonService.getPokemons(offset, limit);

    setPokemons([...pokemons, ...pokemonsFromAPI]);
    setOffset(offset + limit);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Pokemon List</h2>
      {pokemons.map((p) => (
        <PokemonListItem key={p.name} pokemon={p} />
      ))}
    </div>
  );
};

export default PokemonList;
