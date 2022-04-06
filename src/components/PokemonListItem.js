import { useState } from 'react';

const PokemonListItem = ({ pokemon }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  }

  return (
    <div className="pokemons__pokemon">
      <div className="pokemon__heading">
        <div className="pokemon__sprite">
          <img src={pokemon.sprites.front_default} />
        </div>
        <div className="pokemon__title">
          <div>
            <strong>{pokemon.name}</strong> of types <em>{pokemon.types.map(t => t.type.name).join(", ")}</em>
          </div>
          {showDetails && (
            <div className="pokemon__details">
              <div><strong>height:</strong> {pokemon.height}</div>
              <div><strong>weight:</strong> {pokemon.weight}</div>
            </div>
          )}
          <div>
            <button onClick={toggleShowDetails}>details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonListItem;
