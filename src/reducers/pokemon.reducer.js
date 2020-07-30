import { GET_POKEMONS } from '../types/pokemon.types';

const INITIAL_STATE = {
  list: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        list: { ...state.list, ...action.payload },
      };
    default:
      return state;
  }
};
