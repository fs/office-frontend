import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../../components/Auth/Auth';
import * as actions from '../../store/actions/index';

class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
    isSignUp: true,
  };

  handleEmailChange = value => {
    this.setState({ email: value });
  };

  handlePasswordChange = value => {
    this.setState({ password: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onAuth(this.state.email, this.state.password, this.state.isSignUp);
    console.log('Form submit');
    console.log('[email]', this.state.email);
    console.log('[password]', this.state.password);
  };

  handleSwitchAuthMode = () => {
    this.setState(prevState => {
      return { isSignUp: !prevState.isSignUp };
    });
  };

  render() {
    return (
      <Auth
        email={this.state.email}
        password={this.state.password}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onSubmit={this.handleSubmit}
        onSwitchAuthMode={this.handleSwitchAuthMode}
        isSignUp={this.state.isSignUp}
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AuthContainer);
