import { connect } from 'react-redux';

import UserList from '../components/UserList';

function mapStateToProps(state) {
  let users = state.get('entities').users;

  // Denormalize the data
  users = Object.values(users);

  return {
    users,
  };
}

const mapDispatchToProps = null;

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);

export default UserListContainer;
