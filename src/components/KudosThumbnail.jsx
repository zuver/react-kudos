import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import TimeAgo from 'react-timeago';

function KudosThumbnail(props) {
  const kudoContainer = {
    display: 'flex',
  };

  return (
    <div className="well">
      <div style={kudoContainer}>
        <h2 className="icon-container"><FontAwesome name="star" /></h2>
        <div className="center-vertically">
          <div>{props.kudosText}</div>
          <div className="secondary-label">
            {props.giver && `From ${props.giver.first_name} ${props.giver.last_name}`}
            <TimeAgo date={props.timeCreated} />
          </div>
        </div>
      </div>
    </div>
  );
}

KudosThumbnail.propTypes = {
  kudosText: PropTypes.string,
  timeCreated: PropTypes.string.isRequired,
  giver: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default KudosThumbnail;
