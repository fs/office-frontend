import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTable } from '../../store/users/actions';
import { hideTableInfo } from '../../store/tables/actions';
import Popup from '../../components/Popup/Popup';

class PopupContainer extends Component {
  // static propTypes = {
  //   prop: PropTypes
  // }

  handleHoldClick = () => {
    this.props.setTable(this.props.currentUser.userId, this.props.tableId);
  };

  handlePopupClose = () => {
    this.props.hideTableInfo();
  };

  render() {
    return (
      <Popup
        {...this.props}
        handleHoldClick={this.handleHoldClick}
        handlePopupClose={this.handlePopupClose}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.user,
});

const mapDispatchToProps = {
  setTable,
  hideTableInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PopupContainer);
