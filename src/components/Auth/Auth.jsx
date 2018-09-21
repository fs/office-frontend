import React from 'react';
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

const Auth = ({ isAuthenticated, currentUser, classes, loading, onAuth, onLogout }) => {
  const profile = isAuthenticated ? (
    <Profile name={currentUser.name} email={currentUser.email} photoUrl={currentUser.photoUrl}>
      <div className={classes.wrapper}>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          disabled={loading}
          onClick={onLogout}
        >
          Logout
        </Button>
        {loading && (
          <CircularProgress color="secondary" size={24} className={classes.buttonProgress} />
        )}
      </div>
    </Profile>
  ) : (
    <div className={classes.wrapper}>
      <Button variant="contained" color="secondary" fullWidth disabled={loading} onClick={onAuth}>
        <Google className={classes.leftIcon} />
        Sign in with Google
      </Button>
      {loading && (
        <CircularProgress color="secondary" size={24} className={classes.buttonProgress} />
      )}
    </div>
  );

  return <div className={classes.root}>{profile}</div>;
};

Auth.defaultProps = {
  currentUser: null,
};

Auth.propTypes = {
  loading: PropTypes.bool.isRequired,
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    photoUrl: PropTypes.string,
    userId: PropTypes.string,
  }),
  isAuthenticated: PropTypes.bool.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    wrapper: PropTypes.string,
    leftIcon: PropTypes.string,
    buttonProgress: PropTypes.string,
  }).isRequired,
  onAuth: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default withStyles(styles)(Auth);
