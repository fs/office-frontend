import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home';
import { resetError } from '../../store/error/actions';

class HomeContainer extends Component {
  state = {
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  handleNotificationClose = () => {
    this.props.onResetError();
  };

  render() {
    return (
      <Home
        {...this.props}
        {...this.state}
        handleDrawerToggle={this.handleDrawerToggle}
        handleNotificationClose={this.handleNotificationClose}
      />
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error || state.users.error,
  loading: state.auth.loading,
  currentUser: state.auth.user,
  isAuthenticated: !!state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onResetError: () => dispatch(resetError()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
