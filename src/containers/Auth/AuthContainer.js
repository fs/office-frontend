import React, { Component } from 'react';
import Auth from '../../components/Auth/Auth';

export default class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
  };

  handleEmailChange = value => {
    this.setState({ email: value });
  };

  handlePasswordChange = value => {
    this.setState({ password: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('Form submit');
    console.log('[email]', this.state.email);
    console.log('[password]', this.state.password);
  };

  render() {
    return (
      <Auth
        email={this.state.email}
        password={this.state.password}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
