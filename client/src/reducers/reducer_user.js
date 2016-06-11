import { USER_GET_ALL } from '../actions/index';

const INITIAL_STATE = { all: [], users: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_GET_ALL:
      return { ...state, users: action.payload.data };
    default:
      return state;
  }
}
