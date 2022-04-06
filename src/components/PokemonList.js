import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_API_URL } from "../config";
import PokemonListItem from "./PokemonListItem";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, _setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const getPokemonDetails = async ({ url }) => {
    const { data } = await axios.get(url);
    return data;
  };

  const fetchData = async () => {
    // data.results of type [{ name: string, url: string }]
    const { data } = await axios.get(
      `${BASE_API_URL}/pokemon?offset=${offset}&limit=${limit}`
    );

    const pokemonsWithDetails = await Promise.all(data.results.map(p => getPokemonDetails(p)));

    const newPokemons = [
      ...pokemons,
      ...pokemonsWithDetails
    ];
    setPokemons(newPokemons);

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
