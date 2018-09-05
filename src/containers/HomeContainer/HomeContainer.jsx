import React from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home';

class HomeContainer extends React.Component {
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
        isAuthenticated={this.props.isAuthenticated}
        handleDrawerToggle={this.handleDrawerToggle}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(HomeContainer);
