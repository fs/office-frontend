import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { showTableInfo } from '../../store/tables/actions';
import Table from '../../components/Table/Table';

class TableContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  handleTableClick = () => {
    this.props.showTableInfo(this.props.tableId);
  };

  render() {
    const { table, isOccupied } = this.props;
    return (
      <Table
        x={table.x}
        y={table.y}
        transform={table.transform}
        onClick={this.handleTableClick}
        isOccupied={isOccupied}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  table: state.tables.tables[ownProps.tableId],
  isOccupied: !!state.tables.usersConnections[ownProps.tableId],
});

const mapDispatchToProps = {
  showTableInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableContainer);
