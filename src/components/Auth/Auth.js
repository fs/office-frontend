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
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
});

const Auth = props => {
  const profile = props.isAuthenticated ? (
    <Profile
      name="Vladimir Gornyy"
      photoUrl="https://lh4.googleusercontent.com/-6BwQjl5LND4/AAAAAAAAAAI/AAAAAAAAAEE/sNDfU2xtZgc/photo.jpg"
      email="vladimir.gornyy@flatstack.com"
      onLogout={props.onLogout}
      logout
    />
  ) : (
    <Button variant="contained" fullWidth color="secondary" onClick={props.onAuth}>
      <Google className={props.classes.leftIcon} />
      Sign in with Google
    </Button>
  );

  return <div className={props.classes.root}>{profile}</div>;
};

Auth.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  isAuthenticated: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
