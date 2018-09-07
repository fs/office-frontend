import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home';
import * as actions from '../../store/actions/index';

class HomeContainer extends Component {
  state = {
    open: false,
    popup: null,
  };

  componentDidMount() {
    this.props.onTryAutoSignup();
    this.props.onGetTables();
  }

  handleDrawerToggle = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  };

  handleClick = id => {
    console.log(id);
  };

  render() {
    return (
      <Home
        isAuthenticated={this.props.isAuthenticated}
        handleDrawerToggle={this.handleDrawerToggle}
        {...this.state}
        tables={this.props.tables}
        clicked={this.handleClick}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    tables: state.connectApi.tables,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onGetTables: () => dispatch(actions.getTablesAsync()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
