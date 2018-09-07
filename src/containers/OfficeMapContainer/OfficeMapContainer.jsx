import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfficeMap from '../../components/OfficeMap/OfficeMap';
import { addTableAsync, getTablesAsync, deleteTableAsync } from '../../store/actions/actions';

class OfficeMapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUserEmail: null,
      popup: null,
    };
  }

  setUserToTable = tableId => {
    const { tables } = this.props;

    Object.keys(tables).forEach(tableId => {
      if (this.tableId === tableId) {
        return;
      }
      if (tables[tableId] != null && tables[tableId].email === this.state.currentUserEmail) {
        this.props.deleteTable({ tableId, owner: tables[tableId] });
      }
    });
    this.props.addTable({
      tableId: tableId,
      owner: { name: 'liya', email: this.state.currentUserEmail },
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ currentUserEmail: nextProps.email });
    if (nextProps.updateTables === true) {
      this.props.getTables();
    }
  }

  componentDidMount() {
    this.props.getTables();
  }

  handleTableClick = (element, user) => {
    const rect = element.getBoundingClientRect();
    this.setState({
      popup: {
        x: rect.x,
        y: rect.y,
        user,
        tableId: element.id,
      },
    });
  };

  render() {
    console.log('State', this.state);
    return (
      <OfficeMap
        onTableClick={this.handleTableClick}
        setUserToTable={this.setUserToTable}
        {...this.props}
        {...this.state}
      />
    );
  }
}
export default connect(
  state => ({
    isAuthenticated: state.auth.token !== null,
    email: state.profile.email,
    isLoading: state.connectApi.isLoading,
    loaded: state.connectApi.loaded,
    tables: state.connectApi.tables,
    updateTables: state.connectApi.updateTables,
  }),
  { addTable: addTableAsync, getTables: getTablesAsync, deleteTable: deleteTableAsync }
)(OfficeMapContainer);
