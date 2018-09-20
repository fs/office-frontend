import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home';

class HomeContainer extends Component {
  state = {
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  };

  render() {
    return (
      <Home
        user={this.props.user}
        loading={this.props.loading}
        isAuthenticated={this.props.isAuthenticated}
        handleDrawerToggle={this.handleDrawerToggle}
        open={this.state.open}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    user: state.auth.user,
    isAuthenticated: !!state.auth.user,
  };
};

export default connect(mapStateToProps)(HomeContainer);
