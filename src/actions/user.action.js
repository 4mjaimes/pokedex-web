import axios from 'axios';
import { LOCAL_API } from '../config/consts';
import { SET_INFO } from '../types/user.types';

export const savePokemonTrainer = (data, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${LOCAL_API}/pokemontrainer/create`, data);
    history.push('/pokedex');
    dispatch({ type: SET_INFO, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const editPokemonTrainer = (data, history) => async (dispatch) => {
  try {
    const response = await axios.post(`${LOCAL_API}/pokemontrainer/update`, data);
    history.push('/pokedex');
    dispatch({ type: SET_INFO, payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
