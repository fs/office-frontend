import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setTable } from '../../store/users/actions';
import { hideTableInfo } from '../../store/tables/actions';
import BoundingClientRectProvider from '../../components/BoundingClientRectProvider/BoundingClientRectProvider';
import Popup from '../../components/Popup/Popup';

class PopupContainer extends Component {
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

  handlePopupClose = e => {
    if (e.target.dataset.stopPropagation === 'true') {
      return;
    }
    this.props.hideTableInfo();
  };

  render() {
    return ReactDOM.createPortal(
      <BoundingClientRectProvider elem={this.props.rectRef.current}>
        {({ top, left, width, height }) => (
          <Popup
            {...this.props}
            handleHoldClick={this.handleHoldClick}
            handleReleaseClick={this.handleReleaseClick}
            handlePopupClose={this.handlePopupClose}
            popupTop={top + height / 2}
            popupLeft={left + width / 2}
          />
        )}
      </BoundingClientRectProvider>,
      this.el
    );
  }
}

const mapStateToProps = state => {
  const currentUser = state.auth.user;
  const isAuthenticated = !!currentUser;
  const tableOwner = state.users.users[state.tables.usersConnections[state.tables.currentTableId]];
  const isOccupied = !!tableOwner;
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
