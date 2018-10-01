import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setTable } from '../../store/users/actions';
import { hideTableInfo } from '../../store/tables/actions';
import Popup from '../../components/Popup/Popup';

class PopupContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  state = {
    popupTop: 0,
    popupLeft: 0,
  };

  el = document.createElement('div');

  componentDidMount() {
    document.body.appendChild(this.el);
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    document.body.removeChild(this.el);
    window.removeEventListener('resize', this.handleResize);
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

  handleResize = () => {
    const { left, top, right, bottom } = this.props.rectRef.current.getBoundingClientRect();
    const popupTop = top + (bottom - top) / 2;
    const popupLeft = left + (right - left) / 2;
    this.setState({
      popupTop,
      popupLeft,
    });
  };

  render() {
    // const { left, top, right, bottom } = this.props.rectRef.current.getBoundingClientRect();
    // const popupTop = top + (bottom - top) / 2;
    // const popupLeft = left + (right - left) / 2;

    return ReactDOM.createPortal(
      <Popup
        {...this.props}
        handleHoldClick={this.handleHoldClick}
        handleReleaseClick={this.handleReleaseClick}
        handlePopupClose={this.handlePopupClose}
        popupTop={this.state.popupTop}
        popupLeft={this.state.popupLeft}
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
