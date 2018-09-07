import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PersonIcon from '@material-ui/icons/Person';
import ClearIcon from '@material-ui/icons/Clear';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1000,
    maxWidth: '300px',
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    filter: 'drop-shadow(0 0 2px rgba(0, 0, 0, 0.3))',
    transform: 'translate(-50%,-100%)',
    '&:before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: '-16px',
      left: '50%',
      zIndex: 999,
      transform: 'translateX(-50%)',
      borderStyle: 'solid',
      borderWidth: '16px 16px 0 16px',
      borderColor: 'white transparent transparent transparent',
    },
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  clearButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
  },
});

const Popup = ({
  classes,
  user,
  x,
  y,
  onHoldPlace,
  isAuthenticated,
  currentUserEmail,
  handleClosePopupClick,
}) => {
  return (
    <Paper className={classes.root} elevation={0} style={{ top: y + 'px', left: x + 17 + 'px' }}>
      {user ? (
        <Fragment>
          <ClearIcon className={classes.clearButton} onClick={handleClosePopupClick} />
          <Avatar className={classes.avatar}>
            <PersonIcon />
          </Avatar>
          <Typography variant="headline" component="h3">
            {currentUserEmail == user.email ? 'You are here' : user.name}
          </Typography>
          <Typography>{user.email}</Typography>
        </Fragment>
      ) : isAuthenticated ? (
        <Button variant="contained" fullWidth color="secondary" onClick={onHoldPlace}>
          Hold this place
        </Button>
      ) : (
        <p>Please, sign in to hold this place</p>
      )}
    </Paper>
  );
};

export default withStyles(styles)(Popup);
