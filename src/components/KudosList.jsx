import React from 'react';
import PropTypes from 'prop-types';

import KudosThumbnail from './KudosThumbnail';

class KudosList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.fetchKudos = this.fetchKudos.bind(this);
  }

  componentWillMount() {
    if (this.props.user && !this.state.kudos) {
      this.fetchKudos(this.props.user.id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && !this.state.kudos) {
      this.fetchKudos(nextProps.user.id);
    }
  }

  fetchKudos(userId) {
    fetch(`/api/users/${userId}/kudos`) // eslint-disable-line
        .then(response => response.json())
        .then((data) => {
          this.setState({ kudos: data });
        });
  }

  render() {
    let kudos = null;

    if (this.state && this.state.kudos) {
      kudos = this.state.kudos.map(kudo =>
        <KudosThumbnail
          key={kudo.id}
          kudosText={kudo.text}
          timeCreated={kudo.created_at}
        />
      );
    }

    return (
      <div>
        {this.props.user ? <h2 className="heading">{this.props.user.first_name}&apos;s Kudos</h2> :
        <h2 className="heading">No user</h2>}
        {kudos}
      </div>
    );
  }
}

KudosList.propTypes = {
  user: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default KudosList;
