import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Map from '../../components/Map/Map';
// import {databaseRef} from '../../firebase';
// import tables from '../../tables';

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

  deleteUser = userId => {
    return new Promise(resolve => {
      Object.keys(this.props.tables).map(tableId => {
        if (this.props.tables[tableId].userId === userId) {
          const updatedTable = { ...this.props.tables[tableId] };
          delete updatedTable['userId'];
          resolve(this.props.onDeleteUser(tableId, updatedTable));
        }
      });
    });
  };

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
    } else {
      this.props.onResetUser();
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
    this.deleteUser(this.props.currentUser.userId)
      .then(() => this.props.onSetUser(tableId, this.props.currentUser.userId))
      .then(() => this.props.onGetUser(this.props.currentUser.userId));
  };

  render() {
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
    onSetUser: (tableId, userId) => dispatch(actions.setUser(tableId, userId)),
    onResetUser: () => dispatch(actions.resetUser()),
    onDeleteUser: (tableId, updatedTable) => dispatch(actions.deleteUser(tableId, updatedTable)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
