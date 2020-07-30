import { combineReducers } from 'redux';
import user from './user.reducer';
import pokemon from './pokemon.reducer';

export default combineReducers(
  {
    user,
    pokemon,
  },
);
