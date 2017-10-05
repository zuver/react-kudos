import { combineReducers } from 'redux-immutablejs';

// Reducers
import entities from './entities';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  entities,
  currentUser,
});

export default rootReducer;
