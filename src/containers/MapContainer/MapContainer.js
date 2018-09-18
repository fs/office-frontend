import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Map from '../../components/Map/Map';
import { databaseRef } from '../../firebase';
import tables from '../../tables';

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

  handlePopupClose = () => {
    this.setState({
      popup: {
        open: false,
      },
    });
  };

  handleTableClick = (event, tableId) => {
    this.props.onGetUserByTable(tableId);
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
    this.props
      .onGetUser(this.props.currentUser.userId)
      .then(() => {
        if (this.props.user.tableId) return this.props.onSetStatus(this.props.user.tableId, 'free');
        else return Promise.resolve();
      })
      .then(() => this.props.onSetStatus(tableId, 'taken'))
      .then(() => this.props.onSetTable(this.props.currentUser.userId, tableId));
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
    onSetTable: (userId, tableId) => dispatch(actions.setTable(userId, tableId)),
    onGetUserByTable: tableId => dispatch(actions.fetchUserByTable(tableId)),
    onGetUser: userId => dispatch(actions.fetchUser(userId)),
    onSetStatus: (tableId, status) => dispatch(actions.setStatus(tableId, status)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
