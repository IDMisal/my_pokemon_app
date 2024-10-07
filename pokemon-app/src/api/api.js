import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemons = (offset = 0, limit = 20) => {
  return axios.get(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
};

export const getPokemonDetail = (id) => {
  return axios.get(`${BASE_URL}/pokemon/${id}`);
};