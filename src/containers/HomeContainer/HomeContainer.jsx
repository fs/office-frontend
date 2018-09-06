import React, { Component } from 'react';
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
    return <Home handleDrawerToggle={this.handleDrawerToggle} {...this.state} />;
  }
}

export default HomeContainer;
