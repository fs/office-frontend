import React, { Component } from 'react';
import { connect } from 'react-redux';
import Auth from '../../components/Auth/Auth';
import * as actions from '../../store/actions/index';

class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
    name: '',
    file: null,
    isSignUp: true,
  };

  handleEmailChange = value => {
    this.setState({ email: value });
  };

  handlePasswordChange = value => {
    this.setState({ password: value });
  };

  handleNameChange = value => {
    this.setState({ name: value });
  };

  handleFileChange = event => {
    console.log(event.target.files);
    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.files);
    this.props.onAuth(this.state.email, this.state.password, this.state.isSignUp);
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
        name={this.state.name}
        onEmailChange={this.handleEmailChange}
        onPasswordChange={this.handlePasswordChange}
        onNameChange={this.handleNameChange}
        onFileChange={this.handleFileChange}
        onSubmit={this.handleSubmit}
        onSwitchAuthMode={this.handleSwitchAuthMode}
        onLogout={this.props.onLogout}
        isSignUp={this.state.isSignUp}
        loading={this.props.loading}
        error={this.props.error}
        isAuthenticated={this.props.isAuthenticated}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
    onLogout: () => dispatch(actions.logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
