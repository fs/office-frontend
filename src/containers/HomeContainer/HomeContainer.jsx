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

  handleTableShow = (element, user) => {
    const rect = element.getBoundingClientRect();
    this.setState({
      popup: {
        x: rect.x,
        y: rect.y,
        user,
        tableId: element.id,
        opened: true,
      },
    });
    setTimeout(() => {
      this.setState({ popup: { opened: false } });
    }, 3000);
  };

  render() {
    return (
      <Home
        isAuthenticated={this.props.isAuthenticated}
        handleDrawerToggle={this.handleDrawerToggle}
        {...this.state}
        tables={this.props.tables}
        onTableShow={this.handleTableShow}
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
