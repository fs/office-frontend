import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import Profile from '../Profile/Profile';

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
  progressWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing.unit,
  },
});

const Popup = ({
  loading,
  classes,
  user,
  isCurrentUser,
  isAuthenticated,
  handleHoldClick,
  tableId,
  handlePopupClose,
  x,
  y,
  centerVertical,
  centerHorizontal,
}) => {
  let content = null;

  if (loading) {
    content = (
      <div className={classes.progressWrapper}>
        <CircularProgress color="secondary" size={48} />
      </div>
    );
  } else if (user) {
    content = (
      <Profile name={user.name} email={user.email} photoUrl={user.photoUrl}>
        {isCurrentUser ? (
          <Button
            color="secondary"
            aria-label="Release this place"
            fullWidth
            className={classes.button}
            onClick={() => handleHoldClick(null)}
          >
            Release this place
          </Button>
        ) : null}
      </Profile>
    );
  } else {
    content = isAuthenticated ? (
      <Button
        variant="contained"
        color="secondary"
        aria-label="Hold this place"
        fullWidth
        onClick={() => handleHoldClick(tableId)}
      >
        Hold this place
      </Button>
    ) : (
      <Typography>Please, sign in to hold this place</Typography>
    );
  }
  return (
    <ClickAwayListener onClickAway={handlePopupClose}>
      <Paper
        className={classes.root}
        style={{
          top: `${y + centerVertical}px`,
          left: `${x + centerHorizontal}px`,
        }}
        elevation={24}
      >
        {content}
      </Paper>
    </ClickAwayListener>
  );
};

Popup.defaultProps = {
  user: null,
  isCurrentUser: null,
};

Popup.propTypes = {
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    progressWrapper: PropTypes.string,
  }).isRequired,
  user: PropTypes.shape({
    email: PropTypes.string,
    name: PropTypes.string,
    photoUrl: PropTypes.string,
  }),
  isCurrentUser: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired,
  handleHoldClick: PropTypes.func.isRequired,
  tableId: PropTypes.string.isRequired,
  handlePopupClose: PropTypes.func.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  centerVertical: PropTypes.number.isRequired,
  centerHorizontal: PropTypes.number.isRequired,
};

export default withStyles(styles)(Popup);
