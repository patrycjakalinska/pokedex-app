const PokemonListItem = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.name} of height {pokemon.height}</p>
    </div>
  );
};

export default PokemonListItem;
