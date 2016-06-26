import { USER_SAVE } from '../actions/index';

const INITIAL_STATE = { all: [], user: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case USER_SAVE:
      return { ...state, user: action.payload.data };
    default:
      return state;
  }
}
