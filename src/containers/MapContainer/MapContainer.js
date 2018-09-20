import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTable } from '../../store/users/actions';
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
      tableId: null,
      open: false,
    },
    userId: null,
  };

  handlePopupClose = () => {
    this.setState({
      popup: {
        open: false,
      },
    });
  };

  handleTableClick = (event, tableId) => {
    this.setState({
      userId: this.props.usersConnections[tableId],
    });
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
    this.props.onSetTable(this.props.currentUser.userId, tableId).then(() => {
      this.setState({
        userId: this.props.usersConnections[tableId],
      });
    });
  };

  render() {
    console.log(this.props.users[this.state.userId]);
    return (
      <Map
        {...this.props}
        popup={this.state.popup}
        user={this.props.users[this.state.userId]}
        onTableClick={this.handleTableClick}
        handlePopupClose={this.handlePopupClose}
        handleHoldClick={this.handleHoldClick}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.tables.loading,
    tables: Object.keys(state.tables.tables).map(i => ({ ...state.tables.tables[i], id: i })),
    usersConnections: state.tables.usersConnections,
    users: state.users.users,
    currentUser: state.auth.user,
    isAuthenticated: !!state.auth.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetTable: (userId, tableId) => dispatch(setTable(userId, tableId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
