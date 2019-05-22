import { combineReducers } from 'redux';

// IMPORT REDUCERS HERE
import userReducer from '../reducers/user';
import authReducer from '../reducers/auth';

let rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer
});

export default rootReducer;
