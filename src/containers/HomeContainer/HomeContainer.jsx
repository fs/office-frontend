import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home';

class HomeContainer extends Component {
  state = {
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  };

  render() {
    return <Home {...this.props} {...this.state} handleDrawerToggle={this.handleDrawerToggle} />;
  }
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  currentUser: state.auth.user,
  isAuthenticated: !!state.auth.user,
});

export default connect(mapStateToProps)(HomeContainer);
