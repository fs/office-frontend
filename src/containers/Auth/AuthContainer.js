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

  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.onFetchProfile(token);
    }
  }

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
    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props
      .onAuth(this.state.email, this.state.password, this.state.isSignUp, this.state.name)
      .then(() => this.props.onFetchProfile(this.props.token))
      .catch(error => console.log('Lox epta', error));
  };

  handleUpdateProfile = event => {
    event.preventDefault();
    this.props.onUpdateProfile(this.props.token, this.state.name, '/test-photo.jpg');
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
        onUpdateProfile={this.handleUpdateProfile}
        displayName={this.props.displayName}
        photoUrl={this.props.photoUrl}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token,
    isAuthenticated: state.auth.token !== null,
    displayName: state.profile.displayName,
    photoUrl: state.profile.photoUrl,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password, isSignUp, displayName, photoUrl) =>
      dispatch(actions.auth(email, password, isSignUp, displayName, photoUrl)),
    onLogout: () => dispatch(actions.logout()),
    onUpdateProfile: (idToken, displayName, photoUrl) =>
      dispatch(actions.updateProfile(idToken, displayName, photoUrl)),
    onFetchProfile: idToken => dispatch(actions.fetchUserProfile(idToken)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthContainer);
