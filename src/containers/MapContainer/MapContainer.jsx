import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTable } from '../../store/users/actions';
import Map from '../../components/Map/Map';
// import { databaseRef } from '../../firebase';
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
    const { usersConnections } = this.props;
    this.setState({
      userId: usersConnections[tableId],
    });
    const tableClientRect = event.target.getBoundingClientRect();
    this.setState({
      popup: {
        x: tableClientRect.x,
        y: tableClientRect.y,
        // center of the table
        centerHorizontal: tableClientRect.width / 2,
        centerVertical: tableClientRect.height / 2,
        tableId,
        open: true,
      },
    });
  };

  handleHoldClick = tableId => {
    const { onSetTable, currentUser, usersConnections } = this.props;
    onSetTable(currentUser.userId, tableId).then(() => {
      this.setState({
        userId: usersConnections[tableId],
      });
    });
  };

  render() {
    const { popup, userId } = this.state;
    const { users } = this.props;

    console.log('users', users);
    console.log('user', users[userId]);
    console.log('state userId', userId);
    return (
      <Map
        {...this.props}
        popup={popup}
        user={users[userId]}
        onTableClick={this.handleTableClick}
        handlePopupClose={this.handlePopupClose}
        handleHoldClick={this.handleHoldClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  loading: state.tables.loading,
  loadingUser: state.users.loading,
  tables: Object.keys(state.tables.tables).map(i => ({ ...state.tables.tables[i], id: i })),
  usersConnections: state.tables.usersConnections,
  users: state.users.users,
  currentUser: state.auth.user,
  isAuthenticated: !!state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  onSetTable: (userId, tableId) => dispatch(setTable(userId, tableId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
