import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
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
});

const Auth = ({
  email,
  password,
  isSignUp,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  onSwitchAuthMode,
  classes,
}) => {
  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography variant="headline">Sign in</Typography>
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
          />
        </FormControl>
        <Button type="submit" fullWidth variant="raised" color="primary" className={classes.button}>
          Sign {isSignUp ? 'up' : 'in'}
        </Button>
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
    </Paper>
  );
};

Auth.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isSignUp: PropTypes.bool.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Auth);
