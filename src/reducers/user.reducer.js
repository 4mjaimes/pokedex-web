import { SET_INFO } from '../types/user.types';

const INITIAL_STATE = {
  userInfo: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };
    default:
      return state;
  }
};
