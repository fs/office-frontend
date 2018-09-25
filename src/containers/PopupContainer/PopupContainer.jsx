import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTable } from '../../store/users/actions';
import { hideTableInfo } from '../../store/tables/actions';
import Popup from '../../components/Popup/Popup';

class PopupContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
  }

  handleHoldClick = () => {
    this.props.setTable(this.props.currentUser.userId, this.props.currentTableId);
  };

  handleReleaseClick = () => {
    this.props.setTable(this.props.currentUser.userId, null);
  };

  handlePopupClose = () => {
    const oldTableId = this.props.currentTableId;
    console.log(oldTableId);
    setTimeout(() => {
      console.log(oldTableId);
      console.log(this.props.currentTableId);
      if (oldTableId === this.props.currentTableId) {
        this.props.hideTableInfo();
      }
    }, 1000);
  };

  render() {
    return ReactDOM.createPortal(
      <Popup
        {...this.props}
        handleHoldClick={this.handleHoldClick}
        handleReleaseClick={this.handleReleaseClick}
        handlePopupClose={this.handlePopupClose}
      />,
      this.el
    );
  }
}

const mapStateToProps = state => {
  const currentUser = state.auth.user;
  const isAuthenticated = !!currentUser;
  const tableOwner = state.users.users[state.tables.usersConnections[state.tables.currentTableId]];
  const isOccupied = !!tableOwner;
  console.log(tableOwner);
  return {
    currentUser,
    isAuthenticated,
    tableOwner,
    isOccupied,
    loadingUser: state.users.loading,
    currentTableId: state.tables.currentTableId,
    isMyTable: isAuthenticated && isOccupied && currentUser.userId === tableOwner.id,
  };
};

const mapDispatchToProps = {
  setTable,
  hideTableInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupContainer);
