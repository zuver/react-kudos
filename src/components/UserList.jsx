import React from 'react';
import PropTypes from 'prop-types';

import UserThumbail from './UserThumbnail';

function UserList(props) {
  let users = null;

  if (props && props.users) {
    users = props.users.map((user, index) =>
      <UserThumbail
        key={index}
        userId={user.id}
        username={user.username}
        firstName={user.first_name}
        lastName={user.last_name}
        kudosGivenCount={user.kudos_given_count}
        kudosReceivedCount={user.kudos_received_count}
      />
    );
  }

  return (
    <div>
      {users}
    </div>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default UserList;
