import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import usersReducer from './reducer_users';
import userReducer from './reducer_user';

const rootReducer = combineReducers({
  usersReducer: usersReducer,
  userReducer: userReducer,
  form: formReducer
});

export default rootReducer;
