import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../../components/Home/Home';
import * as actions from '../../store/actions/index';

class HomeContainer extends Component {
  state = {
    open: false,
    popup: null,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.updateTables === true) {
      this.props.onGetTables();
    }
  }

  componentDidMount() {
    // this.props.onAuth();
    // this.props.onTryAutoSignup();
    this.props.onGetTables();
  }

  handleDrawerToggle = () => {
    this.setState(prevState => {
      return {
        open: !prevState.open,
      };
    });
  };

  handleClosePopupClick = () => {
    this.setState({
      popup: {
        opened: false,
      },
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
  };

  render() {
    console.log('Tables', this.props.tables);
    return (
      <Home
        user={this.props.user}
        loading={this.props.loading}
        isAuthenticated={this.props.isAuthenticated}
        handleDrawerToggle={this.handleDrawerToggle}
        tables={[]}
        onTableShow={this.handleTableShow}
        handleClosePopupClick={this.handleClosePopupClick}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    tables: state.tables.tables,
    loading: state.auth.loading,
    user: state.auth.user,
    isAuthenticated: !!state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTables: () => dispatch(actions.fetchTables()),
    // onGetTables: () => dispatch(actions.getTablesAsync()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
