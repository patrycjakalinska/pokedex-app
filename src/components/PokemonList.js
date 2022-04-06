import { useEffect, useState } from "react";
import PokemonListItem from "./PokemonListItem";
import pokemonService from "../services/pokemon";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, _setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [allFetched, setAllFetched] = useState(false);


  const fetchData = async () => {
    const pokemonsFromAPI = await pokemonService.getPokemons(offset, limit);

    setPokemons([...pokemons, ...pokemonsFromAPI]);
    setOffset(offset + limit);

    if (pokemonsFromAPI.length < limit) {
      setAllFetched(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h2>Pokemon List</h2>
      <div>
        {pokemons.map((p) => (
          <PokemonListItem key={p.name} pokemon={p} />
        ))}
      </div>
      <button disabled={allFetched} onClick={fetchData}>
        {allFetched ? "all fetched" : "fetch more"}
      </button>
    </div>
  );
};

export default PokemonList;
