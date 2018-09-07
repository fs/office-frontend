import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfficeMap from '../../components/OfficeMap/OfficeMap';
import { addTableAsync, deleteTableAsync } from '../../store/actions/actions';

class OfficeMapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  setUserToTable = () => {
    const tableId = this.props.popup.tableId;
    const { tables } = this.props;
    Object.keys(tables).forEach(tableId => {
      if (this.tableId === tableId) {
        return;
      }
      if (tables[tableId] != null && tables[tableId].email === this.state.currentUser.email) {
        this.props.deleteTable({ tableId, owner: tables[tableId] }, this.props.token);
      }
    });
    this.props.addTable(
      {
        tableId: tableId,
        owner: this.state.currentUser,
      },
      this.props.token
    );
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ currentUser: { email: nextProps.email, name: nextProps.name } });
  }

  render() {
    return (
      <OfficeMap
        innerRef={this.setWrapperRef}
        onTableClick={this.props.onTableShow}
        setUserToTable={this.setUserToTable}
        handleClosePopupClick={this.props.handleClosePopupClick}
        {...this.props}
        {...this.state}
      />
    );
  }
}
export default connect(
  state => ({
    isAuthenticated: state.auth.token !== null,
    token: state.auth.token,
    email: state.profile.email,
    name: state.profile.displayName,
    isLoading: state.connectApi.isLoading,
    tables: state.connectApi.tables,
  }),
  { addTable: addTableAsync, deleteTable: deleteTableAsync }
)(OfficeMapContainer);
