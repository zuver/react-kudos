import { connect } from 'react-redux';

import KudosThumbnail from '../components/KudosThumbnail';

function mapStateToProps(state, ownProps) {
  let giver = null;

  if (ownProps.giverId) {
    // Find the user that gave Kudos
    giver = state.get('entities').users[ownProps.giverId];
  }

  return {
    giver,
  };
}

const mapDispatchToProps = null;

const KudosThumbnailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(KudosThumbnail);

export default KudosThumbnailContainer;
