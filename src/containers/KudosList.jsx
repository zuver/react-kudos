import { connect } from 'react-redux';

import KudosList from '../components/KudosList';

function mapStateToProps(state, ownProps) {
  const userId = ownProps.match.params.userId || state.get('currentUser').id;
  const user = state.get('entities').users[userId];

  return {
    user,
  };
}

const mapDispatchToProps = null;

const KudosListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KudosList);

export default KudosListContainer;
