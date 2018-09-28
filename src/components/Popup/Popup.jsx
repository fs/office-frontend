import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { withStyles } from '@material-ui/core/styles';
import PopupContent from './PopupContent/PopupContent';

const styles = theme => ({
  root: {
    position: 'absolute',
    padding: theme.spacing.unit * 3,
    minWidth: '250px',
    transform: `translate(-50%, calc(-100% - ${theme.spacing.unit * 1.5}px))`,
    zIndex: 1250,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: `-${theme.spacing.unit * 1.5}px`,
      left: '50%',
      width: theme.spacing.unit * 3,
      height: theme.spacing.unit * 3,
      backgroundColor: 'white',
      transform: 'translateX(-50%) rotate(45deg)',
    },
  },
});

const Popup = ({ classes, handlePopupClose, rectRef, ...rest }) => {
  const { left, top, right, bottom } = rectRef.current.getBoundingClientRect();
  const popupTop = top + (bottom - top) / 2;
  const popupLeft = left + (right - left) / 2;

  return (
    <ClickAwayListener onClickAway={handlePopupClose} touchEvent="onTouchStart">
      <Paper
        className={classes.root}
        style={{
          top: `${popupTop}px`,
          left: `${popupLeft}px`,
        }}
        elevation={24}
      >
        <PopupContent {...rest} />
      </Paper>
    </ClickAwayListener>
  );
};

Popup.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string,
    progressWrapper: PropTypes.string,
  }).isRequired,
  handlePopupClose: PropTypes.func.isRequired,
  rectRef: PropTypes.shape({
    current: PropTypes.object.isRequired,
  }).isRequired,
};

export default withStyles(styles)(Popup);
