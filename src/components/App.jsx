import React from 'react';
import PropTypes from 'prop-types';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { normalize } from 'normalizr';

// Schemas for normalizr
import Schemas from '../schemas';

// Components
import KudosFormContainer from '../containers/KudosForm';
import KudosListContainer from '../containers/KudosList';
import UserListContainer from '../containers/UserList';

class App extends React.Component {
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // Fetch users from API
    fetch('/api/users')
      .then(response => response.json())
      .then((data) => {
        const normalizedUsers = normalize(data, Schemas.USER_ARRAY);
        this.props.onLoadUsers(normalizedUsers.entities.users);
      });

    // Fetch users from API
    fetch(`/api/users/${this.props.currentUser.id}`)
      .then(response => response.json())
      .then((data) => {
        this.props.onLoadCurrentUser(data);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">
                  Kudos
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to="/give">
                  <NavItem eventKey={1}>Give Kudos</NavItem>
                </LinkContainer>
                <LinkContainer to="/kudos">
                  <NavItem eventKey={2}>My Kudos</NavItem>
                </LinkContainer>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1}>
                  {this.props.currentUser &&
                    `Signed in as ${this.props.currentUser.first_name} ${this.props.currentUser.last_name}`}
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">
            <Route
              exact
              path="/"
              component={UserListContainer}
            />
            <Route
              exact
              path="/users/:userId/kudos"
              component={KudosListContainer}
            />
            <Route
              exact
              path="/give"
              component={KudosFormContainer}
            />
            <Route
              exact
              path="/kudos"
              component={KudosListContainer}
            />
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  currentUser: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  onLoadUsers: PropTypes.func.isRequired,
  onLoadCurrentUser: PropTypes.func.isRequired,
};


export default App;
