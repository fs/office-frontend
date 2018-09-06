import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 3}px `,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
  buttonWrapper: {
    marginTop: theme.spacing.unit * 3,
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  error: {
    marginTop: theme.spacing.unit * 3,
    color: red[500],
    textAlign: 'center',
  },
  input: {
    display: 'none',
  },
});

const Auth = ({
  email,
  password,
  name,
  isSignUp,
  onEmailChange,
  onPasswordChange,
  onFileChange,
  onNameChange,
  onSubmit,
  onSwitchAuthMode,
  onLogout,
  loading,
  error,
  isAuthenticated,
  classes,
}) => {
  const errorMessage = error && error.message.split('_').join(' ');

  const signUpFields = isSignUp ? (
    <Fragment>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="name">Full Name</InputLabel>
        <Input
          name="name"
          id="name"
          autoComplete="name"
          onChange={event => onNameChange(event.target.value)}
          value={name}
          error={error}
        />
      </FormControl>
      <div className={classes.buttonWrapper}>
        <input
          accept="image/png, image/jpeg"
          className={classes.input}
          id="contained-button-file"
          name="photo"
          type="file"
          onChange={onFileChange}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" fullWidth component="span" color="secondary">
            Upload photo
          </Button>
        </label>
      </div>
    </Fragment>
  ) : null;

  let authFrom = (
    <Fragment>
      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography variant="headline">Sign {isSignUp ? 'up' : 'in'}</Typography>
      <form className={classes.form} onSubmit={onSubmit}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            autoFocus
            onChange={event => onEmailChange(event.target.value)}
            value={email}
            error={error}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={event => onPasswordChange(event.target.value)}
            value={password}
            error={error}
          />
        </FormControl>
        {signUpFields}
        {errorMessage && <Typography className={classes.error}>{errorMessage}</Typography>}
        <div className={classes.buttonWrapper}>
          <Button type="submit" fullWidth variant="raised" color="primary" disabled={loading}>
            Sign {isSignUp ? 'up' : 'in'}
          </Button>
          {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </form>
      <Button
        variant="text"
        fullWidth
        color="secondary"
        className={classes.button}
        onClick={onSwitchAuthMode}
      >
        Switch to sign {isSignUp ? 'in' : 'up'}
      </Button>
    </Fragment>
  );

  if (isAuthenticated) {
    authFrom = (
      <Button
        variant="contained"
        fullWidth
        color="secondary"
        className={classes.button}
        onClick={onLogout}
      >
        Logout
      </Button>
    );
  }

  return <div className={classes.wrapper}>{authFrom}</div>;
};

Auth.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isSignUp: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
