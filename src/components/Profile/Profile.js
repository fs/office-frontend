import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing.unit,
    width: 100,
    height: 100,
  },
  noPhoto: {
    backgroundColor: theme.palette.secondary.main,
  },
  icon: {
    fontSize: '60px',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
  },
});

const Profile = props => {
  const logoutButton = props.logout && (
    <Button
      className={props.classes.button}
      variant="outlined"
      fullWidth
      color="secondary"
      onClick={props.onLogout}
    >
      Logout
    </Button>
  );

  const avatar = props.photoUrl ? (
    <Avatar className={props.classes.avatar} src={props.photoUrl} />
  ) : (
    <Avatar className={`${props.classes.avatar} ${props.classes.noPhoto}`}>
      <PersonIcon className={props.classes.icon} />
    </Avatar>
  );

  return (
    <div className={props.classes.root}>
      {avatar}
      <Typography variant="headline">{props.name}</Typography>
      <Typography variant="subheading">{props.email}</Typography>
      {logoutButton}
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
  logout: PropTypes.bool,
};

export default withStyles(styles)(Profile);
