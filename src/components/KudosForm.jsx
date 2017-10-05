import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';

import UserDropdown from './UserDropdown';

class KudosForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeReason = this.onChangeReason.bind(this);
    this.submitKudos = this.submitKudos.bind(this);
  }

  onChangeUser(event) {
    const kudosReceiverId = event.target.value;
    const kudosReceiverName = kudosReceiverId && event.target.options[kudosReceiverId].innerText;

    this.setState({
      kudosReceiverId,
      kudosReceiverName,
      kudosSaved: false,
    });
  }

  onChangeReason(event) {
    this.setState({
      reasonText: event.target.value,
      kudosSaved: false,
    });
  }

  submitKudos(event) {
    event.preventDefault();

    this.setState({
      hasError: false,
    });

    const kudosData = {
      giver_id: this.props.kudosGiverId,
      receiver_id: this.state.kudosReceiverId,
      text: this.state.reasonText,
    };

    // Submit Kudos
    fetch(`/api/kudos`, // eslint-disable-line
      {
        method: 'POST',
        body: JSON.stringify(kudosData),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      .then((response) => {
        if (response.ok) {
          this.setState({ kudosSaved: true });
        } else {
          this.setState({ hasError: true });
        }
      });
  }

  render() {
    return (
      <div>
        <h2 className="heading">Give Kudos</h2>
        <form onSubmit={this.submitKudos}>
          <FormGroup>
            <ControlLabel>RECIPIENT</ControlLabel>
            {this.props && this.props.users &&
              <FormGroup>
                <UserDropdown
                  placeholder="Select a user"
                  users={this.props.users}
                  onChangeUser={this.onChangeUser}
                />
              </FormGroup>
            }
          </FormGroup>
          <FormGroup>
            <ControlLabel>REASON</ControlLabel>
            <FormControl componentClass="textarea" onChange={this.onChangeReason} />
          </FormGroup>
          <FormGroup>
            <Button type="submit" bsStyle="primary">
              Submit
            </Button>
          </FormGroup>
          <div className={this.state.kudosSaved ? 'success' : 'hidden'}>
            Kudos sent to <Link to={`/users/${this.state.kudosReceiverId}/kudos`}>{this.state.kudosReceiverName}</Link>
          </div>
          <div className={this.state.hasError ? 'error' : 'hidden'}>
            Something went wrong
          </div>
        </form>
      </div>
    );
  }
}

KudosForm.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
  kudosGiverId: PropTypes.number,
};

export default KudosForm;
