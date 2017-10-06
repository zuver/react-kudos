import { LOAD_CURRENT_USER } from '../actions/currentUser';

// Current user is hard-coded for now
// In a real app, the user would be required to sign in
// Here, we sign-in user 1
const defaultState = {
  id: 1,
};

const currentUser = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CURRENT_USER:
      return Object.assign({}, state, action.currentUser);
    default:
      return state;
  }
};

export default currentUser;
