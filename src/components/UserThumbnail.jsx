import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

function UserThumbnail(props) {
  const userInfoContainer = {
    display: 'flex',
  };

  return (
    <div className="well">
      <div style={userInfoContainer}>
        <div style={{ flex: 2 }}>
          <h2>{props.firstName} {props.lastName}</h2>
          <div className="secondary-label">{props.username}</div>
        </div>
        <div className="kudos-link" style={{ flex: 1 }}>
          <Link to={`/users/${props.userId}/kudos`}>
            <h2>
              <span className="icon-container"><FontAwesome name="star" /></span>
              {props.kudosReceivedCount || 0}
            </h2> Kudos received
          </Link>
        </div>
        <div style={{ flex: 1 }}>
          <h2>
            <span className="icon-container"><FontAwesome name="paper-plane" /></span>
            {props.kudosGivenCount || 0}
          </h2> Kudos given
        </div>
      </div>
    </div>
  );
}

UserThumbnail.propTypes = {
  userId: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  kudosGivenCount: PropTypes.number,
  kudosReceivedCount: PropTypes.number,
};

export default UserThumbnail;
