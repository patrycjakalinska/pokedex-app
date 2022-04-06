import { BASE_API_URL } from "../config";
import axios from 'axios';

const getPokemons = async (offset, limit) => {
  const { data } = await axios.get(
    `${BASE_API_URL}/pokemon?offset=${offset}&limit=${limit}`
  );

  const pokemons = await Promise.all(data.results.map(p => getPokemonDetails(p.name)));

  return pokemons;
}

const getPokemonDetails = async (name) => {
  const { data } = await axios.get(`${BASE_API_URL}/pokemon/${name}`);

  return data;
};

export default { getPokemons };