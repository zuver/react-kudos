import { connect } from 'react-redux';

import KudosForm from '../components/KudosForm';

function mapStateToProps(state) {
  let users = state.get('entities').users;
  const currentUserId = state.get('currentUser').id;

  // Denormalize the data
  users = Object.values(users);

  return {
    users,
    kudosGiverId: currentUserId,
  };
}

const mapDispatchToProps = null;

const KudosFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KudosForm);

export default KudosFormContainer;
