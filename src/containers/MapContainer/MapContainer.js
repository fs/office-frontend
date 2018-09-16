import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Map from '../../components/Map/Map';

class MapContainer extends Component {
  // create tables in database
  // componentDidMount() {
  //   tables.map(item => {
  //     databaseRef.ref('/tables1').push(item);
  //   });
  // }

  state = {
    popup: {
      x: 0,
      y: 0,
      centerHorizontal: 0,
      centerVertical: 0,
      open: false,
    },
  };

  componentDidMount() {
    this.props.onGetTables();
  }

  handlePopupClose = () => {
    this.setState({
      popup: {
        open: false,
      },
    });
  };

  handleTableClick = (event, tableId) => {
    const table = this.props.tables[tableId];
    const userId = table.userId;

    if (userId) {
      this.props.onGetUser(userId);
    }

    const tableClientRect = event.target.getBoundingClientRect();
    this.setState({
      popup: {
        x: tableClientRect.x,
        y: tableClientRect.y,
        // center of the table
        centerHorizontal: tableClientRect.width / 2,
        centerVertical: tableClientRect.height / 2,
        tableId: tableId,
        open: true,
      },
    });
  };

  handleHoldClick = tableId => {
    console.log(tableId);
  };

  render() {
    console.log(this.state);
    return (
      <Map
        {...this.props}
        {...this.state}
        onTableClick={this.handleTableClick}
        handlePopupClose={this.handlePopupClose}
        handleHoldClick={this.handleHoldClick}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.tables.error || state.users.error,
    loading: state.tables.loading,
    tables: state.tables.tables,
    loadingUser: state.users.loading,
    user: state.users.user,
    // get user from Database in the feature
    currentUser: state.auth.user,
    isAuthenticated: !!state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTables: () => dispatch(actions.fetchTables()),
    onGetUser: userId => dispatch(actions.fetchUser(userId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
