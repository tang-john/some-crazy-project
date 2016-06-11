import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './reducer_user';

const rootReducer = combineReducers({
  userReducer: userReducer,
  form: formReducer
});

export default rootReducer;
