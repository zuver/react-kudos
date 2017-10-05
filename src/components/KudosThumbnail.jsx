import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';

function KudosThumbnail(props) {
  return (
    <div className="well">
      <div style={{ display: 'flex' }}>
        <h2 className="icon-container"><FontAwesome name="star" /></h2>
        <div className="center-vertically">
          <div>{props.kudosText}</div>
          <div className="secondary-label">
            {props.giver &&
            <Link to={`/users/${props.giverId}/kudos`}>{props.giver.first_name} {props.giver.last_name}</Link>
            } • <TimeAgo date={props.timeCreated} />
          </div>
        </div>
      </div>
    </div>
  );
}

KudosThumbnail.propTypes = {
  kudosText: PropTypes.string,
  timeCreated: PropTypes.string.isRequired,
  giverId: PropTypes.number, // eslint-disable-line react/no-unused-prop-types
  giver: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default KudosThumbnail;
