import { connect } from 'react-redux';

import { loadCurrentUser } from '../actions/currentUser';
import { loadUsers } from '../actions/entities';

import App from '../components/App';

function mapStateToProps(state) {
  const currentUser = state.get('currentUser');

  return {
    currentUser,
  };
}

const mapDispatchToProps = dispatch => ({
  onLoadCurrentUser: (currentUser) => {
    dispatch(loadCurrentUser(currentUser));
  },
  onLoadUsers: (users) => {
    dispatch(loadUsers(users));
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
