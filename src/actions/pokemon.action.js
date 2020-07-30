import axios from 'axios';
import { POKE_API } from '../config/consts';
import { GET_POKEMONS } from '../types/pokemon.types';

export const getPokemon = (id) => async (dispatch) => {
  try {
    const pokemonData = {};
    const response = await axios.get(`${POKE_API}/pokemon/${id}`);
    const { data } = response;
    pokemonData[data.id] = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      species: data.species,
      sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
      types: data.types,
      sprites: data.sprites,
      moves: data.moves,
    };
    dispatch({ type: GET_POKEMONS, payload: pokemonData });
  } catch (error) {
    console.error(error);
  }
};

export const getPokemons = () => async (dispatch) => {
  try {
    const pokemonData = {};
    const promises = [];
    const pokeList = await axios.get(`${POKE_API}/pokemon?limit=50`);
    pokeList.data.results.forEach((pkmn) => promises.push(axios.get(pkmn.url)));
    await axios.all(promises)
      .then(axios.spread((...args) => {
        args.forEach((pkmn) => {
          const { data } = pkmn;
          pokemonData[data.id] = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            species: data.species,
            sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
            types: data.types,
            sprites: data.sprites,
            moves: data.moves,
          };
        });
      }));
    dispatch({ type: GET_POKEMONS, payload: pokemonData });
  } catch (error) {
    console.error(error);
  }
};
