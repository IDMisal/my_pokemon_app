import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  // Check if pokemon.url exists before accessing it
  const id = pokemon.url ? pokemon.url.split('/')[pokemon.url.split('/').length - 2] : null;

//   if (!id) {
//     return <div className="pokemon-card">Invalid Pokémon Data</div>;
//   }

  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${id}`}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
        <p>#{id}</p>
      </Link>
    </div>
  );
};

export default PokemonCard;
