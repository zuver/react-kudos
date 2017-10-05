import { LOAD_USERS } from '../actions/entities';

const defaultState = {
  users: [],
};

const entities = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return Object.assign({}, state, { users: action.users });
    default:
      return state;
  }
};

export default entities;
