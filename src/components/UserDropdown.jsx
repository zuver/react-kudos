import React from 'react';
import PropTypes from 'prop-types';

function UserDropdown(props) {
  let users = null;

  if (props.users) {
    users = props.users.map(user =>
      <option value={user.id} key={user.id}>{`${user.first_name} ${user.last_name}`}</option>
    );
  }

  return (
    <select onChange={props.onChangeUser}>
      {props.placeholder && <option value="" key="0">{props.placeholder}</option>}
      {users}
    </select>
  );
}

UserDropdown.propTypes = {
  placeholder: PropTypes.string,
  users: PropTypes.arrayOf(PropTypes.object),
  onChangeUser: PropTypes.func.isRequired,
};

export default UserDropdown;
