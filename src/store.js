import { createStore } from 'redux';
import Immutable from 'immutable';
import rootreducer from './reducers';

const state = Immutable.fromJS({});

const initialState = rootreducer(state, {
  type: 'CONSTRUCT',
});

/* eslint-disable no-underscore-dangle */
export default createStore(rootreducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */
