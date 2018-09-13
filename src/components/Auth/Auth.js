import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Google from 'mdi-material-ui/Google';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import Profile from '../Profile/Profile';

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 3,
  },
  wrapper: {
    position: 'relative',
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

const Auth = props => {
  const profile = props.isAuthenticated ? (
    <Profile name={props.user.name} email={props.user.email} photoUrl={props.user.photoUrl}>
      <div className={props.classes.wrapper}>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          disabled={props.loading}
          onClick={props.onLogout}
        >
          Logout
        </Button>
        {props.loading && (
          <CircularProgress color="secondary" size={24} className={props.classes.buttonProgress} />
        )}
      </div>
    </Profile>
  ) : (
    <div className={props.classes.wrapper}>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        disabled={props.loading}
        onClick={props.onAuth}
      >
        <Google className={props.classes.leftIcon} />
        Sign in with Google
      </Button>
      {props.loading && (
        <CircularProgress color="secondary" size={24} className={props.classes.buttonProgress} />
      )}
    </div>
  );

  return <div className={props.classes.root}>{profile}</div>;
};

Auth.propTypes = {
  error: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
