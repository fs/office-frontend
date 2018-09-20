import React, { Fragment } from 'react';
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
});

// handleClosePopupClick
const Popup = props => {
  let content = null;

  if (props.loading) {
    content = (
      <div className={props.classes.progressWrapper}>
        <CircularProgress color="secondary" size={48} />
      </div>
    );
  } else {
    if (props.user) {
      content = (
        <Profile name={props.user.name} email={props.user.email} photoUrl={props.user.photoUrl} />
      );
    } else {
      content = props.isAuthenticated ? (
        <Button
          variant="contained"
          color="secondary"
          aria-label="Hold this place"
          fullWidth
          onClick={() => props.handleHoldClick(props.tableId)}
        >
          Hold this place
        </Button>
      ) : (
        <Typography>Please, sign in to hold this place</Typography>
      );
    }
  }
  return (
    <ClickAwayListener onClickAway={props.handlePopupClose}>
      <Paper
        className={props.classes.root}
        style={{
          top: props.y + props.centerVertical + 'px',
          left: props.x + props.centerHorizontal + 'px',
        }}
        elevation={24}
      >
        {content}
      </Paper>
    </ClickAwayListener>
  );
};

export default withStyles(styles)(Popup);
