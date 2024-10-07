import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching the Pokemon data", error);
      }
    };
    fetchPokemon();
  }, [id]);

  
  const goToHomePage = () => {
    navigate('/'); 
  };

  return (
    <div className="pokemon-detail">
      {pokemon ? (
        <>
          <button className="home-button" onClick={goToHomePage}>Home</button>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="abilities">
            <h3>Abilities:</h3>
            {pokemon.abilities.map(ability => (
              <span className="ability" key={ability.ability.name}>{ability.ability.name}</span>
            ))}
          </div>
          <div className="stats">
            <h3>Base Stats:</h3>
            {pokemon.stats.map(stat => (
              <div className="stat" key={stat.stat.name}>
                <strong>{stat.stat.name}:</strong> {stat.base_stat}
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DetailPage;
