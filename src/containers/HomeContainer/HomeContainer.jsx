import React, { Component } from 'react';
import Home from '../../components/Home/Home';

class HomeContainer extends Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <Home
        handleDrawerOpen={this.handleDrawerOpen}
        handleDrawerClose={this.handleDrawerClose}
        {...this.state}
      />
    );
  }
}

export default HomeContainer;
