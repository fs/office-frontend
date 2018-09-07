import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfficeMap from '../../components/OfficeMap/OfficeMap';
import { addTableAsync, getTablesAsync, deleteTableAsync } from '../../store/actions/actions';

class OfficeMapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      popup: null,
    };
  }

  setUserToTable = () => {
    const tableId = this.state.popup.tableId;
    const { tables } = this.props;
    this.setState({ popup: { opened: false } });
    Object.keys(tables).forEach(tableId => {
      if (this.tableId === tableId) {
        return;
      }
      if (tables[tableId] != null && tables[tableId].email === this.state.currentUser.email) {
        this.props.deleteTable({ tableId, owner: tables[tableId] });
      }
    });
    this.props.addTable({
      tableId: tableId,
      owner: this.state.currentUser,
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ currentUser: { email: nextProps.email, name: nextProps.name } });
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
        opened: true,
      },
    });
    setTimeout(() => {
      this.setState({ popup: { opened: false } });
    }, 3000);
  };

  render() {
    return (
      <OfficeMap
        innerRef={this.setWrapperRef}
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
    name: state.profile.displayName,
    isLoading: state.connectApi.isLoading,
    loaded: state.connectApi.loaded,
    tables: state.connectApi.tables,
    updateTables: state.connectApi.updateTables,
  }),
  { addTable: addTableAsync, getTables: getTablesAsync, deleteTable: deleteTableAsync }
)(OfficeMapContainer);
