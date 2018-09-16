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
    console.log('Table click', tableId);
    const tableClientRect = event.target.getBoundingClientRect();
    this.setState({
      popup: {
        x: tableClientRect.x,
        y: tableClientRect.y,
        // center of the table
        centerHorizontal: tableClientRect.width / 2,
        centerVertical: tableClientRect.height / 2,
        open: true,
      },
    });
  };

  render() {
    console.log(this.state);
    return (
      <Map
        {...this.props}
        {...this.state}
        onTableClick={this.handleTableClick}
        handlePopupClose={this.handlePopupClose}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.tables.error,
    loading: state.tables.loading,
    tables: state.tables.tables,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetTables: () => dispatch(actions.fetchTables()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);
